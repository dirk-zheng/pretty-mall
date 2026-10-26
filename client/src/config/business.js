export const businessConfig = {
  legalName: import.meta.env.VITE_LEGAL_BUSINESS_NAME || 'Aurelia Pretty',
  postalAddress: import.meta.env.VITE_BUSINESS_POSTAL_ADDRESS || 'Business mailing address pending verification',
  privacyEmail: import.meta.env.VITE_PRIVACY_EMAIL || 'hello@aureliapretty.com',
  inquiriesEmail: import.meta.env.VITE_INQUIRIES_EMAIL || 'hello@aureliapretty.com',
  socialLinks: {
    facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/aureliapretty',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/aurelia-pretty',
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/aureliapretty',
  },
  effectiveDate: 'September 9, 2026',
};
