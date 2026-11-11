/**
 * Affiliate checkout destinations. Edit this file to change store links.
 * Buy buttons use these URLs directly so you can see and update them here.
 */
export const CHECKOUT_URLS = {
  wardogs: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fdeadlock',
  hwidSpoofer: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fhwid-spoofer',
  cloudDma: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fcloud-dma',
  ugc: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fugc',
  skinChanger: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fskin-changer',
  partnerShop: 'https://zadeyo.com/go/AMAN?to=%2Fshop',
};

const MAIN_CHECKOUT = CHECKOUT_URLS.wardogs;

const PREFIXED_LOCALES = ['es', 'de', 'fr'];

/** Legacy `/go/…` aliases still 302 to the URLs above. */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/deadlock', MAIN_CHECKOUT],
  ['/go/deadlock/', MAIN_CHECKOUT],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/shop', CHECKOUT_URLS.partnerShop],
  ['/go/shop/', CHECKOUT_URLS.partnerShop],
]);

function stripLocaleFromCheckoutPath(pathname) {
  for (const locale of PREFIXED_LOCALES) {
    const prefix = `/${locale}`;
    if (pathname === `${prefix}/go` || pathname.startsWith(`${prefix}/go/`)) {
      return pathname.slice(prefix.length);
    }
  }
  if (pathname.startsWith('/en/go/') || pathname === '/en/go') {
    return pathname.slice('/en'.length);
  }
  return pathname;
}

export function resolveCheckoutPathRedirect(pathname) {
  const path = stripLocaleFromCheckoutPath(pathname);
  const direct = CHECKOUT_PATH_REDIRECTS.get(path);
  if (direct) return direct;

  if (path !== '/' && !path.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${path}/`) ?? null;
  }

  return null;
}
