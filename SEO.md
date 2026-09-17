# Curva Denim B2B SEO Strategy

## Positioning

Curva Denim is a B2B plus-size women's denim supply partner for U.S. retailers, boutiques, specialty stores and private-label buyers. Public search pages should attract qualified wholesale buyers and move them toward a line-sheet, sample or quotation request—not a consumer checkout.

## Primary Search Themes

- plus size denim wholesale
- plus size jeans wholesale USA
- wholesale plus size clothing for boutiques
- plus size denim supplier
- women's plus size jeans supplier
- private label plus size jeans
- inclusive size denim wholesale
- plus size jeans manufacturer
- wholesale curvy jeans
- plus size denim vendor for retailers

The product architecture is a ten-style opening capsule: five jeans (straight, wide-leg, flare, slim bootcut and barrel), three denim skirts (A-line midi, straight maxi and stretch pencil), and two coordinated denim jackets (full-length and cropped). Product, collection and editorial copy should reinforce this focused assortment rather than imply a broad dress or fashion catalog.

Use these phrases naturally. Avoid unsupported claims such as “lowest price,” “made in USA,” guaranteed delivery dates or certifications that have not been verified.

## Route Intent

| Route | Search intent | Primary conversion |
| --- | --- | --- |
| `/` | B2B supplier discovery | Request line sheet |
| `/products` | Review the 10-style opening capsule | Open product / request assortment |
| `/products/:id` | Evaluate a style program | Request quote and sample |
| `/contact` | Contact a wholesale supplier | Submit buyer inquiry |
| `/about` | Supplier qualification | Start wholesale conversation |
| `/services/wholesale-private-label` | Private-label sourcing | Discuss program requirements |
| `/services/fit-grading` | Inclusive grading capability | Request size-curve discussion |
| `/services/quality-assurance` | QC and order controls | Request production details |
| `/news-blog/` | Buyer education | Read resource / request line sheet |
| `/faq` | Commercial qualification | Resolve objection / contact sales |

Account, admin, RFQ workspace and internal support routes must remain `noindex`.

## Metadata Rules

- Keep titles specific, buyer-oriented and generally below 60 characters.
- Keep descriptions useful and generally between 140–160 characters.
- Use `Curva Denim Wholesale` as the Open Graph site name.
- Production canonical origin defaults to `https://www.curvadenim.com` and can be overridden with `VITE_SITE_URL` / `SITE_URL`.
- Each public product and resource receives a unique canonical URL.
- Product metadata must describe a wholesale program. Do not expose a fabricated public unit price.

## Structured Data

- Site-level entity: `Organization` named `Curva Denim Wholesale`, with `areaServed` set to the United States and the wholesale contact point.
- Product pages: `Product` with a `BusinessAudience`, plus additional properties for size range and MOQ.
- Product pages intentionally omit `Offer`, `price`, `priceCurrency` and public availability until real commercial terms are supplied.
- FAQ page: `FAQPage` built only from published FAQs.
- Buyer resources: `Article` with published and modified dates.

## Content Program

Priority editorial clusters:

1. Assortment planning: opening size curves, wash balance, silhouettes and price architecture.
2. Fit and grading: fit approval, measurement reviews, sample comments and inclusive grading.
3. Private label: tech packs, trims, labels, packaging, compliance inputs and pre-production approval.
4. Production readiness: MOQ planning, lead-time factors, inspection milestones and shipping handoff.

Every article should answer a buyer question, link to a relevant capability or collection page and finish with a wholesale CTA.

## Conversion Language

Preferred CTAs:

- Request Line Sheet
- Request Quote & Sample
- Build RFQ Assortment
- Discuss Your Program
- Talk to Wholesale Sales

Avoid DTC language such as Add to Cart, Shop Now, Free Shipping, Easy Returns or public sale pricing.

## Launch Checklist

- Set the production `VITE_SITE_URL` and `SITE_URL` values.
- Replace demo product imagery and copy only with assets approved for commercial use.
- Connect inquiry notifications to the real wholesale inbox or CRM.
- Confirm MOQ, lead-time, size-curve and compliance statements with operations before launch.
- Add Search Console and analytics ownership after the production domain is available.
- Submit the generated `sitemap.xml` and verify `robots.txt`.
- Test canonical tags, Open Graph previews, JSON-LD and all public forms on the deployed origin.
