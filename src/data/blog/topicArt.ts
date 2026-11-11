import type { SiteLocale } from '../../i18n/locales';

interface ArtAsset {
  src: string;
  width: number;
  height: number;
  alt: Record<SiteLocale, string>;
}

const menuMisc: ArtAsset = {
  src: '/images/deadlock/deadlock-menu-misc.webp',
  width: 960,
  height: 606,
  alt: {
    en: 'Cheat menu Misc tab with config options, hotkeys, and Cloud DMA connection status.',
    es: 'Pestaña Misc del menú de cheats con opciones de config, hotkeys y estado de Cloud DMA.',
    de: 'Cheat-Menü-Tab Misc mit Config-Optionen, Hotkeys und Cloud-DMA-Status.',
    fr: 'Onglet Misc du menu cheat avec options de config, raccourcis et statut Cloud DMA.',
  },
};

const espSouls: ArtAsset = {
  src: '/images/deadlock/deadlock-esp-souls.webp',
  width: 819,
  height: 530,
  alt: {
    en: 'Deadlock gameplay screenshot with red player overlays in an interior map.',
    es: 'Captura de Deadlock con superposiciones rojas de jugadores en un mapa interior.',
    de: 'Deadlock-Gameplayaufnahme mit roten Spieler-Overlays in einer Innenkarte.',
    fr: 'Capture Deadlock avec des superpositions rouges de joueurs sur une carte intérieure.',
  },
};

const espBoxes: ArtAsset = {
  src: '/images/deadlock/deadlock-esp-boxes.webp',
  width: 909,
  height: 576,
  alt: {
    en: 'Deadlock gameplay screenshot with boxed player outlines and distance labels on a street map.',
    es: 'Captura de Deadlock con recuadros de jugadores y distancias en una calle.',
    de: 'Deadlock-Gameplayaufnahme mit Spielerboxen und Distanzangaben auf einer Straße.',
    fr: 'Capture Deadlock avec des cadres de joueurs et des distances dans une rue.',
  },
};

const espIndoor: ArtAsset = {
  src: '/images/deadlock/deadlock-esp-indoor.webp',
  width: 814,
  height: 522,
  alt: {
    en: 'Deadlock gameplay screenshot with a highlighted player outline in an indoor hall.',
    es: 'Captura de Deadlock con un contorno de jugador resaltado en un salón interior.',
    de: 'Deadlock-Gameplayaufnahme mit hervorgehobenem Spielerkontur in einer Innenhalle.',
    fr: 'Capture Deadlock avec un contour de joueur mis en évidence dans un hall intérieur.',
  },
};

const espStreet: ArtAsset = {
  src: '/images/deadlock/deadlock-esp-street.webp',
  width: 919,
  height: 542,
  alt: {
    en: 'Deadlock gameplay screenshot with boxed player outlines above the Uptown street.',
    es: 'Captura de Deadlock con recuadros de jugadores sobre la calle Uptown.',
    de: 'Deadlock-Gameplayaufnahme mit Spielerboxen über der Uptown-Straße.',
    fr: 'Capture Deadlock avec des cadres de joueurs au-dessus de la rue Uptown.',
  },
};

const hwidUefi: ArtAsset = {
  src: '/images/hwid-spoofer/hwid-spoofer-uefi-spoof-panel.webp',
  width: 1024,
  height: 576,
  alt: {
    en: 'HWID Spoofer firmware screen with Permanent Spoof, GPU spoof, ethernet spoof, and a seed field.',
    es: 'Pantalla de firmware HWID Spoofer con Permanent Spoof, spoof de GPU, ethernet y un campo seed.',
    de: 'HWID-Spoofer-Firmwarebildschirm mit Permanent Spoof, GPU-Spoof, Ethernet-Spoof und Seed-Feld.',
    fr: 'Écran firmware HWID Spoofer avec Permanent Spoof, spoof GPU, ethernet et un champ seed.',
  },
};

