/**
 * The game this site sells cheats for. Change these values when re-using the template for another title.
 *
 * Shared copy (utility products, catalog page, legal footer) reads these through the
 * `{gameName}`, `{gameShort}`, `{gamePublisher}` and `{antiCheat}` tokens. Game-specific
 * marketing copy (homepage, cheat product page, blog, forum) still has to be rewritten per game.
 */
export const GAME = {
  name: 'Deadlock',
  shortName: 'Deadlock',
  publisher: 'Valve',
  antiCheat: 'Valve anti-cheat',
  officialUrl: 'https://playdeadlock.com/',
  /** Official Steam store listing for PC (verify periodically). */
  steamStoreUrl: 'https://store.steampowered.com/app/1422450/Deadlock/',
} as const;

/** Display name of the main cheat product, used in menus, cards and comparison headers. */
export const CHEAT_PRODUCT_NAME = 'Deadlock Hacks';
