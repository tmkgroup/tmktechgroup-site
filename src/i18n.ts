// Noi dung chu cua site. Truong icon = ten file public/icons/<icon>.png (Codex gen, 2026-11-24).
// Nguon: TMK_Tech_Group_Brand_Profile.md (ho so thuong hieu anh dua 2026-11-24)
// va anh chup ChatGPT "Can website chinh thuc" (ten 8 linh vuc, "Technology across multiple industries",
// "Let's Build the Future Together", email lien he). Cam them cau khong co trong 2 nguon tren.

export type Lang = 'en';

export const industries = [
  { icon: 'software-mobile', name: 'Software & Mobile Applications' },
  { icon: 'game', name: 'Game & Interactive Entertainment' },
  { icon: 'ai', name: 'Artificial Intelligence' },
  { icon: 'enterprise', name: 'Enterprise Solutions' },
  { icon: 'edtech', name: 'Education Technology' },
  { icon: 'cybersecurity-data', name: 'Cybersecurity & Data Technology' },
  { icon: 'digital-media', name: 'Digital Media & Services' },
  { icon: 'geospatial', name: 'Geospatial Technology' },
] as const;

export const contactEmail = 'contact@tmktechgroup.com';
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
      ['Innovation', 'Continuously explore, learn, and improve to create new value.', 'innovation'],
      ['Quality', 'Prioritize reliability, performance, and user experience in every product.', 'quality'],
      ['Integrity', 'Act with transparency, accountability, and integrity.', 'integrity'],
      ['User Focus', 'Put real user needs and interests at the center of our decisions.', 'user-focus'],
      ['Security & Privacy', 'Prioritize information security and privacy from the design stage.', 'security-privacy'],
      ['Global Mindset', 'Embrace diversity and strive for worldwide accessibility.', 'global-mindset'],
      ['Sustainable Growth', 'Pursue lasting value and continuous improvement.', 'sustainable-growth'],
    ],
  },
  industriesSection: { title: 'Our Industries', sub: 'Technology across multiple industries' },
  contact: { title: 'Let’s Build the Future Together' },
  footer: { privacy: 'Privacy Policy', copyright: '© 2026 TMK Tech Group.' },
};

export const t = { en };
