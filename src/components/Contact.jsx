import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#09090B] text-white rounded-t-[3rem] md:rounded-t-[4rem] mt-12 md:mt-20 pt-20 md:pt-32 pb-8 md:pb-12 px-4 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif italic mb-12 md:mb-20 tracking-tight">
          Travaillons <span className="text-accent font-sans not-italic font-bold tracking-tighter">ensemble</span>
        </h2>
        
        {/* Grille de Contact Premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto px-4">
          <a 
            href="mailto:mathiaskowoeofficiel@gmail.com" 
            className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 text-white hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/5 hover:border-accent/50 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-inner">
              <Mail size={28} />
            </div>
            <span className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3">Email</span>
            <span className="font-semibold text-sm break-all max-w-full text-center">mathiaskowoeofficiel@gmail.com</span>
          </a>

          <a 
            href="https://wa.me/2290157307677" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 text-white hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/5 hover:border-[#25D366]/50 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#25D366] transition-all duration-500 shadow-inner">
              <MessageCircle size={28} />
            </div>
            <span className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3">WhatsApp</span>
            <span className="font-semibold text-sm">+229 01 57 30 76 77</span>
          </a>

          <a 
            href="tel:+2290158161026" 
            className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 text-white hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/5 hover:border-accent/50 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-inner">
              <Phone size={28} />
            </div>
            <span className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3">Téléphone</span>
            <span className="font-semibold text-sm">+229 01 58 16 10 26</span>
          </a>

          <a 
            href="https://mon-cv-self.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 text-white hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/5 hover:border-accent/50 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-inner">
              <Globe size={28} />
            </div>
            <span className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-3">Site Web</span>
            <span className="font-semibold text-sm">mon-cv-self.vercel.app</span>
          </a>
        </div>
        
        <a 
          href="mailto:mathiaskowoeofficiel@gmail.com" 
          className="magnetic-btn inline-flex items-center gap-4 bg-white text-[#09090B] hover:bg-accent hover:text-white hover:scale-105 px-12 py-6 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(123,97,255,0.4)] mb-32 transition-all duration-500 group"
        >
          Envoyer un message
          <div className="w-8 h-8 rounded-full bg-[#09090B]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <Mail size={16} />
          </div>
        </a>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 pb-4 text-sm font-mono text-white/40">
          <p>Mathias KOWOE © {new Date().getFullYear()}</p>
          <p className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Disponible pour de nouvelles opportunités
          </p>
          <p className="mt-4 md:mt-0">Fait avec le vibe coding</p>
        </div>
      </div>
    </section>
  );
}
