import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function QuoteSuccess() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const result = location.state || {};
  const reference = result.reference || searchParams.get('reference') || '';
  const createdAt = result.createdAt ? new Date(result.createdAt) : null;
  const validCreatedAt = createdAt && !Number.isNaN(createdAt.getTime());

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5f2f0] to-[#faf8f3] pt-24 text-[#173638]">
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <section className="overflow-hidden rounded-[2rem] border border-[#234b4c]/10 bg-white shadow-xl shadow-[#173638]/5">
          <div className="border-b border-[#173638]/10 bg-[#edf3ef] px-7 py-9 text-center sm:px-12">
            <CheckCircle2 className="mx-auto text-[#2f7f80]" size={58} strokeWidth={1.6} />
            <p className="mt-5 text-xs font-bold uppercase tracking-[.24em] text-[#2f7f80]">Request received</p>
            <h1 className="mt-3 font-heading text-4xl font-medium sm:text-5xl">Your sourcing brief is with our team.</h1>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#566b69]">
              We will review the selected ingredients, grade requirements, estimated quantity and delivery details before responding.
            </p>
          </div>

          <div className="px-7 py-8 sm:px-12 sm:py-10">
            {reference ? (
              <div className="rounded-2xl border border-[#2f7f80]/20 bg-[#faf8f3] p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#607279]">RFQ reference</p>
                <p className="mt-2 break-all font-mono text-xl font-bold text-[#173638]">{reference}</p>
                {validCreatedAt && (
                  <p className="mt-2 text-xs text-[#74817f]">
                    Submitted {createdAt.toLocaleString('en-US')}
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
                This confirmation was opened without an RFQ reference. Check your recent submission or contact our team if you need help locating it.
              </div>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#173638]/10 p-5">
                <strong className="block">1. Review</strong>
                <p className="mt-2 text-sm leading-6 text-[#65736f]">We check the requested grades, documents and quantities.</p>
              </div>
              <div className="rounded-2xl border border-[#173638]/10 p-5">
                <strong className="block">2. Clarify</strong>
                <p className="mt-2 text-sm leading-6 text-[#65736f]">A specialist may contact you to confirm technical details.</p>
              </div>
              <div className="rounded-2xl border border-[#173638]/10 p-5">
                <strong className="block">3. Respond</strong>
                <p className="mt-2 text-sm leading-6 text-[#65736f]">Availability, MOQ, documents and timing are confirmed formally.</p>
              </div>
            </div>

            <p className="mt-7 text-center text-sm leading-6 text-[#65736f]">
              Keep the reference above for future correspondence. Submission does not confirm price, stock, lead time or regulatory suitability.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173638] px-6 py-3.5 font-semibold text-white">
                Continue browsing <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#173638]/15 px-6 py-3.5 font-semibold">
                <Mail size={17} /> Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
