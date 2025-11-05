import { Leaf, Shield, Ship, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Harbor Cozy Bed',
    price: 58,
    image:
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Regatta Harness',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Mariner Travel Tote',
    price: 64,
    image:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    id: 4,
    name: 'Skipper Feeding Set',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1541085388143-3c6b0b010024?q=80&w=1200&auto=format&fit=crop',
    badge: 'Eco',
  },
];

function FeaturePills() {
  return (
    <div id="features" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700">
        <Leaf className="h-4 w-4 text-emerald-600" /> Eco-friendly materials
      </div>
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700">
        <Shield className="h-4 w-4 text-blue-600" /> Durable & safe
      </div>
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700">
        <Ship className="h-4 w-4 text-cyan-600" /> Ocean-inspired design
      </div>
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700">
        <Star className="h-4 w-4 text-yellow-500" /> Loved by pet parents
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Featured Products</h2>
            <p className="mt-2 text-neutral-600">High-quality essentials for tiny adventurers.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-50">View all</a>
        </div>

        <FeaturePills />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{p.name}</h3>
                  <span className="text-xs rounded-full bg-neutral-900 text-white px-2 py-1">{p.badge}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-neutral-700">${p.price.toFixed(2)}</p>
                  <button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-neutral-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
