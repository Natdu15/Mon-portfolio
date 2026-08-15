import { ShieldCheck, MapPin, Mail } from 'lucide-react';
import { about, profile, } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-title">A propos de moi</p>
          <h2 className="section-heading">Qui je suis ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="md:col-span-2 space-y-4">
              {about.bio.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-lg">
                  {para}
                </p>
              ))}

              {/* Info row */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  {profile.email}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="glass-card p-5 text-center">
                    <div className="text-3xl font-bold text-accent font-mono">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
