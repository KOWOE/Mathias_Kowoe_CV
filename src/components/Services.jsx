import { Code2, PenTool, Video, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création de sites vitrines, e-commerce et applications web sur mesure avec React, Next.js et WordPress.',
      icon: <Code2 size={32} />,
      tags: ['React', 'Next.js', 'WordPress', 'E-commerce']
    },
    {
      title: 'Design UI/UX & Graphisme',
      description: 'Conception d\'interfaces utilisateurs intuitives et création de supports visuels (logos, flyers, maquettes).',
      icon: <PenTool size={32} />,
      tags: ['Figma', 'Photoshop', 'Illustrator', 'Branding']
    },
    {
      title: 'Montage Vidéo',
      description: 'Édition dynamique pour TikTok, YouTube et Instagram. Animations, effets visuels et sound design.',
      icon: <Video size={32} />,
      tags: ['Premiere Pro', 'CapCut', 'Shorts', 'Reels']
    },
    {
      title: 'Growth & Media Buying',
      description: 'Gestion de comptes sociaux, création de contenu viral, monétisation TikTok et campagnes publicitaires.',
      icon: <TrendingUp size={32} />,
      tags: ['Facebook Ads', 'TikTok', 'Community Mgt']
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Mes Services</h2>
        <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl mx-auto">
          Une expertise polyvalente pour répondre à tous vos besoins digitaux
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card group bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-[2rem] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-card-hover)] transition-all duration-500 relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">{service.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)] text-xs font-medium border border-[var(--text-main)]/10 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
