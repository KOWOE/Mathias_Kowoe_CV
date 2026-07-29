export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative">
      <div className="md:w-1/3 md:sticky md:top-32 about-el">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-accent mb-8">À propos</h2>
        <div className="flex flex-wrap gap-3">
          {['Entrepreneur', 'Développeur Web', 'Graphiste', 'Monteur Vidéo', 'Formateur', 'Media Buyer', 'TikTok', 'YouTuber', 'Designer Pro'].map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--text-main)]/10 text-xs sm:text-sm font-mono text-[var(--text-muted)] hover:border-accent/50 hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)] transition-all cursor-default hover:-translate-y-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(123,97,255,0.8)]"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="md:w-2/3 about-el flex flex-col gap-8 md:gap-10 mt-4 md:mt-0">
        <p className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light text-[var(--text-main)] tracking-tight">
          Jeune professionnel alliant <span className="text-accent font-serif italic relative inline-block group">
            créativité
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </span>, maîtrise technique et vision digitale.
        </p>
        
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full"></div>
        
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-[var(--text-muted)] font-light">
          Je suis le partenaire stratégique qu'il vous faut pour concevoir, développer et propulser votre entreprise vers un niveau supérieur. <strong className="font-semibold text-[var(--text-main)]">Je ne vends pas des services — je vous offre des résultats.</strong>
        </p>
        
        <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted-more)]">
          Designer UI/UX, développeur web, monteur vidéo et formateur depuis 2022, je transforme des idées en projets digitaux puissants et fonctionnels. Figma, Photoshop, Illustrator, CapCut, Premiere Pro, HTML, CSS, React, WordPress et vibe coding : j'ai tout l'arsenal. Création de comptes TikTok monétisés, media buying et formations professionnelles complètent mon expertise.
        </p>
        
        <div className="mt-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 relative overflow-hidden group hover:border-accent/40 transition-colors duration-500">
          <div className="absolute inset-0 bg-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <div className="absolute -top-10 -left-10 text-9xl font-serif text-accent/10 pointer-events-none group-hover:text-accent/20 transition-colors duration-500">"</div>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-snug text-[var(--text-main)] font-serif italic relative z-10">
            « Je pense comme un designer, je code comme un développeur, je performe comme un professionnel. »
          </p>
        </div>
      </div>
    </section>
  );
}
