export default function Skills() {
  const skills = [
    { name: 'Design Graphique', tools: ['Photoshop', 'Illustrator', 'Figma', 'UX Design'], since: 'Depuis 2022', level: 88 },
    { name: 'Développeur Web', tools: ['HTML/CSS', 'JavaScript', 'React', 'WordPress', 'WinDev'], since: 'Depuis 2022', level: 83 },
    { name: 'Vibe Coding', tools: ['React', 'Next.js', 'GSAP', 'Tailwind'], since: 'Depuis 2025', level: 78 },
    { name: 'Montage Vidéo', tools: ['CapCut', 'Premiere Pro', 'Filmora', 'Clipping'], since: 'Depuis 2023', level: 85 },
    { name: 'Création Visuelle', tools: ['Logos', 'Flyers', 'Maquettes', 'Cartes de visite'], since: 'Depuis 2022', level: 92 },
    { name: 'YouTuber', tools: ['Création de contenu', 'Montage vidéo', 'Scripting', 'Miniatures'], since: 'Depuis 2023', level: 80 },
    { name: 'Community Mgt', tools: ['Stratégie contenu', 'Social Media', 'Croissance'], since: 'Depuis 2023', level: 85 },
    { name: 'Formateur', tools: ['Bureautique', 'Graphisme', 'Photoshop', 'Illustrator', 'Figma'], since: 'Depuis 2023', level: 90 },
    { name: 'TikTok Monétisé', tools: ['Création de comptes', 'Monétisation', 'Stratégie TikTok'], since: 'Depuis 2024', level: 82 },
    { name: 'Media Buying', tools: ['Publicité en ligne', 'Facebook Ads', 'Formation'], since: 'Depuis 2024', level: 78 },
    { name: 'Admin Réseau & Sécurité', tools: ['Administration', 'Réseaux', 'Sécurité Informatique'], since: 'Depuis 2022', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Expertise</h2>
        <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl mx-auto">
          Les outils et compétences que je maîtrise pour donner vie à vos projets
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card group bg-[var(--bg-card)] border border-[var(--border-card)] p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-sm hover:border-accent/50 hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(123,97,255,0.15)] transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="font-bold text-xl text-[var(--text-main)] group-hover:text-accent transition-colors duration-300">{skill.name}</h4>
                <span className="text-xs font-mono text-[var(--text-muted)] mt-1 block">{skill.since}</span>
              </div>
              <span className="font-mono text-2xl font-bold text-[var(--text-muted-more)] group-hover:text-accent/50 transition-colors duration-300">{skill.level}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="h-1.5 bg-[var(--text-main)]/5 rounded-full mb-6 overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-purple-400 rounded-full transition-all duration-1000 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ width: `${skill.level}%` }}
              />
              <div 
                className="absolute top-0 left-0 h-full bg-accent/30 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            
            {/* Tool tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)] text-xs font-medium border border-[var(--text-main)]/10 group-hover:border-accent/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="mt-24 text-center">
        <p className="text-sm font-mono text-[var(--text-muted)]/70 mb-8 uppercase tracking-[0.2em]">Soft Skills</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Créativité', 'Travail en équipe', 'Adaptabilité', 'Curiosité', 'Gestion sous pression'].map((soft, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] text-sm font-medium text-[var(--text-main)] hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(123,97,255,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default">
              {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
