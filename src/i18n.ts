// Toutes les traductions de l'interface. Modifiez ici les textes du site.
export type Lang = 'fr' | 'en'
const fr = {
  meta: { title: 'Romane Rullier — Traductrice freelance, Paris', desc: 'Romane Rullier, traductrice freelance à Paris : traduction, révision, relecture.' },
  nav: { home: 'Accueil', portfolio: 'Expérience', services: 'Services', menu: 'Menu', lang: 'Changer de langue' },
  role: 'Traductrice freelance',
  intro: 'Je vous accompagne dans votre projet de traduction, révision ou de relecture.',
  cta1: 'Découvrir mon travail', cta2: 'Me contacter',
  aboutT: 'À propos',
  about: ['Diplômée d’un master de l’Institut de Traducteurs, Interprètes et Relations Internationales de l’Université de Strasbourg, je tavaille principalement de l’anglais vers le français. Confiez-moi votre projet de traduction, de révision et de relecture.'],
  stats: ['SDL Trados · Antidote', 'Français · English', 'Paris, France'],
  portT: 'Ils ont fait appel à moi', portSub: 'Quelques-uns de mes projets.', view: 'Voir le détail',
  close: 'Fermer', prev: 'Projet précédent', next: 'Projet suivant', roleL: 'Type de projet', toolsL: 'Outils', contribL: 'Contributions', linksL: 'Liens', imgL: 'Images', noLinks: 'Aucun lien pour le moment.',
  servT: 'Services', servSub: 'Je m’adapte aux besoins de votre projet.', deliv: 'Inclus',
  ctaT: 'Racontez-moi votre projet', ctaP: 'Envie de travailler avec moi ?'\n,'N’hésitez pas à cliquer sur le bouton ci-dessous pour me parler plus en détail de votre projet. Je vous répondrai dans les plus brefs délais. Pour avoir une estimation plus précise, pensez à indiquer les langues concernées et joignez sipossible à votre message le document que vous souhaitez que je traite.', ctaBtn: 'Contactez-moi',
  services: [
    { t: 'Traduction', d: 'Conception de systèmes de gameplay, de mécaniques et d’expériences de jeu.', l: ['Je vérifie l’exactitude des termes employés'] },
    { t: 'Révision', d: 'Conception d’environnements lisibles, cohérents et engageants, au service du gameplay.', l: ['Documentation de level design'] },
    { t: 'Relecture', d: 'Accompagnement et retours pour améliorer des projets, concepts et expériences existants.', l: ['Conseils orientés production'] },
  ],
  rights: 'Tous droits réservés.',
}
const en: typeof fr = {
  meta: { title: 'Romane Rullier — Freelance Translator, Paris', desc: 'Romane Rullier, freelance translator based in Paris: translation, edition, proofreading.' },
  nav: { home: 'Home', portfolio: 'Experience', services: 'Services', menu: 'Menu', lang: 'Switch language' },
  role: 'Freelance Translator',
  intro: 'I can help you with the translation, edition and proofreading of your projects.',
  cta1: 'See my work', cta2: 'Contact me',
  aboutT: 'About',
  about: ['With a Master’s degree in translation from the University of Strasbourg, I mainly work from English to French. I will take care of the translation, edition and/or proofreading of your project.'],
  stats: ['SDL Trados · Antidote', 'Français · English', 'Paris, France'],
  portT: 'They trusted me', portSub: 'Some of my projects.', view: 'View details',
  close: 'Close', prev: 'Previous project', next: 'Next project', roleL: 'Type of project', toolsL: 'Tools', contribL: 'Contributions', linksL: 'Links', imgL: 'Images', noLinks: 'No links yet.',
  servT: 'Services', servSub: 'I adapt to what your project needs.', deliv: 'Included',
  ctaT: 'Tell me about your project', ctaP: 'Let’s work together! Click the button below to explain what your project entails. I will respond as quickly as possible. For a more precise quote, feel free to mention the languages involved and to attach the document you want me to  work on.', ctaBtn: 'Email me',
  services: [
    { t: 'Translation', d: 'Design and development of gameplay systems, mechanics and player experiences.', l: ['Game concepts and gameplay pillars'] },
    { t: 'Edition', d: 'Design of engaging, readable and coherent game environments that support gameplay and player experience.', l: ['Level layout and blockout'] },
    { t: 'Proofreading', d: 'Professional support and feedback to improve existing game projects, concepts and gameplay experiences.', l: ['Game concept evaluation'] },
  ],
  rights: 'All rights reserved.',
}
export const dict = { fr, en }
