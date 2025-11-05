export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white font-semibold">Critter Sail</h3>
            <p className="mt-2 text-sm text-slate-400">Ocean‑inspired art, personalized for your space.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-slate-400">hello@crittersail.com</p>
            <p className="text-sm text-slate-400">Mon–Fri · 9am–5pm</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Help</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Care guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Newsletter</h4>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-md bg-slate-800 text-sm text-slate-200 placeholder-slate-500 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm font-medium hover:bg-sky-500">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Critter Sail. All rights reserved.</div>
      </div>
    </footer>
  );
}
