import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * Affiliate destinations live in `checkout-redirects.mjs`.
 * Visible buy buttons use those URLs directly.
 * Legacy `/go/…` paths still redirect to the same destinations.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for legacy /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  wardogs: 'deadlock',
  hwidSpoofer: 'hwid-spoofer',
  cloudDma: 'cloud-dma',
  ugc: 'ugc',
  skinChanger: 'skin-changer',
  partnerShop: 'shop',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

function appendQuery(base: string, extra: string): string {
  if (!extra) return base;
  return `${base}${base.includes('?') ? '&' : '?'}${extra}`;
}

/** Store URL shown next to Buy now (decoded `to=` so the AMAN link is readable). */
export function formatVisibleCheckoutUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const to = parsed.searchParams.get('to');
    if (to) return `${parsed.origin}${parsed.pathname}?to=${to}`;
    return url;
  } catch {
    return url;
  }
}

/** Visible buy URL for a product. */
export function checkoutPath(product: CheckoutProduct): string {
  return CHECKOUT[product];
}

/** Default main-product buy URL (header, hero CTAs, support). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('wardogs');

/** HWID Spoofer buy URL. */
export const HWID_CHECKOUT_PATH = checkoutPath('hwidSpoofer');

export const CLOUD_DMA_CHECKOUT_PATH = checkoutPath('cloudDma');

export const UGC_CHECKOUT_PATH = checkoutPath('ugc');

export const SKIN_CHANGER_CHECKOUT_PATH = checkoutPath('skinChanger');

/** Map internal product slugs to affiliate checkout URLs. */
export function checkoutForSlug(slug: string): string {
  const product = CHECKOUT_SLUG_TO_PRODUCT[slug];
  return checkoutPath(product ?? 'wardogs');
}

/** Blog / legacy hrefs → current affiliate URLs. */
export function resolveCheckoutHref(href: string): string {
  const withOptions = (product: CheckoutProduct): string => {
    try {
      const incoming = new URL(href, 'https://deadlockhacks.net');
      incoming.searchParams.delete('to');
      const query = incoming.searchParams.toString();
      return appendQuery(checkoutPath(product), query) + incoming.hash;
    } catch {
      return checkoutPath(product);
    }
  };

  if (!href.startsWith('http')) {
    const normalized = href.startsWith('/') ? href : `/${href}`;
    const goMatch = normalized.match(/^\/go\/([^/?#]+)\/?/);
    if (goMatch) {
      const slug = goMatch[1];
      if (slug === 'wardogs' || slug === 'deadlock') {
        return withOptions('wardogs');
      }
      const product = CHECKOUT_SLUG_TO_PRODUCT[slug];
      if (product) return withOptions(product);
    }
    return normalized;
  }

  if (href.startsWith('http')) {
    try {
      const u = new URL(href);
      const to = u.searchParams.get('to') ?? '';
      if (to.includes('hwid-spoofer')) return withOptions('hwidSpoofer');
      if (to.endsWith('/shop') || to === '/shop') return withOptions('partnerShop');
      if (to.includes('cloud-dma')) return withOptions('cloudDma');
      if (to.includes('/ugc')) return withOptions('ugc');
      if (to.includes('skin-changer')) return withOptions('skinChanger');
      if (to.includes('deadlock')) return withOptions('wardogs');
    } catch {
      /* fall through */
    }
  }

  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return withOptions('hwidSpoofer');
  }

  if (href.includes('%2Fshop') && href.includes('to=')) {
    return withOptions('partnerShop');
  }

  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return withOptions('cloudDma');
  }

  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return withOptions('ugc');
  }

  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return withOptions('skinChanger');
  }

  if (
    href.includes('%2Fproducts%2Fdeadlock') ||
    href.includes('/products/deadlock')
  ) {
    return withOptions('wardogs');
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    const target = new URL(url);
    let incoming: URL;
    try {
      incoming = new URL(href);
    } catch {
      return href;
    }
    if (
      incoming.origin === target.origin &&
      incoming.pathname === target.pathname &&
      [...target.searchParams].every(([key, value]) => incoming.searchParams.get(key) === value)
    ) {
      for (const key of target.searchParams.keys()) incoming.searchParams.delete(key);
      const query = incoming.searchParams.toString();
      return appendQuery(checkoutPath(product), query) + incoming.hash;
    }
  }

  return href;
}

/** Shop / tickets entry. */
export const SUPPORT_CHECKOUT_PATH = checkoutPath('partnerShop');
