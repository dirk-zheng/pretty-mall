export const categories = [
  { id: 'all', name: 'All Ingredients' },
  { id: 'active-ingredients', name: 'Active Ingredients' },
  { id: 'botanical-extracts', name: 'Botanicals & Oils' },
  { id: 'formulation-essentials', name: 'Formulation Essentials' },
  { id: 'surfactants', name: 'Surfactants' },
];
export const productGroups = [
  { title: 'Active Ingredients', description: 'Hydration, barrier, antioxidant and tone-care ingredients for cosmetic formulation briefs.', categories: ['active-ingredients'] },
  { title: 'Botanicals & Oils', description: 'Botanical extracts and emollient oils for sensorial, conditioning and care concepts.', categories: ['botanical-extracts'] },
  { title: 'Formulation Essentials', description: 'Emulsifiers, preservation systems, pigments and functional bases for formula development.', categories: ['formulation-essentials'] },
  { title: 'Surfactants', description: 'Surface-active materials for cleansing, foam and viscosity systems, with supplier specifications confirmed by grade.', categories: ['surfactants'] },
];
export const categoryNames = Object.fromEntries(categories.filter(({ id }) => id !== 'all').map(({ id, name }) => [id, name]));
export const categoryThemes = {
  all:{accent:'#234b4c',dark:'#173638',soft:'#edf3ef',surface:'#faf8f3',highlight:'#b58a4c'},
  'active-ingredients':{accent:'#2f7f80',dark:'#215c5d',soft:'#e5f2f0',surface:'#f7fbfa',highlight:'#d1a54e'},
  'botanical-extracts':{accent:'#5c7d4f',dark:'#405b37',soft:'#edf3e9',surface:'#f8fbf5',highlight:'#c2a05a'},
  'formulation-essentials':{accent:'#7a6650',dark:'#574737',soft:'#f2ece3',surface:'#fcfaf6',highlight:'#9aaeb0'},
  surfactants:{accent:'#55727a',dark:'#39545b',soft:'#eaf1f2',surface:'#f7fafb',highlight:'#c49a45'},
};
export const getCategoryTheme=(category='all')=>categoryThemes[category]||categoryThemes.all;
export const categoryThemeStyle=(category='all')=>{const t=getCategoryTheme(category);return {'--category-accent':t.accent,'--category-dark':t.dark,'--category-soft':t.soft,'--category-surface':t.surface,'--category-highlight':t.highlight};};
