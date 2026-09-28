export const categories = [
  { id: 'all', name: 'All Beauty' },
  { id: 'skincare', name: 'Skincare' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'body-fragrance', name: 'Body & Fragrance' },
];

export const productGroups = [
  { title: 'Daily Skin Rituals', description: 'Barrier-supporting hydration, brightening care and restorative formulas for everyday routines.', categories: ['skincare'] },
  { title: 'Modern Color', description: 'Wearable, complexion-friendly color designed to layer, blend and move with real life.', categories: ['makeup'] },
  { title: 'Body & Scent', description: 'Tactile body care and skin-close fragrance that turn small moments into rituals.', categories: ['body-fragrance'] },
];

export const categoryNames = Object.fromEntries(categories.filter(({ id }) => id !== 'all').map(({ id, name }) => [id, name]));
