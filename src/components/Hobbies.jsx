export default function Hobbies() {
  const hobbies = [
    { name: 'Football', icon: '⚽' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Voyager', icon: '✈️' },
    { name: 'Musique', icon: '🎵' },
    { name: 'Trompette', icon: '🎺' },
    { name: 'Piano', icon: '🎹' },
    { name: 'Guitare', icon: '🎸' },
    { name: 'Batterie', icon: '🥁' },
    { name: 'Basse', icon: '🎸' },
    { name: 'Chant', icon: '🎤' },
    { name: 'Chorale', icon: '🎼' },
    { name: 'Lecture', icon: '📚' },
    { name: 'PlayStation', icon: '🎮' },
  ];

  return (
    <section id="hobbies" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-center">Loisirs</h2>
      <p className="text-center text-[var(--text-muted)] mb-12 md:mb-20 text-lg font-light">Ce qui me passionne en dehors du travail</p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className="hobby-chip group flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-[1.5rem] bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-sm hover:border-accent/60 hover:bg-[var(--bg-card-hover)] hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(123,97,255,0.2)] transition-all duration-300 cursor-default"
          >
            <span className="text-2xl md:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{hobby.icon}</span>
            <span className="font-semibold text-[var(--text-main)] text-sm md:text-base group-hover:text-accent transition-colors">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
