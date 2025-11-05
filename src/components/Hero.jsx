import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Eco-friendly • Pet-approved • Adventure-ready</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Cozy, durable gear for your small companions
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-xl">
              Thoughtfully crafted sailing-inspired accessories for small pets. Comfort-first materials, ocean-grade finishes, and playful colors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 font-semibold hover:bg-neutral-800">
                Shop bestsellers
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-neutral-50">
                Why Critter Sail
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-300 p-[2px]">
              <div className="h-full w-full rounded-3xl bg-white p-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1558944351-c0f9f06a0f3a?q=80&w=1200&auto=format&fit=crop"
                  alt="Small pet with cozy gear"
                  className="h-full w-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
