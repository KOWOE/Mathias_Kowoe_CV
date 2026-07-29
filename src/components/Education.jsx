export default function Education() {
  const education = [
    { year: '2022 - 2024', degree: 'Diplôme en Génie Logiciel et réseaux', school: 'TCI - Bénin Formation' },
    { year: '2020 - 2022', degree: 'Baccalauréat (BAC)', school: 'Complexe scolaire La Manne des Princes' },
    { year: '2015 - 2019', degree: "Brevet d'études du Premier Cycle (BEPC)", school: 'Collège Saint Roger' }
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-12 md:mb-16 text-center">Formation</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="edu-card group bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-4 md:gap-10 hover:bg-[var(--bg-card-hover)] hover:border-accent/50 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            
            <div className="font-mono text-accent text-lg whitespace-nowrap min-w-[120px]">{edu.year}</div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--text-main)] group-hover:text-accent transition-colors duration-300">{edu.degree}</h3>
              <div className="text-[var(--text-muted)] text-lg font-light">{edu.school}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
