import { skills, type Skill } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const categories = ['Securité', 'Data', 'Developpement', 'Outils'] as const;

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [level, setLevel] = useState(0);

  // Animate the bar width when visible
  if (visible && level !== skill.level) {
    setTimeout(() => setLevel(skill.level), 50);
  }

  return (
    <div
      ref={ref}
      className="glass-card p-5"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <skill.icon className="w-5 h-5 text-accent" />
          <span className="text-white font-medium text-sm">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-bg-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-600 to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-title">Mes compétences</p>
          <h2 className="section-heading">L'arsenal technique</h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs rounded-lg border transition-all ${
                  activeCategory === cat
                    ? 'bg-accent/10 border-accent/40 text-accent'
                    : 'border-bg-500 text-slate-500 hover:text-slate-300 hover:border-bg-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
