import { Paintbrush, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: Paintbrush,
    title: 'Personalized by artists',
    desc: 'Collaborate 1:1 to tailor names, colors, and details to your story.'
  },
  {
    icon: ShieldCheck,
    title: 'Archival quality',
    desc: 'Gallery-wrapped canvases with UV-resistant inks and solid wood frames.'
  },
  {
    icon: Truck,
    title: 'Fast, protected shipping',
    desc: 'Carefully packaged and tracked delivery worldwide.'
  }
];

export default function WhyUs() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why collectors choose us</h2>
          <p className="mt-2 text-slate-600">We combine fine‑art craft with durable materials designed to stand the test of time.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
              <Icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
