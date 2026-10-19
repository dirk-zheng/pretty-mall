export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'lip-care', name: 'Lip Care' },
  { id: 'sun-care', name: 'Sun Care' },
  { id: 'protective-products', name: 'Protective Products' },
  { id: 'surfactants', name: 'Surfactants' },
];

export const productGroups = [
  { title: 'Protective Care', description: 'Hand hygiene and protective-care formats for retail, travel, workplace and private-label programs.', categories: ['protective-products'] },
  { title: 'Lip Care', description: 'Customizable lipstick formats covering classic finishes, reactive color and bespoke packaging programs.', categories: ['lip-care'] },
  { title: 'Sun Care', description: 'Custom sunscreen spray, gel, cream, lotion and stick formats developed around texture, application, testing and target-market requirements.', categories: ['sun-care'] },
  { title: 'Surfactants', description: 'Source-catalog surface-active materials for cleansing, foam, viscosity and formula-system evaluation.', categories: ['surfactants'] },
];

export const categoryNames = Object.fromEntries(categories.filter(({ id }) => id !== 'all').map(({ id, name }) => [id, name]));