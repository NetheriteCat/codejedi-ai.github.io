import { experienceItems } from '../data/experience';
import { quotes } from '../data/quotes';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
  const experienceRef = useScrollAnimation('animate-fade-in-up');
  const quote = quotes[0]; // Using the experience quote

  // Group experiences by year
  const groupedExperiences = experienceItems.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, typeof experienceItems>);

  const years = Object.keys(groupedExperiences).sort((a, b) => parseInt(b) - parseInt(a));

  const TimelineItem = ({ item, side }: { item: typeof experienceItems[0], side: 'left' | 'right' }) => (
    <div className={`${side === 'right' ? 'col-sm-offset-6' : ''} col-sm-6 timeline-item`}>
      <div className="row">
        <div className={`${side === 'right' ? 'col-sm-offset-1' : ''} col-sm-11`}>
          <div className={`timeline-panel ${side === 'right' ? 'debits' : 'credits'}`}>
            <ul className="timeline-panel-ul">
              <li><span className="importo">{item.title}</span></li>
              <li>
                <span className="causale">
                  <img src="/img/diamond.gif" alt="diamond" />
                  <a href={item.companyUrl}>{item.company} | {item.location}</a>
                </span>
              </li>
              <li><p><small className="text-muted">{item.period}</small></p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience" style={{ background: '#f2f2f2', padding: '30px 0' }}>
      <div className="container">
        <div ref={experienceRef} className="heading text-center" style={{ margin: '0 0 20px' }}>
          <h2>Work Experience</h2>
          <p>"{quote.text}" — {quote.author}</p>
        </div>
        <div id="timeline">
          {/* Timeline year image at top */}
          <div className="row timeline-movement timeline-movement-top">
            <div className="timeline-badge timeline-filter-movement">
              <img src="/img/year.png" style={{ margin: '0 0 80px', position: 'relative' }} alt="timeline" />
            </div>
          </div>

          {years.map((year) => {
            let side: 'left' | 'right' = 'left';
            return (
              <div key={year} className="row timeline-movement">
                <div className="timeline-badge">
                  <span className="timeline-balloon-date-day"></span>
                  <span className="timeline-balloon-date-month">{year}</span>
                </div>
                {groupedExperiences[year].map((experience, index) => {
                  const currentSide = side;
                  side = side === 'left' ? 'right' : 'left';
                  return <TimelineItem key={index} item={experience} side={currentSide} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};