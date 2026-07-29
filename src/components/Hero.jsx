import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-4 text-center relative">
      {/* Glow effect behind profile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none hero-el"></div>
      
      <h1 className="hero-el text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter drop-shadow-2xl text-[var(--text-main)] relative">
        Mathias <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">KOWOE</span>
      </h1>
      
      <h2 className="hero-el text-base sm:text-lg md:text-2xl font-serif italic text-[var(--text-muted)] mb-6 font-light flex flex-wrap justify-center gap-x-3 gap-y-1">
        <span>Entrepreneur</span>
        <span className="text-accent/50">·</span>
        <span>Développeur</span>
        <span className="text-accent/50">·</span>
        <span>Créatif</span>
        <span className="text-accent/50">·</span>
        <span>Monteur Vidéo</span>
        <span className="text-accent/50">·</span>
        <span>Formateur</span>
        <span className="text-accent/50">·</span>
        <span>Media Buyer</span>
      </h2>
      
      <div className="hero-el flex flex-wrap justify-center items-center gap-4 text-sm font-mono text-[var(--text-muted-more)] mb-12">
        <span>[3+ ans d'expérience]</span>
        <span className="hidden md:inline">|</span>
        <span>[Freelance]</span>
        <span className="hidden md:inline">|</span>
        <span>[Cotonou, Bénin]</span>
      </div>
      
      <div className="hero-el flex flex-col sm:flex-row gap-4 relative z-10">
        <a href="/CV_Mathias_KOWOE.pdf" download className="magnetic-btn group bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(123,97,255,0.4)] relative overflow-hidden">
          <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 flex items-center gap-2">
            <Download size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            Télécharger CV
          </span>
        </a>
        <a href="#contact" className="magnetic-btn bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[var(--text-main)]/5 hover:border-accent transition-colors">
          Me contacter
        </a>
      </div>
    </section>
  );
}
