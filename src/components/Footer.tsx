import { Terminal, Heart } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-500/50 py-12 bg-bg-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono text-white font-semibold">
            <Terminal className="w-5 h-5 text-accent" />
            <span className="text-accent">~/</span>
            <span>{profile.handle}</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-slate-500 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-bg-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600 flex items-center gap-1.5">
            Créer avec le <Heart className="w-3 h-3 text-danger" />. 
          </p>
        </div>
      </div>
    </footer>
  );
}
