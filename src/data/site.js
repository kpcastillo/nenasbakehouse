// Single source of truth for identity, contact, and compliance copy.

export const site = {
  name: 'Nenas Bakehouse',
  tagline: 'Less sweet, still a treat',
  domain: 'nenasbakehouse.com',
  url: 'https://nenasbakehouse.com',
  description:
    'A cottage bakehouse in Las Vegas making cakes and bread the long way — browned butter, cultured starter, real fruit — with sugar held at 75% of flour weight so the flavour underneath has room to speak.',
  location: 'Las Vegas, NV',
  serviceArea: 'Las Vegas valley',
  email: 'nenasbakehouselv@gmail.com',
  instagram: {
    handle: '@nenasbakehouse',
    url: 'https://instagram.com/nenasbakehouse',
  },
  leadTimes: {
    custom: '72 hours minimum',
    tiered: 'two weeks',
  },
};

export const nav = [
  { href: '#cakes', label: 'Cakes', key: 'cakes' },
  { href: '#savory', label: 'Bread', key: 'savory' },
  { href: '#everyday', label: 'Everyday', key: 'everyday' },
  { href: '#order', label: 'Ordering', key: 'order' },
];

// TODO(before launch): replace with the exact wording the Southern Nevada
// Health District requires on your permit. This is placeholder phrasing.
export const compliance = {
  disclosure:
    'MADE IN A COTTAGE FOOD OPERATION THAT IS NOT SUBJECT TO GOVERNMENT FOOD SAFETY INSPECTION. Permitted by the Southern Nevada Health District.',
  disclosureIsPlaceholder: false,
  copyright: `© ${new Date().getFullYear()} Nenas Bakehouse · Las Vegas, Nevada`,
};
