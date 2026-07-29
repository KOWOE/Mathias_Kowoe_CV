import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'EPF Recensement',
      type: 'Projet Personnel',
      description: 'Application de recensement complète que j\'ai créée pour la gestion et le suivi des données de population. Interface moderne, performante et responsive.',
      url: 'https://epf-recencement.vercel.app/',
      tags: ['React', 'Next.js', 'Vercel', 'Full-Stack'],
    },
    {
      name: 'Resto SaaS',
      type: 'Projet Personnel',
      description: 'Plateforme SaaS dédiée à la restauration. J\'ai conçu et développé l\'intégralité de ce projet de bout en bout pour offrir une solution complète.',
      url: 'https://resto-saas-roan.vercel.app/',
      tags: ['SaaS', 'Web App', 'React', 'Full-Stack'],
    },
    {
      name: 'Re-Tab',
      type: 'Consulting & Réalisation',
      description: 'Application innovante développée avec succès. J\'ai participé à sa réalisation et suis intervenu en tant que consultant technique pour l\'optimisation.',
      url: 'https://re-tab.vercel.app/',
      tags: ['SaaS', 'Consulting', 'Web App', 'Innovation'],
    },
    {
      name: 'Africa LMS',
      type: 'Projet Client',
      description: 'Plateforme e-learning (Learning Management System) conçue sur mesure pour répondre aux besoins éducatifs en Afrique. Interface intuitive et gestion de cours avancée.',
      url: 'https://africa-lms-projets.vercel.app/',
      tags: ['E-learning', 'LMS', 'Web App', 'Éducation'],
    },
    {
      name: 'Portfolio Personnel',
      type: 'Projet Personnel',
      description: 'Ancienne version de mon portfolio interactif en ligne. Une vitrine de mon parcours, de mes compétences et de mes réalisations.',
      url: 'https://mon-cv-self.vercel.app/',
      tags: ['React', 'Portfolio', 'Vercel', 'UI/UX'],
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-center">Projets</h2>
      <p className="text-center text-[var(--text-muted)] mb-12 md:mb-16 text-lg font-light">Les produits que j'ai réalisés</p>
      
      {/* Conteneur principal full-bleed (prend toute la largeur de l'écran) */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden py-4 group/marquee">
        
        {/* Effet de fondu sur les bords gauche et droit */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-20 pointer-events-none"></div>
        
        {/* Conteneur animé (Marquee) - Aucun padding pour que la boucle soit parfaite */}
        <div className="animate-marquee group-hover/marquee:[animation-play-state:paused] flex gap-6 lg:gap-8">
          
          {/* On duplique le tableau des projets pour créer l'illusion d'une boucle infinie */}
          {[...projects, ...projects].map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-card flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[450px] flex flex-col bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-[2rem] backdrop-blur-sm hover:border-accent/80 hover:bg-[var(--bg-card-hover)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,97,255,0.2)] transition-all duration-500 relative overflow-hidden h-full group/card"
            >
              {/* Glow gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(123,97,255,0.6)] group-hover/card:scale-150 group-hover/card:shadow-[0_0_20px_rgba(123,97,255,0.8)] transition-all duration-300"></div>
                    <span className="text-xs font-mono text-accent uppercase tracking-[0.1em] font-medium">{project.type}</span>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 flex items-center justify-center text-[var(--text-main)] group-hover/card:bg-accent group-hover/card:text-white group-hover/card:border-accent group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500 shadow-sm">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-4 group-hover/card:text-accent transition-colors duration-300">{project.name}</h3>
                <p className="text-base text-[var(--text-muted)] leading-relaxed font-light mb-8 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border-card)] text-[var(--text-main)] text-xs font-medium group-hover/card:border-accent/40 group-hover/card:text-accent transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
