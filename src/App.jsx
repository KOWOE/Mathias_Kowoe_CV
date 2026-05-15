import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Download, Globe, MessageCircle, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-el', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });

      // About Animation
      gsap.from('.about-el', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Experience Cards
      gsap.utils.toArray('.exp-card-anim').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Skills Animation
      gsap.fromTo('.skill-card',
        { y: 30, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }
      );

      // Education Animation
      gsap.from('.edu-card', {
        scrollTrigger: {
          trigger: '#education',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Contact Animation
      gsap.from('.contact-el', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

  const skills = [
    { name: 'Design Graphique', tools: ['Photoshop', 'Illustrator', 'Figma'], since: 'Depuis 2022', level: 88 },
    { name: 'Développeur Web', tools: ['HTML/CSS', 'JavaScript', 'React', 'WordPress', 'WinDev'], since: 'Depuis 2022', level: 83 },
    { name: 'Vibe Coding', tools: ['React', 'Next.js', 'GSAP', 'Tailwind'], since: 'Depuis 2025', level: 78 },
    { name: 'Création Visuelle', tools: ['Logos', 'Flyers', 'Maquettes', 'Cartes de visite'], since: 'Depuis 2022', level: 92 },
    { name: 'YouTuber', tools: ['Création de contenu', 'Montage vidéo', 'Scripting', 'Miniatures'], since: 'Depuis 2023', level: 80 },
    { name: 'Community Mgt', tools: ['Stratégie contenu', 'Social Media', 'Croissance'], since: 'Depuis 2023', level: 85 },
  ];

  const education = [
    { year: '2022 - 2024', degree: 'Diplôme en Génie Logiciel et réseaux', school: 'TCI - Bénin Formation' },
    { year: '2020 - 2022', degree: 'Baccalauréat (BAC)', school: 'Complexe scolaire La Manne des Princes' },
    { year: '2015 - 2019', degree: "Brevet d'études du Premier Cycle (BEPC)", school: 'Collège Saint Roger' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative font-sans text-textLight">
      {/* Background with abstract Unsplash image and heavy overlay */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-4 md:gap-8 ${isScrolled || isMobileMenuOpen ? 'glass-nav text-white' : 'bg-transparent text-white/90'}`}>
        <button 
          className="md:hidden p-2 text-white/90 hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors interactive-link">À propos</a>
          <a href="#experience" className="hover:text-accent transition-colors interactive-link">Expérience</a>
          <a href="#skills" className="hover:text-accent transition-colors interactive-link">Compétences</a>
          <a href="#contact" className="hover:text-accent transition-colors interactive-link">Contact</a>
        </div>
        <a 
          href="/CV_Mathias_KOWOE.pdf" 
          download
          className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold magnetic-btn flex items-center gap-2 whitespace-nowrap"
        >
          <Download size={16} /> <span className="hidden sm:inline">Télécharger</span> CV
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-2xl font-serif italic">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">À propos</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Expérience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Compétences</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Formation</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-4 text-center relative">
        {/* Glow effect behind profile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none hero-el"></div>
        

        <h1 className="hero-el text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter drop-shadow-2xl">
          Mathias <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">KOWOE</span>
        </h1>
        
        <h2 className="hero-el text-base sm:text-lg md:text-2xl font-serif italic text-white/70 mb-6 font-light flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>Entrepreneur</span>
          <span className="text-accent/50">·</span>
          <span>Développeur</span>
          <span className="text-accent/50">·</span>
          <span>Graphiste</span>
          <span className="text-accent/50">·</span>
          <span>Designer Pro</span>
          <span className="text-accent/50">·</span>
          <span>YouTuber</span>
        </h2>
        
        <div className="hero-el flex flex-wrap justify-center items-center gap-4 text-sm font-mono text-white/50 mb-12">
          <span>[3+ ans d'expérience]</span>
          <span className="hidden md:inline">|</span>
          <span>[Freelance]</span>
          <span className="hidden md:inline">|</span>
          <span>[Cotonou, Bénin]</span>
        </div>
        
        <div className="hero-el flex flex-col sm:flex-row gap-4">
          <a href="/CV_Mathias_KOWOE.pdf" download className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(123,97,255,0.4)]">
            Télécharger CV
          </a>
          <a href="#contact" className="magnetic-btn bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/5">
            Me contacter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start bg-white/5 border border-white/10 rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 backdrop-blur-sm">
          <div className="md:w-1/3 about-el">
            <h2 className="text-4xl md:text-5xl font-serif italic text-accent">À propos</h2>
            <div className="mt-6 flex flex-col gap-3">
              {['Entrepreneur', 'Développeur Web', 'Graphiste', 'Designer Pro', 'YouTuber'].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm font-mono text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block w-[1px] self-stretch bg-accent/20 about-el"></div>
          
          <div className="md:w-2/3 about-el">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Jeune professionnel polyvalent alliant créativité, maîtrise technique et vision digitale, je suis le partenaire stratégique qu'il vous faut pour concevoir, développer et propulser votre entreprise vers un niveau supérieur.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Je ne vends pas des services — je vous offre des résultats. Designer UI/UX, développeur web et créatif depuis 2022, je transforme des idées en projets digitaux puissants et fonctionnels. Figma, Photoshop, Illustrator, HTML, CSS, PHP, WordPress et vibe coding : j'ai tout l'arsenal. Un portfolio de clients satisfaits : j'ai la preuve. Votre projet mérite le meilleur — donnez-lui ce qu'il mérite.
            </p>
            <p className="mt-8 text-xl leading-snug text-accent font-serif italic border-l-2 border-accent/40 pl-5">
              « Je pense comme un designer, je code comme un développeur, je performe comme un professionnel. »
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-20 text-center">Expérience</h2>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} exp-card-anim`}>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent timeline-dot z-10"></div>
                
                <div className="w-full md:w-1/2"></div>
                
                <div className="w-full md:w-1/2 exp-card bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-sm">
                  <div className="font-mono text-accent text-sm mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-white/60 mb-4">{exp.company}</div>
                  <p className="text-white/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-16 text-center">Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card group bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h4 className="font-bold text-lg text-white">{skill.name}</h4>
                  <span className="text-xs font-mono text-accent mt-1 block">{skill.since}</span>
                </div>
                <span className="font-mono text-2xl font-bold text-white/20">{skill.level}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-white/10 rounded-full mb-5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              {/* Tool tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-16 text-center">
          <p className="text-sm font-mono text-white/30 mb-6 uppercase tracking-widest">Soft Skills</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Créativité', 'Travail en équipe', 'Adaptabilité', 'Curiosité', 'Gestion sous pression'].map((soft, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white/60 hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                {soft}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-16 text-center">Formation</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="edu-card bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-white/10 transition-colors">
              <div className="font-mono text-accent text-lg whitespace-nowrap">{edu.year}</div>
              <div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-white/60">{edu.school}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="bg-accent text-white rounded-t-[3rem] md:rounded-t-[4rem] mt-12 md:mt-20 pt-16 md:pt-24 pb-8 md:pb-12 px-4 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-10 md:mb-12">Travaillons ensemble</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:mathiaskowoeofficiel@gmail.com" className="contact-el flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white hover:-translate-y-2 transition-transform shadow-lg" title="Email">
              <Mail size={24} />
            </a>
            <a href="https://wa.me/2290157307677" target="_blank" rel="noreferrer" className="contact-el flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white hover:-translate-y-2 transition-transform shadow-lg" title="WhatsApp">
              <MessageCircle size={24} />
            </a>
            <a href="tel:+2290158161026" className="contact-el flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white hover:-translate-y-2 transition-transform shadow-lg" title="Appel téléphonique">
              <Phone size={24} />
            </a>
            <a href="https://mon-cv-self.vercel.app/" target="_blank" rel="noreferrer" className="contact-el flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white hover:-translate-y-2 transition-transform shadow-lg" title="Site Web">
              <Globe size={24} />
            </a>
          </div>
          
          <a href="mailto:mathiaskowoeofficiel@gmail.com" className="magnetic-btn inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl mb-32">
            Envoyer un message
          </a>
          
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8 text-sm font-mono opacity-80">
            <p>Mathias KOWOE © {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Disponible pour de nouvelles opportunités
            </p>
            <p className="mt-4 md:mt-0">Fait avec le vibe coding</p>
          </div>
        </div>
      </section>
    </div>
  );
}
