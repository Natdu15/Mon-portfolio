import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Check } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-title">Contact</p>
          <h2 className="section-heading">Travaillons ensemble</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: info */}
            <div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Que vous ayez une question, une idée de projet ou une opportunité dans le domaine de la cybersécurité ou de la data,
                ma boîte de réception est toujours ouverte. Discutons-en.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-700 border border-bg-500/50 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">{profile.email}</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-bg-700 border border-bg-500/50 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">{profile.location}</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-bg-700 border border-bg-500/50 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-1.5">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-bg-800 border border-bg-500/50 rounded-lg px-4 py-2.5 text-slate-200 font-mono text-sm focus:border-accent/40 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-bg-800 border border-bg-500/50 rounded-lg px-4 py-2.5 text-slate-200 font-mono text-sm focus:border-accent/40 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-bg-800 border border-bg-500/50 rounded-lg px-4 py-2.5 text-slate-200 font-mono text-sm focus:border-accent/40 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg-900 font-mono text-sm font-semibold rounded-lg hover:bg-accent-400 transition-all"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message envoyé
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
