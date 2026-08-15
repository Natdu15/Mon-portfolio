import { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-900/90 backdrop-blur-md border-b border-bg-500/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 font-mono text-white font-semibold text-lg group"
        >
          <Terminal className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          <span className="text-accent">~/</span>
          <span>{profile.handle}</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 font-mono text-sm text-slate-400 hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </button>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 font-mono text-sm border border-accent/40 text-accent rounded-lg hover:bg-accent/10 transition-all"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-800/95 backdrop-blur-md border-t border-bg-500/50 mt-3">
          <div className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 font-mono text-sm text-slate-400 hover:text-accent hover:bg-bg-700 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 font-mono text-sm text-accent border border-accent/40 rounded-lg text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
