/** Default Open Graph / Twitter preview (first hero slide). */
export const DEFAULT_OG_GAMEPLAY_IMAGE = '/images/deadlock/deadlock-esp-souls.webp';

export const DEFAULT_OG_GAMEPLAY_ALT =
  'Deadlock gameplay screenshot with player overlays, used for layout context.';

/** Intrinsic size of the default OG master. */
export const DEFAULT_OG_GAMEPLAY_WIDTH = 819;
export const DEFAULT_OG_GAMEPLAY_HEIGHT = 530;

/** Homepage + product gallery use the same masters, once each per slider. */
export const SHOWCASE_GALLERY_KEYS = [
  'gpEspSouls',
  'gpEspBoxes',
  'gpEspIndoor',
  'gpEspStreet',
  'gpAimMenu',
] as const;
