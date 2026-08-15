import { useEffect, useState } from 'react';
import { ChevronDown, Shield, ArrowRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

const terminalLines = [
  { text: '$ Qui suis-je', delay: 0 },
  { text: profile.name, delay: 600, type: 'output' },
  { text: '$ Mon rôle.txt', delay: 1400 },
  { text: profile.role, delay: 2000, type: 'output' },
  { text: '$ ./Connexion --status', delay: 2900 },
  { text: 'Connexion établie. Chiffrement : AES-256', delay: 3500, type: 'output' },
  { text: '$ echo "Bienvenue dans mon portfolio"', delay: 4500 },
  { text: 'Bienvenue dans mon portfolio', delay: 5100, type: 'output' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), terminalLines[i].delay));
    });
    const cursorTimer = setTimeout(() => setShowCursor(false), 6000);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(cursorTimer);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-scan" />
      </div>

      {/* Floating security icons */}
      <Shield className="absolute top-1/4 left-10 w-8 h-8 text-accent/10 animate-float hidden md:block" />
      <Shield className="absolute bottom-1/4 right-10 w-12 h-12 text-cyan-400/10 animate-float hidden md:block" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: intro */}
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent">Ouvert aux opportunités !</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl font-mono text-accent mb-4 neon-text">
            {profile.role}
          </p>
          <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 bg-accent text-bg-900 font-mono text-sm font-semibold rounded-lg hover:bg-accent-400 transition-all hover:scale-105"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-bg-500 text-slate-300 font-mono text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all"
            >
              Entrer en contact
            </button>
          </div>
        </div>

        {/* Right: terminal */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card overflow-hidden neon-border">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-800 border-b border-bg-500/50">
              <span className="w-3 h-3 rounded-full bg-danger/80" />
              <span className="w-3 h-3 rounded-full bg-warning/80" />
              <span className="w-3 h-3 rounded-full bg-accent/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">secure-shell — bash</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono text-sm min-h-[280px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={`mb-1.5 ${line.type === 'output' ? 'text-slate-400 pl-1' : 'text-accent'}`}
                >
                  {line.text}
                </div>
              ))}
              {showCursor && <span className="inline-block w-2 h-4 bg-accent animate-blink" />}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
