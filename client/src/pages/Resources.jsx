import { ArrowRight, Download, FileCheck2, FileText, GitCompareArrows } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Ingredient Sourcing Brief',
    description: 'Organize the material identity, grade, application, quantity, destination and document requirements before supplier outreach.',
    href: '/resources/ingredient-sourcing-brief.md',
    Icon: FileText,
  },
  {
    title: 'Supplier Document Review Checklist',
    description: 'Check whether specifications, TDS, SDS, COA and declarations refer to the same manufacturer, site and exact grade.',
    href: '/resources/supplier-document-review-checklist.md',
    Icon: FileCheck2,
  },
  {
    title: 'Sample-to-Batch Traceability Record',
    description: 'Connect an approved sample and COA with the proposed commercial grade, batch checks and change-control expectations.',
    href: '/resources/sample-to-batch-traceability-record.md',
    Icon: GitCompareArrows,
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#faf8f3] pt-24 text-[#173638]">
      <section className="bg-gradient-to-br from-[#e5f2f0] via-[#f8f2e8] to-[#edf3e9] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7f80]">Practical sourcing resources</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-heading text-5xl font-medium sm:text-6xl">Prepare a clearer ingredient requirement.</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#566b69]">
          Download editable working templates for cosmetic-ingredient sourcing, document review and sample-to-batch traceability. No comment, follow or email submission is required.
        </p>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {resources.map(({ title, description, href, Icon }) => (
            <article key={title} className="flex flex-col rounded-[2rem] border border-[#173638]/10 bg-white p-7 shadow-sm">
              <Icon className="text-[#2f7f80]" size={30} />
              <h2 className="mt-6 font-heading text-2xl font-bold">{title}</h2>
              <p className="mt-3 flex-1 leading-7 text-[#607279]">{description}</p>
              <a
                href={href}
                download
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#173638] px-5 py-3 font-semibold text-white"
              >
                <Download size={17} /> Download template
              </a>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-[2rem] bg-[#234b4c] p-8 text-white sm:flex sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-heading text-3xl">Already have a defined requirement?</h2>
            <p className="mt-2 max-w-2xl leading-7 text-white/70">Share the name, INCI, CAS number, grade or specification for sourcing review through China’s cosmetic ingredient supply chain.</p>
          </div>
          <Link to="/contact" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#173638] sm:ml-8 sm:mt-0">
            Submit a sourcing request <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </div>
  );
}
