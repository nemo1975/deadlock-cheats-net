import { SITE_DOMAIN as SITE_DOMAIN_VALUE } from './site-url.mjs';
import { CHECKOUT_URLS } from './checkout-redirects.mjs';

export const SITE_DOMAIN = SITE_DOMAIN_VALUE;
export const SITE_URL = `https://${SITE_DOMAIN}`;
/** Public brand string (header, legal, schema). Override via env when re-skinning the template. */
const publicSiteName =
  typeof import.meta !== 'undefined'
    ? (import.meta.env?.PUBLIC_SITE_NAME as string | undefined)
    : undefined;

export const SITE_NAME = publicSiteName?.trim() || 'Deadlock Hacks';
export const PRODUCT_BASE = '/cheats/';
export const HWID_SPOOFER_PATH = '/hwid-spoofer/';
export const UGC_PATH = '/ugc/';
export const CLOUD_DMA_PATH = '/cloud-dma/';
export const SKIN_CHANGER_PATH = '/skin-changer/';
/** Catalog page listing every product; each card links to its detail page. */
export const PRODUCTS_HUB_PATH = '/products/';
/** Shop / tickets affiliate URL (must match `partnerShop` in checkout-redirects). */
export const SUPPORT_CHECKOUT_PATH = CHECKOUT_URLS.partnerShop;
/** Absolute shop URL for schema or rare raw links. */
export const SUPPORT_SHOP_URL = CHECKOUT_URLS.partnerShop;
/** Empty by design: ticketing uses the shop portal, not a claimed email address on this domain. */
export const SUPPORT_EMAIL = '';
