import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, FlaskConical, Heart, Leaf, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { productSlug } from '../data/seoContent';

const promises = [
  [Leaf, 'Considered formulas', 'Purposeful ingredients chosen for performance, comfort and sensorial pleasure.'],
  [FlaskConical, 'Modern standards', 'Vegan formulas, responsible partners and clear ingredient communication.'],
  [Heart, 'Made for real rituals', 'Intuitive textures and edited color designed to fit naturally into your day.'],
  [Droplets, 'Skin-first beauty', 'Every formula begins with barrier comfort and a healthy-looking finish.'],
];

export default function HomePage() {
  const { state } = useStore();
  const featured = state.products.slice(0, 6);
  return <div className="min-h-screen bg-[#fbf7f2] pt-24">
    <section className="relative min-h-[720px] overflow-hidden bg-[#ead9ce]">
      <img src="/beauty/hero-aurelia.png" alt="Aurelia Beauty skincare and makeup collection" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef]/95 via-[#fbf6ef]/72 to-transparent" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 sm:px-8">
        <div className="max-w-xl py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.28em] text-[#a05247]">New season · The luminous edit</p>
          <h1 className="font-heading text-5xl font-medium leading-[1.02] text-[#2d201d] sm:text-7xl">Beauty that feels<br/><span className="font-serif italic text-[#a05247]">like you.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#65524d]">Skin-first formulas, effortless color and intimate scent—thoughtfully made to bring a little more glow to every day.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-[#2d201d] px-7 py-4 font-semibold text-white transition hover:bg-[#a05247]">Shop the collection <ArrowRight size={18}/></Link>
            <Link to="/about" className="rounded-full border border-[#2d201d]/20 bg-white/65 px-7 py-4 font-semibold text-[#2d201d] backdrop-blur">Discover our story</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#74615b]"><span>Vegan formulas</span><span>Skin-loving actives</span><span>Thoughtful packaging</span></div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#2d201d]/8 bg-[#2d201d] text-white"><div className="mx-auto grid max-w-7xl gap-px md:grid-cols-4">{promises.map(([Icon,title,desc])=><div key={title} className="flex gap-4 border-white/10 p-7 md:border-r"><Icon className="shrink-0 text-[#eeb8a8]"/><div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm leading-6 text-white/60">{desc}</p></div></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#a05247]">The Aurelia edit</p><h2 className="mt-3 font-heading text-4xl font-medium text-[#2d201d] sm:text-5xl">Small rituals. Visible radiance.</h2><p className="mt-4 max-w-2xl leading-7 text-[#74615b]">An edited wardrobe of skincare, color and scent, made to layer beautifully and live effortlessly.</p></div><Link to="/products" className="inline-flex items-center gap-2 font-semibold text-[#7d3f38]">Shop all beauty <ArrowRight size={17}/></Link></div>
      <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product,index)=><Link key={product.id} to={`/products/${productSlug(product)}`} className="group"><div className="relative overflow-hidden rounded-[2rem] bg-[#eadfd8]"><img src={product.image} alt={product.name} className={`aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 ${index%3===1?'object-[58%_center]':index%3===2?'object-[78%_center]':'object-[25%_center]'}`}/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8d4940] backdrop-blur">{product.badge}</span></div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="font-heading text-xl font-medium text-[#2d201d]">{product.name}</h3><p className="mt-1 text-sm text-[#7a6963]">{product.wash}</p></div><span className="font-semibold text-[#2d201d]">${product.price}</span></div></Link>)}</div>
    </section>

    <section className="bg-[#efe2da] py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2"><div className="overflow-hidden rounded-[2.5rem]"><img src="/beauty/skincare-ritual.png" alt="Aurelia skincare ritual" className="aspect-[4/5] w-full object-cover"/></div><div className="lg:pl-10"><Sparkles className="text-[#a05247]" size={30}/><p className="mt-6 text-xs font-bold uppercase tracking-[.24em] text-[#a05247]">Your skin, only brighter</p><h2 className="mt-3 font-heading text-4xl font-medium leading-tight text-[#2d201d] sm:text-5xl">Build a ritual around what your skin needs today.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#6e5b55]">Hydrate, strengthen and illuminate with flexible layers that feel as beautiful as they look. Start with three essentials or make the ritual entirely your own.</p><Link to="/services/fit-and-size-guide" className="mt-8 inline-flex items-center gap-2 border-b border-[#2d201d] pb-1 font-semibold">Explore the skin ritual <ArrowRight size={17}/></Link></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="grid overflow-hidden rounded-[2.5rem] bg-[#a8564b] text-white lg:grid-cols-[1.2fr_.8fr]"><div className="p-9 sm:p-14"><p className="text-xs font-bold uppercase tracking-[.24em] text-[#ffd9cf]">For beauty retailers & creators</p><h2 className="mt-4 font-heading text-4xl font-medium">Bring Aurelia into your world.</h2><p className="mt-5 max-w-xl leading-7 text-white/80">Discover wholesale, curated gifting and private-label development for thoughtful beauty businesses.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#7c3c35]">Start a conversation <ArrowRight size={17}/></Link></div><div className="grid grid-cols-2 gap-px bg-white/15 p-px">{[['Vegan','Core formulas'],['500 units','Typical MOQ'],['30–50 days','Production'],['Global','Partnerships']].map(([v,l])=><div key={l} className="flex flex-col justify-center bg-[#9b4c43] p-7"><strong className="font-heading text-2xl font-medium">{v}</strong><span className="mt-1 text-sm text-white/70">{l}</span></div>)}</div></div></section>
  </div>;
}
