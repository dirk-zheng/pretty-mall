export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'protective-products', name: 'Protective Products' },
  { id: 'lip-care', name: 'Lip Care' },
  { id: 'sun-care', name: 'Sun Care' },
];

export const productGroups = [
  { title: 'Protective Care', description: 'Hand hygiene and protective-care formats for retail, travel, workplace and private-label programs.', categories: ['protective-products'] },
  { title: 'Lip Care', description: 'Customizable lip balm formats for moisture, comfort, shade and bespoke packaging programs.', categories: ['lip-care'] },
  { title: 'Sun Care', description: 'Custom sunscreen formats developed around texture, application, testing and target-market requirements.', categories: ['sun-care'] },
];

export const categoryNames = Object.fromEntries(categories.filter(({ id }) => id !== 'all').map(({ id, name }) => [id, name]));