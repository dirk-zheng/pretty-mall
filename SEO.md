# Aurelia Pretty B2B SEO Strategy

## Positioning

Aurelia Pretty is a B2B cosmetic raw-material sourcing partner for brands, formulation laboratories, manufacturers, distributors and importers. The featured catalog is representative rather than exhaustive. Public search pages should invite qualified buyers to submit any ingredient name, INCI, CAS number, grade or specification for sourcing review, samples, documents or quotation—not a consumer checkout.

## Primary Search Themes

- cosmetic ingredient sourcing
- cosmetic raw material supplier
- source cosmetic ingredients by INCI
- cosmetic ingredient CAS sourcing
- cosmetic active ingredient supplier
- botanical extract sourcing
- cosmetic surfactant supplier
- cosmetic ingredient samples and COA
- TDS SDS cosmetic raw materials
- low MOQ cosmetic ingredient sourcing

Use these themes naturally. Avoid unsupported claims about certifications, clinical results, origin, sustainability, market approval, lowest pricing or guaranteed delivery.

## Route Intent

| Route | Search intent | Primary conversion |
| --- | --- | --- |
| `/` | Cosmetic ingredient sourcing | Submit any catalog or non-catalog material request |
| `/products` | Browse featured cosmetic ingredients | Open a material / request an unlisted ingredient |
| `/products/:id` | Evaluate an ingredient and grade | Request documents, quote or sample |
| `/contact` | Source any cosmetic raw material | Submit material identity and technical requirements |
| `/about` | Ingredient sourcing partner qualification | Discuss a sourcing brief |
| `/services/ingredient-sourcing` | Catalog and non-catalog ingredient sourcing | Share material and grade requirements |
| `/services/skin-ritual` | Cosmetic formulation support | Review formula requirements |
| `/services/quality-and-care` | Raw-material quality and documentation | Request technical details |
| `/news-blog/` | Ingredient and sourcing education | Read resource / contact team |
| `/faq` | Commercial qualification | Resolve questions / contact team |

Account, admin, RFQ and internal support routes remain `noindex`.

## Metadata and Structured Data

- Keep titles buyer-oriented and generally below 60 characters.
- Keep descriptions useful and generally between 140–160 characters.
- Use `Aurelia Pretty` as the site and Organization name.
- The canonical origin defaults to `https://www.aureliapretty.com` and can be overridden with `VITE_SITE_URL` / `SITE_URL`.
- Give every public product and article a unique canonical URL.
- Product schema uses `BusinessAudience` and additional properties for format, MOQ and lead time.
- Do not publish `Offer`, unit price, public availability or inventory until real commercial terms exist.
- Build FAQ schema only from published FAQs and Article schema from published editorial content.

## Content Program

Priority clusters:

1. Ingredient identification: trade names, INCI, CAS numbers, functions and grade differences.
2. Grade selection: assay, carrier, origin, physical form, solubility and process fit.
3. Technical documentation: specification, TDS, SDS, COA, composition and origin records.
4. Sampling and qualification: sample planning, formula evaluation and supplier approval.
5. Commercial sourcing: MOQ, pack size, lead-time factors, batch controls and logistics.

Every article should answer a real partner question, link to a relevant product or capability, and finish with a B2B CTA.

## Preferred Conversion Language

- Request Any Ingredient
- Submit a Sourcing Brief
- Request Grade Details & Samples
- Ask About an Unlisted Ingredient
- Talk to an Ingredient Sourcing Specialist

Avoid consumer language such as Add to Cart, Shop Now, Free Shipping, Easy Returns or public sale pricing.

## Launch Checklist

- Set production `VITE_SITE_URL` and `SITE_URL` values.
- Replace or approve all concept product images before commercial launch.
- Confirm INCI, identity, grade, specification, supplier documentation and market-specific restrictions.
- Confirm MOQ, lead times, pack formats, testing scope and logistics with operations.
- Connect inquiry notifications to the real partnership inbox or CRM.
- Add analytics and Search Console ownership after the production domain is available.
- Submit `sitemap.xml` and verify robots, canonicals, Open Graph and JSON-LD.
