import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} glass-card p-6 group flex flex-col`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
          <project.icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-bg-600 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-bg-600 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 font-mono text-[10px] text-cyan-400 bg-cyan-400/10 rounded border border-cyan-400/20 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & description */}
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-bg-500/50">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 font-mono text-xs text-slate-400 bg-bg-600 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-1 font-mono text-xs text-accent hover:gap-2 transition-all"
      >
        View on GitHub
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-title">// Mes projets</p>
          <h2 className="section-heading">Ce que j'ai fait</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Une sélection de projets couvrant les outils de cybersécurité, l'analyse de données et le développement sécurisé.
            Chacun d'entre eux est open source. N'hésitez pas à explorer le code sur GitHub.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
