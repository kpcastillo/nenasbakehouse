// The menu, by category. Each category gets its own page at /<slug>.
//
// PHOTOS: drop a file in src/assets/photos/ and put its name (without the
// extension) in `photo`. Until then a patterned panel shows instead.
//
// LABELS: `ingredients`, `contains`, `mayContain` and `netWt` must be copied
// word for word from the SNHD-approved label for that product. Leave them
// null until the label is in hand; the page then shows a general allergen
// note instead of a per-product list.

const label = { ingredients: null, contains: null, mayContain: null, netWt: null };

export const categories = [
  {
    slug: 'custom-cakes',
    name: 'Custom cakes',
    short: 'Cakes',
    family: 'sweet',
    pattern: 'stripes',
    photo: 'cakes',
    tagline: 'Made to order, for your date',
    intro:
      'Every cake is made to order, so there is no price list. Tell me the date, how many people, and what you have in mind, and I will send you a written quote. I need at least two weeks\' notice. These are the flavors I make most.',
    seoTitle: 'Custom Cakes in Las Vegas | Nenas Bakehouse',
    seoDescription:
      'Less-sweet custom cakes in Las Vegas, made to order by a home-based cottage bakery. Vanilla, chocolate crunch, banana cajeta, olive oil citrus and dulce de leche. Request a quote.',
    priceNote: 'Custom quote',
    cta: 'Request a cake quote',
    items: [
      {
        name: 'Vanilla Birthday Cake',
        photo: 'cake-vanilla',
        desc: 'Real vanilla bean, good butter, and a tender crumb. The one everybody asks for.',
        ...label,
      },
      {
        name: 'Chocolate Chocolate Crunch',
        photo: 'cake-chocolate',
        desc: 'Dark chocolate cake, house-made brigadeiro, and a crisp crunch layer in the middle.',
        ...label,
      },
      {
        name: 'Browned Butter Banana Cajeta Praline',
        photo: 'cake-banana',
        desc: 'Browned butter banana cake layered with cajeta and a praline crunch.',
        ...label,
      },
      {
        name: 'Olive Oil Citrus',
        photo: 'cake-olive-oil',
        desc: 'A light olive oil cake with fresh citrus.',
        ...label,
      },
      {
        name: 'Dulce de Leche Croustillant',
        photo: 'cake-dulce',
        desc: 'Dulce de leche against a crisp praline layer.',
        ...label,
      },
    ],
  },
  {
    slug: 'sourdough-focaccia',
    name: 'Sourdough & focaccia',
    short: 'Bread',
    family: 'savory',
    pattern: 'sparks',
    photo: 'bread',
    tagline: 'Slow fermented',
    intro:
      'Slow-fermented sourdough loaves and focaccia, baked fresh for your pre-order.',
    seoTitle: 'Sourdough Bread & Focaccia in Las Vegas | Nenas Bakehouse',
    seoDescription:
      'Slow-fermented sourdough loaves and sea salt focaccia from a home-based cottage bakery in Las Vegas. Country, rosemary parmesan and seeded whole grain. Pre-order for pickup in northwest Las Vegas.',
    priceNote: 'Loaves $12 to $14',
    cta: 'Pre-order bread',
    items: [
      {
        name: 'Country Sourdough',
        photo: 'sourdough-country',
        desc: 'The regular loaf. Slow fermented, with a crisp crust.',
        price: '$12 per loaf',
        offer: 12,
        ...label,
      },
      {
        name: 'Rosemary Parmesan Sourdough',
        photo: 'sourdough-rosemary-parmesan',
        desc: 'Sourdough with rosemary and parmesan baked in.',
        price: '$14 per loaf',
        offer: 14,
        ...label,
      },
      {
        name: 'Seeded Whole Grain Sourdough',
        photo: 'sourdough-seeded',
        desc: 'A whole grain sourdough loaf with seeds.',
        price: '$14 per loaf',
        offer: 14,
        ...label,
      },
      {
        name: 'Sea Salt Focaccia',
        photo: 'focaccia-sea-salt',
        desc: 'Focaccia finished with sea salt.',
        ...label,
      },
    ],
  },
  {
    slug: 'cookies',
    name: 'Cookies',
    short: 'Cookies',
    family: 'sweet',
    pattern: 'dots',
    photo: 'cookies',
    tagline: 'By the half dozen',
    intro: 'Three cookies, sold by the half dozen.',
    seoTitle: 'Cookies in Las Vegas | Nenas Bakehouse',
    seoDescription:
      'Brown butter chocolate chip, double chocolate and Biscoff cookies from a home-based cottage bakery in Las Vegas. $16 per half dozen. Pre-order for pickup in northwest Las Vegas.',
    priceNote: '$16 per half dozen',
    cta: 'Pre-order cookies',
    items: [
      {
        name: 'Brown Butter Chocolate Chip',
        photo: 'cookie-chocolate-chip',
        desc: 'Brown butter dough with chocolate chips.',
        price: '$16 per half dozen',
        offer: 16,
        ...label,
      },
      {
        name: 'Double Chocolate',
        photo: 'cookie-double-chocolate',
        desc: 'Chocolate dough with more chocolate inside.',
        price: '$16 per half dozen',
        offer: 16,
        ...label,
      },
      {
        name: 'Biscoff',
        photo: 'cookie-biscoff',
        desc: 'A cookie made with Biscoff.',
        price: '$16 per half dozen',
        offer: 16,
        ...label,
      },
    ],
  },
  {
    slug: 'cinnamon-rolls',
    name: 'Cinnamon rolls',
    short: 'Cinnamon rolls',
    family: 'sweet',
    pattern: 'checker',
    photo: 'cinnamon-rolls',
    tagline: 'Half-sugar glaze',
    intro: 'One cinnamon roll, done one way: soft, and finished with a half-sugar glaze.',
    seoTitle: 'Cinnamon Rolls in Las Vegas | Nenas Bakehouse',
    seoDescription:
      'Cinnamon rolls with a half-sugar glaze from a home-based cottage bakery in Las Vegas. $4 each. Pre-order for pickup in northwest Las Vegas.',
    priceNote: '$4 each',
    cta: 'Pre-order cinnamon rolls',
    items: [
      {
        name: 'Half-Sugar Glazed Cinnamon Roll',
        photo: 'cinnamon-roll',
        desc: 'A soft cinnamon roll with a half-sugar glaze.',
        price: '$4 each',
        offer: 4,
        ...label,
      },
    ],
  },
  {
    slug: 'loaf-cakes',
    name: 'Loaf cakes',
    short: 'Loaf cakes',
    family: 'sweet',
    pattern: 'stripes',
    photo: 'loaf-cakes',
    tagline: 'Cake for the week',
    intro: 'One loaf cake for now.',
    seoTitle: 'Brown Butter Banana Loaf Cake in Las Vegas | Nenas Bakehouse',
    seoDescription:
      'Brown butter banana loaf cake from a home-based cottage bakery in Las Vegas. Pre-order for pickup in northwest Las Vegas.',
    priceNote: null,
    cta: 'Pre-order a loaf cake',
    items: [
      {
        name: 'Brown Butter Banana Loaf',
        photo: 'loaf-banana',
        desc: 'Banana loaf cake made with brown butter.',
        ...label,
      },
    ],
  },
];

export const bySlug = (slug) => categories.find((c) => c.slug === slug);
