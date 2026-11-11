/**
 * Keyword homes (see product/blog routing in this file).
 * Primary aligns with homepage H1. These constants are not rendered on pages.
 */
export const PRIMARY_KEYWORD = 'Deadlock Hacks';

/** One representative angle per page that has one. */
export const SECONDARY_KEYWORD_BY_PATH: Record<string, string> = {
  '/': 'deadlock hacks',
  '/cheats/': 'deadlock cheats',
  '/cloud-dma/': 'deadlock dma cheat',
  '/ugc/': 'deadlock account appeal',
  '/hwid-spoofer/': 'deadlock hwid spoofer',
  '/skin-changer/': 'deadlock skin changer',
};

/** Each mapped angle points at one existing page. */
export const SECONDARY_KEYWORD_HOME: Record<string, string> = {
  'deadlock hacks': '/',
  'deadlock cheats': '/cheats/',
  'deadlock cheats for pc': '/cheats/',
  'deadlock cheat download': '/cheats/',
  'deadlock private cheat': '/cheats/',
  'undetected deadlock cheats': '/cheats/',
  'deadlock aimbot': '/cheats/',
  'deadlock esp': '/cheats/',
  'deadlock wallhack': '/cheats/',
  'deadlock radar hack': '/cheats/',
  'deadlock silent aim': '/cheats/',
  'deadlock dma cheat': '/cloud-dma/',
  'buy cloud dma cheats': '/cloud-dma/',
  'cloud dma private cheat': '/cloud-dma/',
  'undetected cloud dma cheats': '/cloud-dma/',
  'deadlock account appeal': '/ugc/',
  'buy ugc cheats': '/ugc/',
  'ugc private cheat': '/ugc/',
  'undetected ugc cheats': '/ugc/',
  'deadlock hwid spoofer': '/hwid-spoofer/',
  'buy hwid spoofer cheats': '/hwid-spoofer/',
  'hwid spoofer private cheat': '/hwid-spoofer/',
  'undetected hwid spoofer': '/hwid-spoofer/',
  'deadlock skin changer': '/skin-changer/',
  'buy skin changer cheats': '/skin-changer/',
  'skin changer private cheat': '/skin-changer/',
  'undetected skin changer': '/skin-changer/',
};
