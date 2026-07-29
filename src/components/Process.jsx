import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Idéation',
      description: 'Analyse de vos besoins et réflexion stratégique pour définir l\'axe du projet.',
      icon: <Lightbulb size={24} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Conception',
      description: 'Création de maquettes, design UI/UX et validation visuelle.',
      icon: <PenTool size={24} />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Développement',
      description: 'Intégration et programmation avec les meilleures technologies du marché.',
      icon: <Code size={24} />,
      color: 'from-accent to-purple-600'
    },
    {
      title: 'Lancement',
      description: 'Déploiement, tests finaux et mise en ligne du produit.',
      icon: <Rocket size={24} />,
      color: 'from-green-400 to-emerald-600'
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Mon Processus</h2>
        <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl mx-auto">
          Une méthode claire et éprouvée pour mener votre projet au succès
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="process-card group relative">
            {/* Ligne de connexion (Desktop) */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[var(--border-card-hover)] to-transparent z-0"></div>
            )}
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`text-[var(--text-main)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${step.color} transition-all duration-300`}>
                  {step.icon}
                </div>
              </div>
              
              <div className="font-mono text-accent text-sm font-bold mb-3 tracking-widest">ÉTAPE 0{index + 1}</div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed font-light">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
