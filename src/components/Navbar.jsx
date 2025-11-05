import { ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900">
            <ShoppingBag className="h-6 w-6" />
            <span>Critter Sail</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="text-neutral-600 hover:text-neutral-900">Shop</a>
            <a href="#features" className="text-neutral-600 hover:text-neutral-900">Why Us</a>
            <a href="#about" className="text-neutral-600 hover:text-neutral-900">About</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a>
            <a href="#shop" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">Browse Products</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2 text-sm font-medium">
            <a href="#shop" className="block px-2 py-2 rounded hover:bg-neutral-100">Shop</a>
            <a href="#features" className="block px-2 py-2 rounded hover:bg-neutral-100">Why Us</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-neutral-100">About</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-neutral-100">Contact</a>
            <a href="#shop" className="block text-center px-4 py-2 rounded-full bg-neutral-900 text-white">Browse Products</a>
          </div>
        )}
      </div>
    </header>
  );
}
