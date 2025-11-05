import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Blue Whale Canvas',
    desc: 'Gallery-wrapped, hand-detailed finish',
    price: '$189',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Dolphin Pod',
    desc: 'Vibrant motion with archival inks',
    price: '$149',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Reef Harmony',
    desc: 'Color‑rich coral scene on canvas',
    price: '$129',
    img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Humpback Breach',
    desc: 'Dramatic monochrome statement piece',
    price: '$209',
    img: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Ready‑made canvases</h2>
            <p className="mt-2 text-slate-600">Premium marine pieces in popular sizes, ready to hang.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-500">
            <Star className="h-5 w-5 fill-amber-400" />
            <span className="text-sm font-medium text-slate-700">5.0 customer rating</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl ring-1 ring-slate-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-slate-900 font-semibold">{p.price}</span>
                  <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1.5 text-xs font-semibold hover:bg-slate-800">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
