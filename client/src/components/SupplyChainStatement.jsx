import { Factory, FileSearch, Network } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const points = [
  [Factory, 'China manufacturing base', 'Connect requirements with relevant cosmetic ingredient manufacturers and supply options in China.'],
  [FileSearch, 'Grade and document review', 'Compare identity, specification, TDS, SDS, COA and other available supplier information.'],
  [Network, 'From brief to sample', 'Coordinate supplier questions, samples and commercial terms against the buyer’s actual requirements.'],
];

export default function SupplyChainStatement() {
  const { pathname } = useLocation();
  if (/^\/(admin|support|login|quote(?:-success)?)(\/|$)/.test(pathname)) return null;

  return (
    <section className="border-y border-[#173638]/10 bg-[#edf3ef] text-[#173638]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7f80]">China cosmetic ingredient supply chain</p>
          <h2 className="mt-3 font-heading text-3xl font-medium sm:text-4xl">Connecting buyer briefs with China’s manufacturing and supply chain.</h2>
          <p className="mt-4 leading-7 text-[#607279]">We help identify and review potential supply options for featured and unlisted cosmetic raw materials. Availability and suitability remain subject to the requested grade, supplier documents, samples, testing and destination-market requirements.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {points.map(([Icon, title, description]) => (
            <div key={title} className="rounded-2xl border border-[#173638]/10 bg-white/70 p-5">
              <Icon size={22} className="text-[#2f7f80]" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#607279]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
