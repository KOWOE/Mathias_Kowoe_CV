import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Download } from 'lucide-react';

// Composants
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const hour = new Date().getHours();
    return hour < 7 || hour >= 19;
  });

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animations GSAP Globales
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Écran de chargement (stagger simple)
      gsap.fromTo('.hero-el',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.2
        }
      );

      // Animation standard pour les éléments de section
      const animateSection = (trigger, elements) => {
        gsap.fromTo(elements,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: trigger,
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out'
          }
        );
      };

      animateSection('#about', '.about-el');
      animateSection('#services', '.service-card');
      animateSection('#process', '.process-card');
      animateSection('#skills', '.skill-card');
      animateSection('#education', '.edu-card');
      animateSection('#projects', '.project-card');
      animateSection('#hobbies', '.hobby-chip');

      // Cartes Expérience (Alternées)
      gsap.utils.toArray('.exp-card-anim').forEach((card, i) => {
        gsap.fromTo(card,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out'
          }
        );
      });

      // Cartes de contact avec un effet "pop"
      gsap.fromTo('.contact-card',
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
          },
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.5)'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative font-sans text-[var(--text-main)] transition-colors duration-500 overflow-x-hidden selection:bg-accent/30 selection:text-accent">
      
      {/* Background avec Overlay */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center transition-all duration-1000 scale-105"
        style={{ 
          backgroundImage: isDark 
            ? 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop")' 
            : 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2564&auto=format&fit=crop")' 
        }}
      >
        <div className="absolute inset-0 bg-primary/85 transition-colors duration-1000 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary transition-all duration-1000"></div>
      </div>

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      {/* Navbar Premium */}
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-4 md:gap-8 ${
        isScrolled || isMobileMenuOpen 
          ? 'glass-nav text-[var(--text-main)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--border-card-hover)]' 
          : 'bg-transparent text-[var(--text-main)]/90 border border-transparent'
      }`}>
        <button 
          className="md:hidden p-2 text-[var(--text-main)] hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors relative group">
            À propos
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-accent transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#experience" className="hover:text-accent transition-colors relative group">
            Expérience
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-accent transition-colors relative group">
            Projets
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="hover:text-accent transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a 
            href="/facture"
            className="hidden lg:flex border-2 border-[var(--border-card-hover)] text-[var(--text-main)] hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(123,97,255,0.4)] px-4 py-2 rounded-full text-sm font-semibold items-center justify-center whitespace-nowrap transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Créer une facture
          </a>
          <a 
            href="/CV_Mathias_KOWOE.pdf" 
            download
            className="bg-[var(--text-main)] text-[var(--bg-primary)] hover:bg-accent hover:text-white hover:shadow-[0_0_15px_rgba(123,97,255,0.4)] px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Download size={16} /> <span className="hidden sm:inline">Télécharger</span> CV
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 md:hidden text-[var(--text-main)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-serif italic">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">À propos</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Services</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Processus</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Expérience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Compétences</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Projets</a>

          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Contact</a>
          
          <a 
            href="/facture"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 border-2 border-[var(--border-card-hover)] text-[var(--text-main)] hover:border-accent hover:text-accent px-8 py-3 rounded-full text-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            Créer une facture
          </a>
        </div>
      </div>

      <Hero />
      <About />
      <Services />
      <Process />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Hobbies />
      <Contact />
      
    </div>
  );
}
