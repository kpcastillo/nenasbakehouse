import { site, compliance } from './site.js';

// Each answer is plain text: it is shown on /faq and also published as
// FAQPage structured data, so keep answers short, direct and factual.
export const faqs = [
  {
    id: 'less-sweet',
    q: 'What does "less sweet, still a treat" mean?',
    a: 'Many cake recipes use as much sugar as flour. I hold sugar at about 75% of the flour weight, which is as low as it can go before the texture suffers. You taste the butter, the fruit and the chocolate first. It is still a real dessert: it is not sugar-free and it is not a health claim.',
  },
  {
    id: 'how-to-order',
    q: 'How do I order?',
    a: 'Everything is made by pre-order. Send the inquiry form with your date and what you would like. I reply with what is possible, the size and the price. Nothing is booked or charged until you confirm.',
  },
  {
    id: 'lead-time',
    q: 'How far ahead should I order?',
    a: `Custom cakes need ${site.leadTimes.custom}. Tiered cakes need ${site.leadTimes.tiered}. Bread, cookies, cinnamon rolls and loaf cakes are sold in pre-order drops.`,
  },
  {
    id: 'drops',
    q: 'What is a pre-order drop?',
    a: 'For now I bake bread and treats in batches called drops. You order ahead for a drop, I bake everything fresh, and you pick up. Send the inquiry form or message me on Instagram to ask about the next one.',
  },
  {
    id: 'cake-prices',
    q: 'How much does a custom cake cost?',
    a: 'Custom cakes are priced by size and design, so there is no fixed price list. Tell me the date, the number of people and your idea, and I will send a written quote.',
  },
  {
    id: 'prices',
    q: 'What do cookies, cinnamon rolls and sourdough cost?',
    a: 'Cookies are $16 per half dozen. Cinnamon rolls are $4 each. Country sourdough is $12 a loaf, and the flavored loaves (rosemary parmesan and seeded whole grain) are $14.',
  },
  {
    id: 'pickup',
    q: 'Where do I pick up? Do you deliver?',
    a: `Pickup is in ${site.pickupArea}. I send the address and your pickup window when your order is confirmed. I do not offer delivery yet.`,
  },
  {
    id: 'payment',
    q: 'How do I pay? Is there a deposit?',
    a: 'I take Apple Pay, Zelle and cash. Custom cakes require a deposit to hold your date; the amount is in your quote.',
  },
  {
    id: 'dietary',
    q: 'Do you have gluten-free, dairy-free or vegan options?',
    a: 'Nothing I bake is gluten-free. Most of my sourdough loaves and the focaccia are dairy-free and vegan. The exception is the Rosemary Parmesan loaf, which has cheese. My kitchen also handles milk and eggs, so tell me if you have an allergy.',
  },
  {
    id: 'allergens',
    q: 'What about allergens?',
    a: `My kitchen handles ${site.kitchenAllergens}, so I cannot guarantee that anything is free of those allergens. Every product carries a label with its full ingredient list. Tell me about any allergy in the inquiry form: it is the field I read first.`,
  },
  {
    id: 'cottage-food',
    q: 'What is a cottage food operation?',
    a: `Nenas Bakehouse is a home-based bakery permitted by the Southern Nevada Health District as a cottage food operation. Nevada requires this statement on cottage food: "${compliance.disclosure.split('. ')[0]}."`,
  },
  {
    id: 'storefront',
    q: 'Do you have a storefront?',
    a: 'No. I bake from my home kitchen in Las Vegas and there is no walk-in shop. Orders are made by pre-order, and pickup details are confirmed with your order.',
  },
];
