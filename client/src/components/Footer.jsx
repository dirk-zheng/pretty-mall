import { Link } from 'react-router-dom';
import { businessConfig } from '../config/business';

const socialChannels = [
  {
    name: 'Facebook',
    href: businessConfig.socialLinks.facebook,
    path: 'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.973h-1.513c-1.49 0-1.956.931-1.956 1.887v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z',
  },
  {
    name: 'LinkedIn',
    href: businessConfig.socialLinks.linkedin,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.289ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V8.997h3.564v11.455ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  },
  {
    name: 'Instagram',
    href: businessConfig.socialLinks.instagram,
    path: 'M12 2.162c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848s.013-3.583.07-4.849C2.381 3.924 3.896 2.38 7.151 2.232 8.417 2.174 8.796 2.162 12 2.162ZM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948C23.732 2.694 21.31.273 16.948.073 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z',
  },
];

function SocialIcon({ path }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d={path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#173638] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-heading text-3xl font-medium tracking-[.08em]">
              AURELIA <span className="text-xs font-bold tracking-[.2em] text-[#a7c6bd]">INGREDIENTS</span>
            </div>
            <p className="mt-5 max-w-lg leading-7 text-white/65">
              Sourcing support for featured and unlisted cosmetic raw materials for brands, formulation labs and manufacturers.
            </p>
            <div className="mt-6 text-sm leading-7 text-white/55">
              <p>{businessConfig.legalName}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${businessConfig.inquiriesEmail}`} className="text-[#a7c6bd] hover:underline">
                  {businessConfig.inquiriesEmail}
                </a>
              </p>
              <p>Any cosmetic ingredient · B2B sourcing</p>
            </div>
            <nav aria-label="Social media" className="mt-6 flex items-center gap-3">
              {socialChannels.map(({ name, href, path }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Aurelia Pretty on ${name}`}
                  title={name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#a7c6bd] hover:bg-[#a7c6bd] hover:text-[#173638] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a7c6bd]"
                >
                  <SocialIcon path={path} />
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link className="block" to="/products">Featured ingredients</Link>
              <Link className="block" to="/services/skin-ritual">Formulation support</Link>
              <Link className="block" to="/about">About us</Link>
              <Link className="block" to="/news-blog/">Ingredient insights</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Technical & sourcing</h3>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link className="block" to="/contact">Request any ingredient</Link>
              <Link className="block" to="/faq">FAQ</Link>
              <Link className="block" to="/privacy">Privacy</Link>
              <Link className="block" to="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 {businessConfig.legalName}. All rights reserved.</p>
          <p>Cosmetic ingredients · Technical clarity · B2B</p>
        </div>
      </div>
    </footer>
  );
}
