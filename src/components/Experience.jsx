export default function Experience() {
  const experiences = [
    {
      period: 'Depuis 2023',
      title: 'COMMUNITY MANAGER',
      company: 'Freelance (Tous domaines)',
      description: 'Gestionnaire de compte et de pages. Stratégie de contenu, interaction et croissance de la communauté.'
    },
    {
      period: 'Depuis 2022',
      title: 'DÉVELOPPEUR WEB & WINDEV',
      company: 'Freelance',
      description: 'Création de sites web (WordPress, PHP, E-commerce) et applications de gestion desktop sous Windev.'
    },
    {
      period: '2014',
      title: 'PARTICIPANT',
      company: 'Water School',
      description: 'Formation intensive et participation aux projets de développement.'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-20 text-center">Expérience</h2>
      
      <div className="relative">
        {/* Timeline center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} exp-card-anim group`}>
              
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--bg-primary)] border-4 border-accent timeline-dot z-10 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(123,97,255,0.8)] transition-all duration-300"></div>
              
              <div className="w-full md:w-1/2"></div>
              
              <div className="w-full md:w-1/2 exp-card bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-3xl md:rounded-[2rem] backdrop-blur-md hover:border-accent/60 hover:bg-[var(--bg-card-hover)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="font-mono text-accent text-sm mb-3 tracking-widest uppercase">{exp.period}</div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--text-main)] group-hover:text-accent transition-colors duration-300">{exp.title}</h3>
                <div className="text-[var(--text-muted)]/80 mb-5 font-medium">{exp.company}</div>
                <p className="text-[var(--text-muted)] leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
