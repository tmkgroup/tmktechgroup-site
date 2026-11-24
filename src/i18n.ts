// Noi dung chu cua site.
// Nguon: TMK_Tech_Group_Brand_Profile.md (ho so thuong hieu anh dua 2026-11-24)
// va anh chup ChatGPT "Can website chinh thuc" (ten 8 linh vuc, "Technology across multiple industries",
// "Let's Build the Future Together", email lien he). Cam them cau khong co trong 2 nguon tren.

export type Lang = 'en';

export const industries = [
  { icon: 'monitor-smartphone', name: 'Software & Mobile Applications' },
  { icon: 'gamepad-2', name: 'Game & Interactive Entertainment' },
  { icon: 'brain-circuit', name: 'Artificial Intelligence' },
  { icon: 'building', name: 'Enterprise Solutions' },
  { icon: 'graduation-cap', name: 'Education Technology' },
  { icon: 'shield-check', name: 'Cybersecurity & Data Technology' },
  { icon: 'clapperboard', name: 'Digital Media & Services' },
  { icon: 'map', name: 'Geospatial Technology' },
] as const;

export const contactEmail = 'tmktechgroup@gmail.com';
export const privacyUrl = 'https://privacy.tmktechgroup.com/';

const en = {
  htmlLang: 'en',
  title: 'TMK Tech Group | Technology Without Boundaries',
  description:
    'TMK Tech Group is a technology brand focused on developing digital products and solutions for individuals, businesses, and communities worldwide.',
  nav: { about: 'About', industries: 'Industries', contact: 'Contact' },
  themeLabel: 'Switch light or dark mode',
  hero: {
    title: 'Technology Without Boundaries.',
    lead: 'Building meaningful digital experiences for people, businesses, and a connected world.',
    sub: 'Driven by innovation, guided by integrity, and focused on a better digital future.',
  },
  about: {
    title: 'Brand and direction',
    body: [
      'TMK Tech Group is a technology brand focused on developing digital products and solutions for individuals, businesses, and communities worldwide. We aim to combine technology, creativity, and user experience to deliver meaningful value in everyday life and work.',
      'Our development strategy is to build a diversified technology ecosystem with a focus on product quality, scalability, security, and continuous innovation. We pursue a global outlook, respect linguistic and cultural diversity, and embrace sustainable, long-term growth.',
    ],
  },
  vision: {
    title: 'Vision',
    body: 'To become a trusted global technology brand, contributing to a smarter, safer, more connected, and accessible digital future for everyone.',
  },
  mission: {
    title: 'Mission',
    body: 'To develop useful, reliable, and accessible technology products and solutions; transform creative ideas into practical value; improve everyday life and productivity; and respect users’ privacy and interests.',
  },
  values: {
    title: 'Core values',
    items: [
      ['Innovation', 'Continuously explore, learn, and improve to create new value.'],
      ['Quality', 'Prioritize reliability, performance, and user experience in every product.'],
      ['Integrity', 'Act with transparency, accountability, and integrity.'],
      ['User Focus', 'Put real user needs and interests at the center of our decisions.'],
      ['Security & Privacy', 'Prioritize information security and privacy from the design stage.'],
      ['Global Mindset', 'Embrace diversity and strive for worldwide accessibility.'],
      ['Sustainable Growth', 'Pursue lasting value and continuous improvement.'],
    ],
  },
  industriesSection: { title: 'Our Industries', sub: 'Technology across multiple industries' },
  contact: { title: 'Let’s Build the Future Together' },
  footer: { privacy: 'Privacy Policy', copyright: '© 2026 TMK Tech Group.' },
};

export const t = { en };
