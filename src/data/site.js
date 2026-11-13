// Single source of truth for identity, contact, and compliance copy.

export const site = {
  name: 'Nenas Bakehouse',
  tagline: 'Less sweet, still a treat',
  domain: 'nenasbakehouse.com',
  url: 'https://nenasbakehouse.com',
  title: 'Nenas Bakehouse | Less-Sweet Custom Cakes & Sourdough in Las Vegas',
  description:
    'Nenas Bakehouse is a home-based cottage bakery in Las Vegas, NV. Custom cakes, slow-fermented sourdough, focaccia, cookies and cinnamon rolls made with real ingredients and less sugar. Pre-order for pickup in northwest Las Vegas.',
  location: 'Las Vegas, NV',
  pickupArea: 'northwest Las Vegas (89131)',
  email: 'nenasbakehouselv@gmail.com',
  instagram: {
    handle: '@nenasbakehouse',
    url: 'https://instagram.com/nenasbakehouse',
  },
  leadNote: 'Custom cakes need at least two weeks\' notice.',
  // The allergens handled in the kitchen. Per-product "Contains" lines come
  // from the SNHD labels in menu.js, never from this list.
  kitchenAllergens: 'wheat, eggs, milk, tree nuts, and soy',
};

// Header nav. `only` hides a link on phones ("wide") or on desktop ("narrow").
export const nav = [
  { href: '/#menu', label: 'Menu', only: 'narrow' },
  { href: '/custom-cakes', label: 'Cakes', only: 'wide' },
  { href: '/sourdough-focaccia', label: 'Bread', only: 'wide' },
  { href: '/#everyday', label: 'Treats', only: 'wide' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export const compliance = {
  disclosure:
    'MADE IN A COTTAGE FOOD OPERATION THAT IS NOT SUBJECT TO GOVERNMENT FOOD SAFETY INSPECTION. Permitted by the Southern Nevada Health District.',
  copyright: `© ${new Date().getFullYear()} Nenas Bakehouse · Las Vegas, Nevada`,
};