const hwidSerial: ArtAsset = {
  src: '/images/hwid-spoofer/hwid-spoofer-serial-check-panel.webp',
  width: 1024,
  height: 576,
  alt: {
    en: 'HWID Spoofer serial-check window listing DISK, MOBO, Display, UUID, GPU, and Network rows.',
    es: 'Ventana de comprobación de series HWID Spoofer con filas DISK, MOBO, Display, UUID, GPU y Network.',
    de: 'HWID-Spoofer-Serial-Check mit DISK-, MOBO-, Display-, UUID-, GPU- und Network-Zeilen.',
    fr: 'Fenêtre de contrôle série HWID Spoofer listant DISK, MOBO, Display, UUID, GPU et Network.',
  },
};

const ugcMark: ArtAsset = {
  src: '/images/ugc/ugc.webp',
  width: 960,
  height: 540,
  alt: {
    en: 'UGC product mark: a crimson gear, a clock face, and speed lines.',
    es: 'Marca del producto UGC: engranaje carmesí, esfera de reloj y líneas de velocidad.',
    de: 'UGC-Produktmarke: karminrotes Zahnrad, Zifferblatt und Geschwindigkeitslinien.',
    fr: "Marque du produit UGC : engrenage cramoisi, cadran d'horloge et lignes de vitesse.",
  },
};

const cloudDma: ArtAsset = {
  src: '/images/cloud-dma/cloud-dma-concept-v2.webp',
  width: 1672,
  height: 941,
  alt: {
    en: 'Conceptual purple cloud infrastructure illustration above a single desktop computer.',
    es: 'Ilustración conceptual de infraestructura en la nube violeta sobre un solo ordenador de sobremesa.',
    de: 'Konzeptillustration violetter Cloud-Infrastruktur über einem Desktop-PC.',
    fr: "Illustration conceptuelle d'infrastructure cloud violette au-dessus d'un ordinateur de bureau.",
  },
};

const skinChanger: ArtAsset = {
  src: '/images/skin-changer/skin-changer.webp',
  width: 1024,
  height: 682,
  alt: {
    en: 'Skin Changer product mark: a shield labeled Skin Changer with crossed firearms.',
    es: 'Marca del producto Skin Changer: un escudo con la etiqueta Skin Changer y armas cruzadas.',
    de: 'Skin-Changer-Produktmarke: Schild mit der Beschriftung Skin Changer und gekreuzten Waffen.',
    fr: 'Marque du produit Skin Changer : un bouclier étiqueté Skin Changer avec des armes croisées.',
  },
};

/** One topic-matched asset per blog slug. Do not rotate generic screenshots. */
const BY_SLUG: Record<string, ArtAsset> = {
  'deadlock-aimbot-explained': espBoxes,
  'deadlock-cheat-menu-features': menuMisc,
  'deadlock-hero-ability-info': espIndoor,
  'deadlock-aim-at-souls': espSouls,
  'deadlock-wallhack-and-visuals': espStreet,
  'deadlock-esp-explained': espBoxes,
  'deadlock-cheat-configs': menuMisc,
  'deadlock-cheats-for-pc': espStreet,
  'deadlock-cheat-status-after-patches': menuMisc,
  'deadlock-cheats-vs-macros': menuMisc,
  'deadlock-cheat-download-checklist': menuMisc,
  'deadlock-hwid-spoofer-questions': hwidUefi,
  'deadlock-hwid-ban-vs-account-ban': hwidSerial,
  'deadlock-account-appeal-guide': ugcMark,
  'deadlock-appeal-evidence-checklist': ugcMark,
  'deadlock-skin-changer-questions': skinChanger,
  'deadlock-cloud-dma-questions': cloudDma,
  'deadlock-dma-vs-hwid-spoofer': cloudDma,
  'deadlock-cheats-monthly-vs-lifetime': menuMisc,
  'deadlock-cheat-reviews': espBoxes,
  'deadlock-undetected-claims': espIndoor,
  'deadlock-product-research-checklist': menuMisc,
  'deadlock-plan-comparison': menuMisc,
  'hwid-and-account-appeals-different-questions': hwidSerial,
  'deadlock-third-party-software-risk': espIndoor,
  'deadlock-official-sources': espStreet,
};

export function blogArtFor(slug: string, locale: SiteLocale = 'en'): { src: string; width: number; height: number; alt: string } {
  const asset = BY_SLUG[slug] ?? espBoxes;
  return { src: asset.src, width: asset.width, height: asset.height, alt: asset.alt[locale] ?? asset.alt.en };
}
