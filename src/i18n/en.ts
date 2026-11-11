import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH, SUPPORT_CHECKOUT_PATH } from '../config/checkout';
import {
  HWID_SPOOFER_PATH,
  PRODUCT_BASE,
  PRODUCTS_HUB_PATH,
  SITE_DOMAIN,
  SITE_NAME,
  CLOUD_DMA_PATH,
  SKIN_CHANGER_PATH,
  UGC_PATH,
} from '../config/site';
import { GAME } from '../config/game';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'Deadlock Hacks | Aimbot, ESP & PC Cheats',
    description:
      'Compare Deadlock hacks for PC: aimbot, ESP, radar, and private loader listings with monthly or lifetime plans.',
  },
  nav: [
    {
      id: 'products',
      href: PRODUCTS_HUB_PATH,
      label: 'Products',
      shortLabel: 'Products',
      sheetLabel: 'Browse products',
    },
    { id: 'blog', href: '/blog/', label: 'Blog', sheetLabel: 'Read the blog' },
    { id: 'forum', href: '/forum/', label: 'Forum', sheetLabel: 'Open the forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ', sheetLabel: 'Pre-purchase questions' },
    { id: 'support', href: '/support/', label: 'Support', sheetLabel: 'Open support desk' },
  ],
  hero: {
    status: 'Read the current listing and Deadlock rules before checkout.',
    eyebrow: 'LIVE LISTINGS · DEADLOCK',
    titleLead: 'Deadlock ',
    titleAccent: 'Hacks',
    subtitle:
      'Private loader listings for Valve’s hero shooter on PC, with monthly and lifetime plans plus separate pages for HWID Spoofer, UGC, Cloud DMA, and Skin Changer. Confirm what the live product includes before you pay.',
    ctaPrimary: 'Review products',
    metrics: [
      { label: 'Game', strong: 'Deadlock' },
      { label: 'Publisher', strong: 'Valve' },
      { label: 'PC', strong: 'Steam playtest' },
      { label: 'Pricing', strong: '$35/mo' },
    ],
    statusPills: [
      'Deadlock Hacks',
      'Aimbot',
      'ESP',
      'Radar',
      'Soul aim',
      'Private cheat',
      'Live listing',
    ],
  },
  features: {
    eyebrow: 'Deadlock cheat research',
    title: 'What Deadlock Hacks shoppers usually compare',
    subtitle:
      'These cards explain search vocabulary, plan terms, and separate utilities. Confirm every claim on the current listing before checkout.',
    items: [
      {
        title: 'Deadlock Hacks',
        subtitle: 'Main game listing on this site.',
        desc: 'Deadlock Hacks is the game-specific product. Use the page to compare stated plans, review the supplied menu images, and open checkout when you are ready.',
        bullets: ['Product path for Deadlock', 'Monthly: 30 days ($35)', 'Lifetime ($150)', 'Checkout'],
        tags: ['deadlock hacks', 'plans', 'listing'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Plan terms',
        subtitle: 'Same prices, different products.',
        desc: 'Deadlock Hacks, UGC, Cloud DMA, and Skin Changer use $35 for 30 days or $150 lifetime. HWID Spoofer is $50 for 30 days or $150 lifetime. Read the product page for what each label covers.',
        bullets: ['30-day monthly access', 'Lifetime wording to confirm', 'Selected plan kept on redirect', 'Match name at checkout'],
        tags: ['$35', '$50', '$150', '30 days'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Menus & screenshots',
        subtitle: 'Visual context only.',
        desc: 'The gallery uses owner-supplied Deadlock gameplay and menu captures. A screenshot shows overlay and menu layout; it does not prove current features, vischeck, or compatibility with the latest Deadlock build.',
        bullets: ['Gameplay overlays', 'Main, Attributes, Misc menus', 'Ask support if scope is unclear', 'Do not treat captures as proof'],
        tags: ['gallery', 'context', 'evidence'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Secure checkout',
        subtitle: 'Secure route.',
        desc: 'Buy buttons open the Deadlock store listing so you can confirm the product and plan before you pay.',
        bullets: ['Visible store URL', 'Plan query preserved', 'Plan terms at checkout', 'Stop if product name mismatches'],
        tags: ['checkout', 'secure', 'redirect'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'HWID Spoofer',
        subtitle: 'Hardware-scope utility (separate).',
        desc: 'Listed apart from Deadlock Hacks. Confirm supported hardware, requirements, and Deadlock applicability with support—this site does not diagnose errors or promise outcomes.',
        bullets: ['Separate license', '$50 / 30 days', '$150 lifetime', 'Listed scope only'],
        tags: ['hwid', 'hardware', 'utility'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Infrastructure product (separate).',
        desc: 'A different category from a software loader listing. Ask support for requirements, applicability to Deadlock, and plan terms before paying.',
        bullets: ['Separate checkout', '$35 / 30 days', '$150 lifetime', 'Requirements to confirm'],
        tags: ['cloud dma', 'infrastructure', 'questions'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Search vocabulary',
        subtitle: 'Terms players look up—not promises.',
        desc: 'Common Deadlock cheat searches include aimbot, silent aim, ESP, wallhack, radar, soul targeting, and vischeck. Treat them as questions for support or the live listing, not as guaranteed in-match outcomes.',
        bullets: ['Match terms to the written feature list', 'Ask which maps or heroes are named', 'Avoid assuming undetected or safe', 'Blog guides explain how to read claims'],
        tags: ['aimbot', 'esp', 'radar'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'UGC (appeals)',
        subtitle: 'Unban & Governance Control.',
        desc: 'UGC is for account-appeal workflow context. It is not HWID tooling and does not guarantee account recovery after a Valve action.',
        bullets: ['Appeal records and process', '$35 / 30 days or $150 lifetime', 'Publisher decides outcomes', 'Separate from hardware'],
        tags: ['ugc', 'appeal', 'account'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Stay current',
        subtitle: 'Patches change listings.',
        desc: 'Deadlock is still in early development, so patches move hitboxes, heroes, and anti-cheat behavior. Re-read the live product page and use support for anything unclear.',
        bullets: ['Patch-day checklist in the blog', 'Compare FAQ to listing text', 'Screenshots age out fast', 'No implied warranty'],
        tags: ['updates', 'status', 'risk'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Deadlock product research without invented guarantees',
    subtitle: 'This site separates confirmed intake details, official Deadlock context, and questions that only the current listing can answer.',
    usLabel: '{siteName}',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Official game context',
        desc: 'Official Valve information identifies Deadlock as a multiplayer hero shooter in early development, with PC access currently listed on Steam.',
      },
      {
        title: 'Supplied menu visuals',
        desc: 'Owner-supplied Deadlock gameplay and menu captures are shown for layout context. They do not prove current features, vischeck, or patch status.',
      },
      {
        title: 'Checkout',
        desc: 'Purchase links keep the site’s internal checkout path, then route to the confirmed checkout.',
      },
      {
        title: 'Current information',
        desc: 'Product availability and compatibility should be confirmed on the current product page rather than inferred from a static page.',
      },
      {
        title: 'Rules and risk',
        desc: 'Third-party tools can carry account or platform risk. This site does not promise safety, detection resistance, or a particular account outcome.',
      },
      {
        title: 'Separate utilities',
        desc: 'HWID Spoofer, Cloud DMA, UGC, and Skin Changer each have a separate scope, price, checkout route, and limitations.',
      },
    ],
    metrics: [
      {
        value: '5',
        title: 'Products',
        desc: 'Deadlock Hacks, HWID Spoofer, Cloud DMA, UGC, and Skin Changer.',
      },
      {
        value: '$35',
        title: 'Standard monthly price',
        desc: 'Thirty days for main, Cloud DMA, UGC, and Skin Changer products.',
      },
      {
        value: '$150',
        title: 'Lifetime price',
        desc: 'The stated lifetime price across the listed products.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'Before checkout, review',
    titleHighlight: 'three essential details',
    intro:
      'Start by reading the current product details and official Deadlock information. Treat missing requirements as a question to ask before checkout.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Review the product page',
        desc: 'Check the listed product category, requirement notes, price, and plan before using checkout.',
      },
      {
        step: 'Step 2',
        title: 'Confirm your environment',
        desc: 'For utilities, review the current requirements and whether the product applies to your situation; the supplied intake does not establish either.',
      },
      {
        step: 'Step 3',
        title: 'Use current listing guidance',
        desc: 'Do not rely on old screenshots or generic setup advice; listing details and game rules can change.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Deadlock context',
    title: 'Match your build to what the listing says.',
    subtitle:
      'Valve lists Deadlock as a PC playtest on Steam. A platform the game supports does not mean every product supports every hero, map, or match type.',
    items: ['Lanes and objectives', 'PC via Steam', 'Invite-only playtest', 'Official Valve rules', 'Listed scope only', 'Separate utilities', 'Ask before paying'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Deadlock Cheats',
    subtitle: 'A game-specific product listing with stated plan terms and clear limits on unverified functionality.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Main product',
        tier: 'Deadlock',
        name: 'Deadlock Hacks',
        title: 'Deadlock Cheats for PC: Aimbot, ESP and Loader',
        desc: 'Deadlock Hacks is the supplied game-specific product. Review its current listing, selected plan, terms, and availability before purchase.',
        homeDesc:
          'Deadlock Hacks presents the supplied plan terms and a direct path to the current listing. Monthly is $35 for 30 days; lifetime is $150.',
        heroDesc:
          'The current listing is the source for product scope, requirements, availability, and any feature details. Review it before checkout.',
        features: ['Deadlock product path', 'Monthly plan', 'Lifetime plan', 'Checkout', 'Current-listing review', 'Limits disclosed'],
        more: 0,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle:
      'Compare the cheat menu and the utilities on this grid. Open a product page for the feature list and checkout.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Deadlock Cheats: Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Menu layers · After checkout',
      subtitle:
        'Use the screenshots above for overlay and menu layout. They are owner-supplied captures, not independent proof of current features. Review the listing before checkout.',
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Panel captures',
      overviewSubtitle:
          'The plan terms, support route, and the distinction between hardware questions and account appeals. Hardware support details have not been verified for Deadlock.',
      highlights: {
        eyebrow: 'At a glance',
        title: 'Hwid Spoofer: What a hardware refresh covers',
          desc: 'This product is listed separately from Deadlock Hacks. Ask support whether it fits the current situation before purchase; this site does not diagnose a restriction or promise an outcome.',
      },
      featuresSection: {
        eyebrow: 'Listed rows',
        title: 'IDs and the published families',
          desc: 'The product page records only confirmed plan terms and limitations until vendor evidence establishes current features or requirements.',
      },
      experience: {
        eyebrow: 'After checkout',
        title: 'Panel notes, then portal order',
        subtitle:
          'Callouts for the panel are on the left. License delivery and the setup order are on the right.',
        previewLabel: 'Panel shots',
        accessDividerTop: 'Panel',
        accessDividerBottom: 'Order',
      },
      highlightsMore: '{count} further rows are in the feature table lower on the page.',
    },
    utilityPages: {
      ugc: {
        showcaseHeading: 'Workflow frames',
        overviewSubtitle:
          'UGC means Unban & Governance Control: an account-appeal product. It is separate from hardware questions and does not promise a platform decision.',
        highlights: {
          eyebrow: 'In short',
          title: 'Appeal packets you can run again',
          desc: 'Keep account records, platform notices, and relevant dates ready before discussing an appeal with support. The platform, not this site, decides every case.',
        },
        featuresSection: {
          eyebrow: 'Included',
          title: 'What turns on with the license',
          desc: 'The product page states the plan terms and its account-appeal purpose. It does not promise recovery or describe unverified automation features.',
        },
        experience: {
          eyebrow: 'Once the license is live',
          title: 'Frames, then the portal order',
          subtitle: 'The left side holds the frames. On the right: how the license is delivered, and how setup runs.',
          previewLabel: 'Frames',
          accessDividerTop: 'Frames',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} more capability rows are further down this page.',
      },
      'cloud-dma': {
        showcaseHeading: 'Concept illustration',
        overviewSubtitle:
          'A conceptual cloud-infrastructure illustration. Confirm current requirements and Deadlock applicability with support before checkout.',
        highlights: {
          eyebrow: 'Requirements',
          title: 'Cloud DMA prerequisites',
          desc: 'No Cloud DMA vendor reference or Deadlock applicability evidence was supplied. Obtain current requirements directly from support before checkout.',
        },
        featuresSection: {
          eyebrow: 'Vendor information',
          title: 'Separate infrastructure product',
          desc: 'Cloud DMA is a separate product, not an included feature or a promise of compatibility, safety, or an account outcome.',
        },
        experience: {
          eyebrow: 'Before checkout',
          title: 'Illustration, then product notes',
          subtitle: 'The left side is an illustrative concept. The right side records the product setup information.',
          previewLabel: 'Illustration',
          accessDividerTop: 'Concept',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} Cloud DMA details continue lower on this page.',
      },
      'skin-changer': {
        showcaseHeading: 'Product mark',
        overviewSubtitle:
          'Brand artwork for Skin Changer. Confirm current cosmetics, visibility, and Deadlock applicability with support before checkout.',
        highlights: {
          eyebrow: 'Scope',
          title: 'Skin Changer listing notes',
          desc: 'No Skin Changer vendor reference or Deadlock applicability evidence was supplied. Obtain current scope directly from support before checkout.',
        },
        featuresSection: {
          eyebrow: 'Vendor information',
          title: 'Separate cosmetic-utility product',
          desc: 'Skin Changer is a separate product, not an included Deadlock Hacks feature or a promise of compatibility, other-player visibility, safety, or an account outcome.',
        },
        experience: {
          eyebrow: 'Before checkout',
          title: 'Mark, then product notes',
          subtitle: 'The left side is brand artwork. The right side records the product setup information.',
          previewLabel: 'Mark',
          accessDividerTop: 'Mark',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} Skin Changer details continue lower on this page.',
      },
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planWeekly: '1 Week',
    planWeeklyNote: '7 days',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: '30 days of access',
    planOneTimeNote: 'Unlimited access',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'Hardware utility',
        title: 'Deadlock HWID Spoofer',
        subtitle: 'A separate utility listing with plan terms and support direction; Deadlock applicability and hardware requirements require scope confirmation.',
        desc: 'HWID Spoofer is priced at $50 for 30 days or $150 lifetime. It is not represented here as a fix for an account or game issue.',
        features: ['Separate product', '$50 for 30 days', '$150 lifetime', 'Confirm current scope'],
        more: 0,
        href: HWID_SPOOFER_PATH,
      },
      {
        badge: 'Available',
        category: 'Account appeals',
        title: 'Deadlock Account Appeals',
        subtitle: 'Unban & Governance Control is an account-appeal product, not a hardware product or a guaranteed recovery service.',
        desc: 'UGC is priced at $35 for 30 days or $150 lifetime. Confirm the current scope and account-appeal requirements before purchase.',
        features: ['Account-appeal purpose', '$35 for 30 days', '$150 lifetime', 'No recovery guarantee'],
        more: 0,
        href: UGC_PATH,
      },
      {
        badge: 'Separate product',
        category: 'Infrastructure layer',
        title: 'Cloud DMA for Deadlock',
        subtitle: 'A separate product with no supplied Deadlock applicability or technical-requirements evidence.',
        desc: 'Cloud DMA is priced at $35 for 30 days or $150 lifetime. Confirm current requirements, functionality, and applicability with support before purchase.',
        features: ['Separate product', '$35 for 30 days', '$150 lifetime', 'Confirm requirements'],
        more: 0,
        href: CLOUD_DMA_PATH,
      },
      {
        badge: 'Separate product',
        category: 'Cosmetic utility',
        title: 'Deadlock Skin Changer',
        subtitle: 'A separate product with no supplied Deadlock cosmetic list or applicability evidence.',
        desc: 'Skin Changer is priced at $35 for 30 days or $150 lifetime. Confirm current cosmetics, visibility, and Deadlock applicability with support before purchase.',
        features: ['Separate product', '$35 for 30 days', '$150 lifetime', 'Confirm current scope'],
        more: 0,
        href: SKIN_CHANGER_PATH,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Deadlock product research, account-appeal context, Cloud DMA questions, and support notes.',
    latestTitle: 'Deadlock Cheats Guides',
    latestSubtitle: 'Aimbot, ESP, loader, and utility notes for people comparing Deadlock cheat listings.',
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New articles will show up here.',
    viewAll: 'View all articles',
    read: 'Read full article',
    articleActionsAria: 'Continue reading',
    buyCta: 'Review Deadlock Hacks',
    buyHwidCta: 'Buy the HWID license',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'Four steps from the status banner to a portal profile you can load next time.',
    ctaLabel: 'Pick your plan',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Open {siteDomain} and read the banner before you pay or start the game.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Pick the cheat suite, or a utility when the issue is this PC or an account limit.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Review the current product documentation and plan details before using any product.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'Save the menu profile in the portal so the next session starts from those settings.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Deadlock Cheat Support',
    subtitle: 'Review the product pages before checkout or open the supplied support route for current order and product questions.',
    channels: [
      {
        icon: 'users',
        title: 'Browse before checkout',
        desc: 'Review the product pages, plans, and listed requirements before purchase.',
        linkLabel: 'Browse products',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Open a support ticket',
        desc: 'Open the customer portal for current order and support options.',
        linkLabel: 'Open support tickets',
        href: SUPPORT_CHECKOUT_PATH,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Read setup, platform, and account answers before you pay.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout.' },
      { title: 'Context', desc: 'The exact product and the question you need support to confirm.' },
      { title: 'Error detail', desc: 'A screenshot or the exact message you see.' },
    ],
    pageSections: [
      {
        heading: 'How support works',
        paragraphs: [
          'Write before checkout if you need plan terms, product scope, or Deadlock applicability confirmed. After checkout, use the support path for order questions.',
          'The checkout channel opens the checkout flow. It does not replace a ticket once you have paid.',
        ],
      },
      {
        heading: 'Setup the team expects',
        paragraphs: [
          'Follow only the current documentation after purchase. This site does not specify a setup sequence or claim a loader, module, or technical method.',
          'Ask for written clarification when compatibility, availability, or a requirement is unclear.',
          'Game and product details can change; an old page or screenshot is not proof of current support.',
        ],
      },
      {
        heading: 'What the site lists',
        paragraphs: [
          'Deadlock Hacks, HWID Spoofer, Cloud DMA, UGC, and Skin Changer have different stated purposes. Review each product page and ask support before payment.',
          'UGC is an account-appeal product with no recovery guarantee. Cloud DMA and Skin Changer are separate listings with no supplied Deadlock applicability evidence. Each page records plan terms and limits.',
        ],
      },
      {
        heading: 'Related help',
        paragraphs: [
          'The FAQ covers platform, license moves, and status. The products list compares the cheat and the utilities.',
          'Blog guides explain setup ideas. They do not replace the live loader from the portal. The forum archive is read-only.',
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ: Deadlock cheats, terms and support',
    subtitle: 'Plan terms, product limits, account-risk context, and questions to confirm before checkout.',
    items: [
      {
        num: '01',
        q: 'Where can I review current Deadlock Hacks product information?',
        a: 'Review the relevant product page and ask support for current availability or requirement questions before checkout.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout opens the vendor’s current purchase flow. Review its current terms and requirements before payment.',
      },
      {
        num: '03',
        q: 'Can third-party software lead to account or platform action?',
        a: 'It can. This site does not promise safety, detection resistance, policy compliance, or an account outcome. Read the applicable official rules and current listing details before deciding.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Check the current product page and vendor documentation for supported operating systems and requirements. Do not assume support from a generic PC label.',
      },
      {
        num: '05',
        q: 'Can I move a license to a new PC?',
        a: 'No transfer policy was supplied. Ask support for the current license and device terms before checkout.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'The Deadlock Hacks catalog is {siteDomain}/products/. Each product has its own page, stated purpose, plan terms, limitations, and checkout link.',
      },
    ],
  },
  footer: {
    homeLink: '{siteName}',
    tagline:
      '{siteName}: Deadlock aimbot, ESP, and radar listings—private loader, checkout, plan terms, and research guides on {siteDomain}.',
    trademark: '{game} is a trademark of {publisher}. {siteDomain} is not affiliated with or endorsed by {publisher}.',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { id: 'products', href: productBase, label: 'Cheat plans and modules', ariaLabel: '{cheatProduct}' },
      { id: 'hwidSpoofer', href: HWID_SPOOFER_PATH, label: 'HWID panel', ariaLabel: 'HWID Spoofer' },
      { id: 'products', href: UGC_PATH, label: 'UGC appeals', ariaLabel: 'UGC' },
      { id: 'products', href: CLOUD_DMA_PATH, label: 'Cloud DMA', ariaLabel: 'Cloud DMA' },
      { id: 'products', href: SKIN_CHANGER_PATH, label: 'Skin Changer', ariaLabel: 'Skin Changer' },
      { id: 'blog', href: '/blog/', label: 'Guides and articles', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
    products: 'Products',
    guides: 'Guides & community',
    help: 'Help & legal',
    official: 'Official game links',
    share: 'Share this page',
    shareDescription: 'Copy a link to this page for social posts.',
    shareOnX: 'Share on X',
    shareOnFacebook: 'Share on Facebook',
    shareOnLinkedIn: 'Share on LinkedIn',
    productLinks: [
      { href: '/', label: 'Home', ariaLabel: 'Home', scrollTarget: 'features' },
      { href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { href: productBase, label: '{cheatProduct}', ariaLabel: '{cheatProduct}' },
      { href: HWID_SPOOFER_PATH, label: 'HWID Spoofer', ariaLabel: 'HWID Spoofer' },
      { href: CLOUD_DMA_PATH, label: 'Cloud DMA', ariaLabel: 'Cloud DMA' },
      { href: UGC_PATH, label: 'UGC', ariaLabel: 'UGC account appeals' },
      { href: SKIN_CHANGER_PATH, label: 'Skin Changer', ariaLabel: 'Skin Changer' },
      { href: '/support/', label: 'Support & status', ariaLabel: 'Support and listing status' },
    ],
    guideLinks: [
      { href: '/blog/deadlock-product-research-checklist/', label: 'Deadlock product research guide', ariaLabel: 'Editorial buying guide' },
      { href: '/blog/', label: 'Blog & guides', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Forum (editorial)', ariaLabel: 'Editorial forum archive' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    helpLinks: [
      { href: '/support/', label: 'Help & contact', ariaLabel: 'Support' },
      { href: SUPPORT_CHECKOUT_PATH, label: 'Open support', ariaLabel: 'Support checkout', external: true },
      { href: '/about/', label: 'About {siteName}', ariaLabel: 'About this site' },
      { href: '/privacy/', label: 'Privacy Policy', ariaLabel: 'Privacy Policy' },
      { href: '/terms/', label: 'Terms & Conditions', ariaLabel: 'Terms and Conditions' },
    ],
    officialLinks: [
      {
        href: GAME.officialUrl,
        label: 'Official Deadlock site',
        ariaLabel: 'Official Deadlock website (opens in new tab)',
        external: true,
      },
      {
        href: GAME.steamStoreUrl,
        label: 'Deadlock on Steam',
        ariaLabel: 'Deadlock on Steam (opens in new tab)',
        external: true,
      },
      {
        href: 'https://www.valvesoftware.com/',
        label: 'Valve corporate site',
        ariaLabel: 'Valve corporate site (opens in new tab)',
        external: true,
      },
    ],
  },
  legalPages: {
    about: {
      title: 'About Deadlock Hacks',
      description:
        '{siteName} publishes {cheatProduct}, the utility pages, and support notes at {siteDomain}.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            '{siteName} is a product-research catalog for Deadlock. The site lists Deadlock Hacks, HWID Spoofer, Cloud DMA, UGC, and Skin Changer.',
            'Our pages help readers distinguish product categories, compare stated requirements, and prepare questions before opening checkout. A product name identifies its category; it does not establish compatibility with a particular computer or version of the game.',
            'The catalog separates five different purchasing decisions. Deadlock Hacks is the game-specific listing. HWID Spoofer is a separate utility whose current scope requires confirmation. Cloud DMA and Skin Changer have no supplied Deadlock applicability evidence. UGC means Unban & Governance Control and concerns account appeals. Those scopes are not interchangeable solutions to the same problem.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Product pages describe the listed scope, plans, requirements and limitations. The guides examine specific buying questions, including how to interpret menu images, how monthly and lifetime terms differ, and why an account restriction is separate from a hardware question. A feature label or screenshot is not a test result.',
            'We distinguish official Deadlock information from product descriptions. Official Valve information establishes game context; a listing can establish its own current offering. Neither a competitor page nor repeated advertising independently verifies a product claim.',
            'The forum is an editorial archive. Its questions and answers are published for reference, and replies are closed. They should be read as editorial guidance rather than customer reviews, independent product tests or evidence of a successful account appeal. The blog and FAQ are supporting reading, not replacements for current product documentation.',
          ],
        },
        {
          heading: 'How setup works',
          paragraphs: [
            'Purchase links open the checkout flow. Check the product name, selected plan, price and stated duration there before paying. These checkout links can result in a commission for this site. The checkout handles payment and the purchase process; browsing our editorial pages does not create an order or support ticket.',
            'Review the current product page, official game rules, and support information before making a purchase decision. Product and game conditions can change.',
            'Keep the order confirmation and the terms shown at checkout. If a listing leaves a requirement, dependency or delivery detail unclear, ask support for a written answer first. A lifetime price label does not, by itself, define future updates, ongoing availability or every support entitlement.',
          ],
        },
        {
          heading: 'Requirements',
          paragraphs: [
            'Compare requirements for the exact product rather than assuming that a computer which runs Deadlock also meets a separate product’s requirements. An omitted requirement is a question to resolve with support, not a promise of support.',
            'Compatibility and status are time-sensitive. Check the date and scope of a status statement, especially after a game or product update. A general online label does not explain every supported feature or configuration. We do not guarantee that third-party software is undetected, permitted by the publisher or free from account consequences.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use the support page to open the order support for order or product questions. Include the order email when requested privately, the exact product, your Windows version, the game build and the full error wording. A concise account of what happened is more useful than a guess about its cause.',
            'Never publish passwords, account tokens, recovery codes or payment details in a forum or screenshot. Keep private information within the appropriate order-support channel. The same principle applies when requesting a correction to an article: identify the page and the disputed statement, and provide a source that can be checked.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Analytics, cookies, and the email you send with a support ticket on {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'If Google Analytics is on, it can record page views, device type, browser, and an approximate region. Payment and license delivery run on external checkout pages. {siteDomain} does not keep payment card numbers.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Those analytics show which guides and product pages get used, so broken links and thin pages can be fixed. A support ticket can keep the email and the message until that issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Cookies on this site are limited to analytics. Block them in the browser and the pages still load.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase and refund rules are in the Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'What you buy, how licenses work, when a refund can be considered, and the account penalty you accept on {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. Using {siteDomain}, or finishing checkout for a product listed here, means you accept these Terms & Conditions and the Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'The products are {cheatProduct} and the utilities on the products page. Delivery is an operator portal and a loader on Windows.',
            'Each product page states what is listed at the time you pay. Game and vendor updates can change availability or requirements.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and the license are handled on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After payment, follow the current instructions. Contact support with the order email and exact issue if you need help.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'A license is for you alone. Do not share loader files, portal logins, or license keys. HWID and device limits follow the tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'A sale is final when checkout completes. There is no refund for a change of mind, an account penalty, an anti-cheat penalty, or a problem caused by skipping the setup guide or running modules while the banner says offline.',
            'If you need help, use the Support page and include the order email, Windows version, exact product, and a screenshot or exact error text. Do not share credentials.',
            'Support may offer a fix, replacement access, or a partial or full refund when the fault is on our side. Support does not have to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party software can lead to account or platform action. This site does not promise safety, compatibility, availability, or a particular outcome.',
            'Read official game rules and current listing details before deciding to purchase or use a third-party product.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms can be updated. The Last updated date at the top changes when that happens. Using the site after that date means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Terms, billing, and loader questions go through the buttons on the Support page. The Privacy Policy covers how site data is handled.',
          ],
        },
      ],
    },
    support: {
      title: '{siteName} Support',
      description:
        'Open the support path for order and product questions from {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Product catalog',
    breadcrumbBlog: 'Research articles',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription:
      'This address is not a page on {siteDomain}. Open the homepage or the product list to keep browsing.',
    title: 'Page not found',
    documentTitle: 'This address is not a page',
    body: 'That address is missing. Go back to the homepage or open the product list.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'Deadlock Cheats FAQ',
      description:
        'This FAQ covers 30-day and lifetime plans, product limits, risks, and the questions to confirm with support before checkout.',
      schemaName: 'Deadlock Cheats FAQ',
      schemaDescription:
        'Product research, plan duration, account-appeal limits, requirements, and checkout answers for Deadlock on {siteDomain}.',
    },
    forum: {
      eyebrow: 'Deadlock editorial forum',
      title: 'Deadlock Cheats Forum',
      description:
        'Archived, read-only editorial threads on product research, plan terms, UGC, HWID, Cloud DMA, and support questions. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Featured',
      sortLatest: 'Latest',
      sortTop: 'A–Z',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: '{siteName} guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      categoryLabels: {
        'Product Research': 'Product Research',
        'Gameplay Questions': 'Gameplay Questions',
        'Product Questions': 'Product Questions',
        'Setup & Support': 'Setup & Support',
        'Game Updates': 'Game Updates',
        'Features & Customization': 'Features & Customization',
        'Account & PC Questions': 'Account & PC Questions',
        'PC Performance & Support': 'PC Performance & Support',
        'Aimbot': 'Aimbot',
        'ESP': 'ESP',
        'Cheat Menu': 'Cheat Menu',
        'Configs': 'Configs',
        'Status': 'Status',
        'Buying Guide': 'Buying Guide',
        'Plans': 'Plans',
        'HWID Spoofer': 'HWID Spoofer',
        'UGC': 'UGC',
        'Cloud DMA': 'Cloud DMA',
        'Skin Changer': 'Skin Changer',
        'Reviews': 'Reviews',
        'Safety Claims': 'Safety Claims',
        'Ability Info': 'Ability Info',
        'Souls': 'Souls',
        'Wallhack': 'Wallhack',
        'Macros': 'Macros',
      },
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: '{siteName} Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Hardware identifiers are refreshed when other PCs accept a login and this one rejects it at once.',
      viewDetails: 'Open the utility page',
      includes: 'In the license:',
      schemaName: 'HWID Spoofer',
    },
  },
  pageSeo: {
    '/': {
      title: 'Deadlock Hacks | Aimbot, ESP & PC Cheats',
      description:
        'Compare Deadlock hacks for PC: aimbot, ESP, radar, and private loader listings with monthly or lifetime plans.',
    },
    '/cheats/': {
      title: 'Deadlock Cheats for PC | Aimbot & ESP',
      description: 'Review Deadlock cheats for PC, including aimbot, ESP, soul targeting, and private loader plans before checkout.',
    },
    '/hwid-spoofer/': {
      title: 'Deadlock HWID Spoofer | Hardware Utility',
      description: 'Review Deadlock HWID Spoofer plan terms and confirm current hardware scope with support before you buy.',
    },
    '/products/': {
      title: 'Deadlock Cheat Products | Compare Tools',
      description: 'Compare Deadlock Hacks, HWID Spoofer, UGC, Cloud DMA, and Skin Changer plan terms, purposes, and questions to confirm before purchase.',
    },
    '/ugc/': {
      title: 'Deadlock Account Appeals | UGC Utility',
      description:
        'UGC helps organize Deadlock account-appeal records. It does not guarantee a Valve decision. Review options on {siteDomain}.',
    },
    '/cloud-dma/': {
      title: 'Deadlock DMA Cheat | Cloud DMA Option',
      description: 'Review Cloud DMA plan terms and confirm current requirements, hardware needs, and Deadlock applicability with support.',
    },
    '/skin-changer/': {
      title: 'Deadlock Skin Changer | Cosmetic Utility',
      description: 'Review Skin Changer plan terms and confirm current cosmetics, visibility, and Deadlock applicability with support before you buy.',
    },
    '/blog/': {
      title: 'Deadlock Cheats Guides | Aimbot & ESP',
      description: 'Read Deadlock cheats guides covering aimbot, ESP, loader status, HWID questions, and checkout research.',
    },
    '/forum/': {
      title: 'Deadlock Cheats Forum | Feature Q&A',
      description: 'Read-only Deadlock editorial archive for aimbot, ESP, UGC, HWID, Cloud DMA, and support questions.',
    },
    '/faq/': {
      title: 'Deadlock Cheats FAQ | Plans & PC Setup',
      description: 'Deadlock cheats FAQ covering plan terms, download questions, UGC, HWID, Cloud DMA, risks, and checkout.',
    },
    '/terms/': {
      title: 'Terms of Sale | Deadlock Hacks Licenses',
      description:
        'Sales are final after checkout. License limits, refund exceptions, and account penalties for products on {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Deadlock Hacks Data Use',
      description:
        'What {siteDomain} collects in analytics, which cookies it sets, and how long a support ticket keeps your email.',
    },
    '/about/': {
      title: 'About Deadlock Hacks | Listing Notes',
      description: '{siteName} publishes Deadlock product research, support information, and disclosed checkout links on {siteDomain}.',
    },
    '/support/': {
      title: 'Deadlock Cheat Support | Orders & Help',
      description: 'Open Deadlock cheat support for order or product questions. Confirm current requirements and include only the details requested privately.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    browseCheatsNavMobile: 'View product',
    homeAria: 'Deadlock Hacks home',
    menuOpen: 'Open menu',
    themeLight: 'Switch to light mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
