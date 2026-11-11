import type { SiteLocale } from '../../i18n/locales';

const es: Record<string, string> = {
  "deadlock-aimbot-explained": "Una guía en lenguaje sencillo sobre las afirmaciones de aimbot, objetivo silencioso, FOV y vischeck utilizadas en las búsquedas de trampas de Deadlock.",
  "deadlock-cheat-menu-features": "Aprenda a comparar las afirmaciones del menú de trucos de Deadlock sin asumir que cada fila de ESP o aimbot está en su plan.",
  "deadlock-hero-ability-info": "Las superposiciones de habilidades e información del héroe son una búsqueda de punto muerto de alta intención. Utilice estas preguntas antes de tratar el reclamo como una especificación.",
  "deadlock-aim-at-souls": "La orientación del alma es una consulta de trampa específica de Deadlock. A continuación se explica cómo evaluar la afirmación sin tratar la palabra clave como prueba.",
  "deadlock-wallhack-and-visuals": "Wallhack es una consulta de trucos popular para Deadlock. Utilice esta guía para separar el lenguaje superpuesto de un reclamo vischeck real.",
  "deadlock-esp-explained": "Una guía de términos de búsqueda para Deadlock ESP: qué significan generalmente las superposiciones de casilla, salud, nombre y distancia en una lista.",
  "deadlock-cheat-configs": "Las configuraciones y ajustes preestablecidos en las listas de trucos de Deadlock pueden significar archivos, perfiles o capturas de pantalla. Confirme el formato antes de realizar el pago.",
  "deadlock-cheats-for-pc": "Deadlock es una prueba de juego para PC en Steam. Utilice esta guía para verificar Windows, el acceso por invitación y el alcance de la lista antes de comprar trucos.",
  "deadlock-cheat-status-after-patches": "Los parches de punto muerto mueven a los héroes y anti-trampas. Esto es lo que debe incluir una nota de estado útil después de una actualización.",
  "deadlock-cheats-vs-macros": "Las macros, scripts y cargadores de trampas se agrupan en los resultados de búsqueda de Deadlock incluso cuando describen diferentes herramientas.",
  "deadlock-cheat-download-checklist": "Una breve lista de verificación de descarga de trucos de Deadlock: nombre del producto, plan, fuente del cargador y preguntas para hacer al soporte.",
  "deadlock-hwid-spoofer-questions": "HWID Spoofer es una utilidad Deadlock independiente. Confirme el alcance, los requisitos y los límites del hardware antes de realizar el pago.",
  "deadlock-hwid-ban-vs-account-ban": "Los indicadores de hardware y las acciones de la cuenta Deadlock son problemas diferentes. Mantenga los avisos separados antes de elegir un producto.",
  "deadlock-account-appeal-guide": "Cómo preparar un paquete de apelación de cuenta Deadlock con UGC sin tratar la recuperación como un resultado garantizado.",
  "deadlock-appeal-evidence-checklist": "Una lista de evidencia práctica para la investigación de apelaciones de cuentas de Deadlock: avisos, fechas, números de casos y respuestas oficiales.",
  "deadlock-cloud-dma-questions": "Cloud DMA es una lista independiente adyacente a Deadlock. Confirme los requisitos, el hardware y las exclusiones antes de realizar el pago.",
  "deadlock-dma-vs-hwid-spoofer": "Cloud DMA y HWID Spoofer responden diferentes preguntas sobre Deadlock. Compare cada listado en lugar de tratarlos como gemelos.",
  "deadlock-cheats-monthly-vs-lifetime": "Cómo comparar los planes mensuales de Deadlock Hacks ($35 / 30 días) y de por vida ($150) sin inventar coberturas futuras.",
  "deadlock-cheat-reviews": "Cómo leer reseñas y testimonios de trucos de Deadlock sin tratar los clips o las clasificaciones como prueba actual.",
  "deadlock-undetected-claims": "\"No detectado\" en las páginas de trucos de Deadlock omite la fecha, el método y la aplicación real de Valve. Esto es lo que debe verificar.",
  "deadlock-product-research-checklist": "Una lista de verificación previa al pago para la investigación de trampas de Deadlock: plataforma, características, estado, planes y respuestas de soporte por escrito.",
  "deadlock-plan-comparison": "Preguntas paralelas para los planes de 30 días y de por vida de Deadlock Hacks, incluido qué precio no decide.",
  "hwid-and-account-appeals-different-questions": "Por qué las preguntas sobre Deadlock HWID y las apelaciones de cuentas deben permanecer en tickets y páginas de productos separados.",
  "deadlock-third-party-software-risk": "Separe las reglas de Deadlock de Valve del marketing de trampas. Revise los riesgos de la cuenta antes de utilizar software de terceros.",
  "deadlock-official-sources": "Utilice las páginas de Steam y Valve como contexto para las búsquedas de trucos de Deadlock. Fuentes oficiales nombran el juego; no verifican listados de terceros.",
  "deadlock-skin-changer-questions": "Investigue el listado independiente Skin Changer: inventario cosmético no facilitado, términos de plan y preguntas para enviar a soporte antes del pago."
};
const de: Record<string, string> = {
  "deadlock-aimbot-explained": "Eine leicht verständliche Anleitung zu Aimbot-, Silent Aim-, FOV- und Vischeck-Ansprüchen, die bei Deadlock-Cheat-Suchen verwendet werden.",
  "deadlock-cheat-menu-features": "Erfahren Sie, wie Sie Deadlock-Cheat-Menü-Ansprüche vergleichen können, ohne davon auszugehen, dass jede ESP- oder Aimbot-Zeile in Ihrem Plan enthalten ist.",
  "deadlock-hero-ability-info": "Fähigkeits- und Heldeninfo-Overlays sind eine Deadlock-Suche mit hoher Absicht. Verwenden Sie diese Fragen, bevor Sie den Anspruch als Spezifikation behandeln.",
  "deadlock-aim-at-souls": "Soul Targeting ist eine Deadlock-spezifische Cheat-Abfrage. So beurteilen Sie die Behauptung, ohne das Schlüsselwort als Beweis zu betrachten.",
  "deadlock-wallhack-and-visuals": "Wallhack ist eine beliebte Deadlock-Cheat-Abfrage. Verwenden Sie diesen Leitfaden, um Overlay-Sprache von einem tatsächlichen Vischeck-Anspruch zu trennen.",
  "deadlock-esp-explained": "Eine Suchbegriff-Anleitung zu Deadlock ESP: Was Box-, Zustands-, Namens- und Distanz-Overlays normalerweise in einem Eintrag bedeuten.",
  "deadlock-cheat-configs": "Konfigurationen und Voreinstellungen in Deadlock-Cheat-Listen können Dateien, Profile oder Screenshots bedeuten. Bestätigen Sie das Format vor dem Bezahlen.",
  "deadlock-cheats-for-pc": "Deadlock ist ein PC-Spieltest auf Steam. Verwenden Sie diese Anleitung, um Windows, den Einladungszugriff und den Listenumfang zu überprüfen, bevor Sie Cheats kaufen.",
  "deadlock-cheat-status-after-patches": "Deadlock-Patches verschieben Helden und Anti-Cheat. Hier ist, was eine nützliche Statusnotiz nach einem Update enthalten sollte.",
  "deadlock-cheats-vs-macros": "Makros, Skripte und Cheat-Loader werden in Deadlock-Suchergebnissen gruppiert, auch wenn sie unterschiedliche Tools beschreiben.",
  "deadlock-cheat-download-checklist": "Eine kurze Checkliste zum Herunterladen von Deadlock-Cheats: Produktname, Plan, Loader-Quelle und die Fragen, die Sie dem Support stellen sollten.",
  "deadlock-hwid-spoofer-questions": "HWID Spoofer ist ein separates Deadlock-Dienstprogramm. Bestätigen Sie vor dem Bezahlen den Umfang, die Anforderungen und die Grenzen der Hardware.",
  "deadlock-hwid-ban-vs-account-ban": "Hardware-Flags und Deadlock-Kontoaktionen sind unterschiedliche Probleme. Bewahren Sie die Hinweise getrennt auf, bevor Sie ein Produkt auswählen.",
  "deadlock-account-appeal-guide": "So bereiten Sie ein Deadlock-Konto-Einspruchspaket mit UGC vor, ohne die Wiederherstellung als garantiertes Ergebnis zu betrachten.",
  "deadlock-appeal-evidence-checklist": "Eine praktische Beweisliste für die Recherche zu Deadlock-Konteneinsprüchen: Mitteilungen, Daten, Fallnummern und offizielle Antworten.",
  "deadlock-cloud-dma-questions": "Cloud DMA ist eine separate, an Deadlock angrenzende Auflistung. Bestätigen Sie vor dem Bezahlen Anforderungen, Hardware und Ausschlüsse.",
  "deadlock-dma-vs-hwid-spoofer": "Cloud DMA und HWID Spoofer beantworten verschiedene Deadlock-Fragen. Vergleichen Sie jede Auflistung, anstatt sie als Zwillinge zu behandeln.",
  "deadlock-cheats-monthly-vs-lifetime": "So vergleichen Sie monatliche (35 $/30 Tage) und lebenslange (150 $) Pläne von Deadlock Hacks, ohne eine zukünftige Absicherung zu erfinden.",
  "deadlock-cheat-reviews": "So lesen Sie Deadlock-Cheat-Rezensionen und Testimonials, ohne Clips oder Rankings als aktuelle Beweise zu betrachten.",
  "deadlock-undetected-claims": "„Unentdeckt“ auf Deadlock-Cheat-Seiten lässt Datum, Methode und die tatsächliche Durchsetzung durch Valve weg. Hier erfahren Sie, was Sie überprüfen müssen.",
  "deadlock-product-research-checklist": "Eine Pre-Checkout-Checkliste für die Deadlock-Cheat-Recherche: Plattform, Funktionen, Status, Pläne und schriftliche Support-Antworten.",
  "deadlock-plan-comparison": "Nebeneinander gestellte Fragen zu 30-Tage- und Lifetime-Plänen von Deadlock Hacks, einschließlich der Frage, welcher Preis nicht ausschlaggebend ist.",
  "hwid-and-account-appeals-different-questions": "Warum Deadlock-HWID-Fragen und Kontoeinsprüche auf separaten Produktseiten und Tickets bleiben sollten.",
  "deadlock-third-party-software-risk": "Trennen Sie die Deadlock-Regeln von Valve vom Cheat-Marketing. Überprüfen Sie die Kontorisiken, bevor Sie Software von Drittanbietern verwenden.",
  "deadlock-official-sources": "Verwenden Sie Steam- und Valve-Seiten als Kontext für die Suche nach Deadlock-Cheats. Offizielle Quellen nennen das Spiel; Sie überprüfen keine Einträge von Drittanbietern.",
  "deadlock-skin-changer-questions": "Recherchieren Sie das separate Skin-Changer-Listing: fehlendes Kosmetikinventar, Plantarife und Fragen an den Support vor dem Checkout."
};
const fr: Record<string, string> = {
  "deadlock-aimbot-explained": "Un guide en langage simple sur les allégations d'aimbot, de visée silencieuse, de FOV et de vischeck utilisées dans les recherches de triche Deadlock.",
  "deadlock-cheat-menu-features": "Apprenez à comparer les allégations du menu de triche Deadlock sans supposer que chaque ligne ESP ou aimbot figure dans votre plan.",
  "deadlock-hero-ability-info": "Les superpositions d’informations sur les capacités et les héros constituent une recherche Deadlock à haute intention. Utilisez ces questions avant de traiter la réclamation comme une spécification.",
  "deadlock-aim-at-souls": "Le ciblage de l'âme est une requête de triche spécifique à Deadlock. Voici comment évaluer la réclamation sans traiter le mot-clé comme une preuve.",
  "deadlock-wallhack-and-visuals": "Wallhack est une requête de triche Deadlock populaire. Utilisez ce guide pour séparer le langage de superposition d'une réclamation vischeck réelle.",
  "deadlock-esp-explained": "Un guide des termes de recherche pour Deadlock ESP : ce que signifient généralement les superpositions de boîte, de santé, de nom et de distance sur une liste.",
  "deadlock-cheat-configs": "Les configurations et les préréglages sur les listes de triche Deadlock peuvent signifier des fichiers, des profils ou des captures d'écran. Confirmez le format avant de passer à la caisse.",
  "deadlock-cheats-for-pc": "Deadlock est un playtest PC sur Steam. Utilisez ce guide pour vérifier Windows, inviter l'accès et la portée de la liste avant d'acheter des astuces.",
  "deadlock-cheat-status-after-patches": "Les correctifs Deadlock déplacent les héros et anti-triche. Voici ce qu'une note d'état utile devrait inclure après une mise à jour.",
  "deadlock-cheats-vs-macros": "Les macros, scripts et chargeurs de triche sont regroupés dans les résultats de recherche Deadlock même lorsqu'ils décrivent différents outils.",
  "deadlock-cheat-download-checklist": "Une courte liste de contrôle de téléchargement de triche Deadlock : nom du produit, plan, source du chargeur et questions à poser à l'assistance.",
  "deadlock-hwid-spoofer-questions": "HWID Spoofer est un utilitaire Deadlock distinct. Confirmez la portée matérielle, les exigences et les limites avant de procéder au paiement.",
  "deadlock-hwid-ban-vs-account-ban": "Les indicateurs matériels et les actions du compte Deadlock sont des problèmes différents. Gardez les avis séparés avant de choisir un produit.",
  "deadlock-account-appeal-guide": "Comment préparer un paquet d'appel de compte Deadlock avec UGC sans considérer la récupération comme un résultat garanti.",
  "deadlock-appeal-evidence-checklist": "Une liste de preuves pratiques pour la recherche sur les appels liés aux comptes Deadlock : avis, dates, numéros de cas et réponses officielles.",
  "deadlock-cloud-dma-questions": "Cloud DMA est une liste distincte adjacente à Deadlock. Confirmez la configuration requise, le matériel et les exclusions avant de procéder au paiement.",
  "deadlock-dma-vs-hwid-spoofer": "Cloud DMA et HWID Spoofer répondent à différentes questions Deadlock. Comparez chaque annonce au lieu de les traiter comme des jumeaux.",
  "deadlock-cheats-monthly-vs-lifetime": "Comment comparer les forfaits mensuels (35 $ / 30 jours) et à vie (150 $) de Deadlock Hacks sans inventer une couverture future.",
  "deadlock-cheat-reviews": "Comment lire les critiques et témoignages de triche Deadlock sans traiter les clips ou les classements comme preuve actuelle.",
  "deadlock-undetected-claims": "« Non détecté » sur les pages de triche Deadlock omet la date, la méthode et l'application réelle de Valve. Voici ce qu'il faut vérifier.",
  "deadlock-product-research-checklist": "Une liste de contrôle préalable au paiement pour la recherche de triche Deadlock : plate-forme, fonctionnalités, statut, plans et réponses d'assistance écrites.",
  "deadlock-plan-comparison": "Questions côte à côte pour les forfaits Deadlock Hacks de 30 jours et à vie, y compris le prix qui ne décide pas.",
  "hwid-and-account-appeals-different-questions": "Pourquoi les questions et les appels concernant Deadlock HWID devraient rester sur des pages de produits et des tickets distincts.",
  "deadlock-third-party-software-risk": "Séparez les règles Deadlock de Valve du marketing de triche. Examinez les risques liés au compte avant d'utiliser un logiciel tiers.",
  "deadlock-official-sources": "Utilisez les pages Steam et Valve comme contexte pour les recherches de triche Deadlock. Des sources officielles nomment le jeu ; ils ne vérifient pas les annonces de tiers.",
  "deadlock-skin-changer-questions": "Examinez le listing Skin Changer séparé : inventaire cosmétique non fourni, conditions de plan et questions à envoyer au support avant paiement."
};

const byLocale: Record<Exclude<SiteLocale, 'en'>, Record<string, string>> = { es, de, fr };

export function localeMetaDescriptionOverride(slug: string, locale: SiteLocale): string | undefined {
  if (locale === 'en') return undefined;
  return byLocale[locale][slug];
}
