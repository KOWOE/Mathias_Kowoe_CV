import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Download, Globe, MessageCircle, Menu, X, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const hour = new Date().getHours();
    return hour < 7 || hour >= 19; // Dark theme between 7 PM and 7 AM
  });

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-el',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      // About Animation
      gsap.fromTo('.about-el',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Experience Cards
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
            duration: 0.8,
            ease: 'power3.out'
          }
        );
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
      gsap.fromTo('.edu-card',
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#education',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Projects Animation
      gsap.fromTo('.project-card',
        { y: 30, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Hobbies Animation
      gsap.fromTo('.hobby-chip',
        { y: 20, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: '#hobbies',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.5)'
        }
      );

      // Contact Animation
      gsap.fromTo('.contact-card',
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)'
        }
      );
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

  const education = [
    { year: '2022 - 2024', degree: 'Diplôme en Génie Logiciel et réseaux', school: 'TCI - Bénin Formation' },
    { year: '2020 - 2022', degree: 'Baccalauréat (BAC)', school: 'Complexe scolaire La Manne des Princes' },
    { year: '2015 - 2019', degree: "Brevet d'études du Premier Cycle (BEPC)", school: 'Collège Saint Roger' }
  ];

  const projects = [
    {
      name: 'EPF Recensement',
      description: 'Application de recensement complète que j\'ai créée pour la gestion et le suivi des données de population. Interface moderne, performante et responsive.',
      url: 'https://epf-recencement.vercel.app/',
      tags: ['React', 'Next.js', 'Vercel', 'Full-Stack'],
    }
  ];

  const hobbies = [
    { name: 'Football', icon: '⚽' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Voyager', icon: '✈️' },
    { name: 'Musique', icon: '🎵' },
    { name: 'Trompette (Soprano, Alto)', icon: '🎺' },
    { name: 'Piano', icon: '🎹' },
    { name: 'Guitare', icon: '🎸' },
    { name: 'Batterie', icon: '🥁' },
    { name: 'Basse', icon: '🎸' },
    { name: 'Chant', icon: '🎤' },
    { name: 'Maître Choriste & Chorale', icon: '🎼' },
    { name: 'Lecture', icon: '📚' },
    { name: 'PlayStation', icon: '🎮' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative font-sans text-[var(--text-main)] transition-colors duration-500">
      {/* Background with abstract Unsplash image and heavy overlay */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: isDark 
            ? 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop")' 
            : 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2564&auto=format&fit=crop")' 
        }}
      >
        <div className="absolute inset-0 bg-primary/85 transition-colors duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary transition-all duration-1000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-4 md:gap-8 ${
        isScrolled || isMobileMenuOpen 
          ? 'glass-nav text-[var(--text-main)] shadow-lg' 
          : 'bg-transparent text-[var(--text-main)]/90'
      }`}>
        <button 
          className="md:hidden p-2 text-[var(--text-main)]/90 hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors interactive-link">À propos</a>
          <a href="#experience" className="hover:text-accent transition-colors interactive-link">Expérience</a>
          <a href="#skills" className="hover:text-accent transition-colors interactive-link">Compétences</a>
          <a href="#projects" className="hover:text-accent transition-colors interactive-link">Projets</a>
          <a href="#education" className="hover:text-accent transition-colors interactive-link">Formation</a>
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
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden text-[var(--text-main)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-2xl font-serif italic">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">À propos</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Expérience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Compétences</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Projets</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Formation</a>
          <a href="#hobbies" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Loisirs</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors transform hover:scale-110 duration-300">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-4 text-center relative">
        {/* Glow effect behind profile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none hero-el"></div>
        

        <h1 className="hero-el text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter drop-shadow-2xl text-[var(--text-main)]">
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
        
        <div className="hero-el flex flex-col sm:flex-row gap-4">
          <a href="/CV_Mathias_KOWOE.pdf" download className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(123,97,255,0.4)]">
            Télécharger CV
          </a>
          <a href="#contact" className="magnetic-btn bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[var(--text-main)]/5 transition-colors">
            Me contacter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative">
        <div className="md:w-1/3 md:sticky md:top-32 about-el">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-accent mb-8">À propos</h2>
          <div className="flex flex-wrap gap-3">
            {['Entrepreneur', 'Développeur Web', 'Graphiste', 'Monteur Vidéo', 'Formateur', 'Media Buyer', 'TikTok', 'YouTuber', 'Designer Pro'].map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--text-main)]/10 text-xs sm:text-sm font-mono text-[var(--text-muted)] hover:border-accent/50 hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)] transition-all cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(123,97,255,0.8)]"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="md:w-2/3 about-el flex flex-col gap-8 md:gap-10 mt-4 md:mt-0">
          <p className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light text-[var(--text-main)] tracking-tight">
            Jeune professionnel alliant <span className="text-accent font-serif italic">créativité</span>, maîtrise technique et vision digitale.
          </p>
          
          <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full"></div>
          
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-[var(--text-muted)] font-light">
            Je suis le partenaire stratégique qu'il vous faut pour concevoir, développer et propulser votre entreprise vers un niveau supérieur. <strong className="font-semibold text-[var(--text-main)]">Je ne vends pas des services — je vous offre des résultats.</strong>
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted-more)]">
            Designer UI/UX, développeur web, monteur vidéo et formateur depuis 2022, je transforme des idées en projets digitaux puissants et fonctionnels. Figma, Photoshop, Illustrator, CapCut, Premiere Pro, HTML, CSS, React, WordPress et vibe coding : j'ai tout l'arsenal. Création de comptes TikTok monétisés, media buying et formations professionnelles complètent mon expertise.
          </p>
          
          <div className="mt-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-9xl font-serif text-accent/10 pointer-events-none">"</div>
            <p className="text-xl sm:text-2xl lg:text-3xl leading-snug text-[var(--text-main)] font-serif italic relative z-10">
              « Je pense comme un designer, je code comme un développeur, je performe comme un professionnel. »
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
                
                <div className="w-full md:w-1/2 exp-card bg-[var(--bg-card)] border border-[var(--border-card)] p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-sm hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                  <div className="font-mono text-accent text-sm mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-1 text-[var(--text-main)]">{exp.title}</h3>
                  <div className="text-[var(--text-muted)]/80 mb-4">{exp.company}</div>
                  <p className="text-[var(--text-muted)] leading-relaxed">{exp.description}</p>
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
            <div key={index} className="skill-card group bg-[var(--bg-card)] border border-[var(--border-card)] p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-sm hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h4 className="font-bold text-lg text-[var(--text-main)]">{skill.name}</h4>
                  <span className="text-xs font-mono text-accent mt-1 block">{skill.since}</span>
                </div>
                <span className="font-mono text-2xl font-bold text-[var(--text-muted-more)]/45">{skill.level}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-[var(--text-muted-more)]/15 rounded-full mb-5 overflow-hidden">
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
          <p className="text-sm font-mono text-[var(--text-muted-more)]/70 mb-6 uppercase tracking-widest">Soft Skills</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Créativité', 'Travail en équipe', 'Adaptabilité', 'Curiosité', 'Gestion sous pression'].map((soft, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border border-[var(--text-main)]/10 text-sm font-medium text-[var(--text-muted)] hover:border-accent/40 hover:text-accent transition-colors cursor-default">
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
            <div key={index} className="edu-card bg-[var(--bg-card)] border border-[var(--border-card)] p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-card-hover)] transition-all duration-300">
              <div className="font-mono text-accent text-lg whitespace-nowrap">{edu.year}</div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-[var(--text-main)]">{edu.degree}</h3>
                <div className="text-[var(--text-muted)]">{edu.school}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-center">Projets</h2>
        <p className="text-center text-[var(--text-muted)] mb-12 md:mb-16 text-lg font-light">Les produits que j'ai créés</p>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-card group block bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-12 rounded-[2rem] backdrop-blur-sm hover:border-accent/50 hover:bg-[var(--bg-card-hover)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(123,97,255,0.6)]"></div>
                      <span className="text-xs font-mono text-accent uppercase tracking-widest">Projet Personnel</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-3 group-hover:text-accent transition-colors duration-300">{project.name}</h3>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">{project.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ExternalLink size={24} />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-center">Loisirs</h2>
        <p className="text-center text-[var(--text-muted)] mb-12 md:mb-16 text-lg font-light">Ce qui me passionne en dehors du travail</p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="hobby-chip group flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-[1.5rem] bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-sm hover:border-accent/40 hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">{hobby.icon}</span>
              <span className="font-semibold text-[var(--text-main)] text-sm md:text-base">{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="bg-accent text-white rounded-t-[3rem] md:rounded-t-[4rem] mt-12 md:mt-20 pt-16 md:pt-24 pb-8 md:pb-12 px-4 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-10 md:mb-16">Travaillons ensemble</h2>
          
          {/* Grille de Contact Premium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto px-4">
            <a 
              href="mailto:mathiaskowoeofficiel@gmail.com" 
              className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Mail size={28} />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">Email</span>
              <span className="font-semibold text-sm break-all max-w-full text-center">mathiaskowoeofficiel@gmail.com</span>
            </a>

            <a 
              href="https://wa.me/2290157307677" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <MessageCircle size={28} />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">WhatsApp</span>
              <span className="font-semibold text-sm">+229 01 57 30 76 77</span>
            </a>

            <a 
              href="tel:+2290158161026" 
              className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Phone size={28} />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">Téléphone</span>
              <span className="font-semibold text-sm">+229 01 58 16 10 26</span>
            </a>

            <a 
              href="https://mon-cv-self.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Globe size={28} />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">Site Web</span>
              <span className="font-semibold text-sm">mon-cv-self.vercel.app</span>
            </a>
          </div>
          
          <a 
            href="mailto:mathiaskowoeofficiel@gmail.com" 
            className="magnetic-btn inline-block bg-[var(--contact-btn-bg)] text-[var(--contact-btn-text)] hover:opacity-95 px-10 py-5 rounded-full font-bold text-lg shadow-xl mb-32 border border-white/10"
          >
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
