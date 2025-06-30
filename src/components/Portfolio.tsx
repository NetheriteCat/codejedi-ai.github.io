import { useState, useEffect } from 'preact/hooks';
import { portfolioProjects, portfolioFilters } from '../data/portfolio';
import { quotes } from '../data/quotes';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [isAnimating, setIsAnimating] = useState(false);
  const portfolioRef = useScrollAnimation('animate-fade-in-left');
  const quote = quotes[2]; // Using the portfolio quote

  const handleFilterClick = (filterId: string) => {
    if (filterId === activeFilter || isAnimating) return;
    
    setIsAnimating(true);
    setActiveFilter(filterId);
    
    // Add fade out effect
    const portfolioWrapper = document.getElementById('portfolio_wrapper');
    if (portfolioWrapper) {
      portfolioWrapper.style.opacity = '0.3';
      portfolioWrapper.style.transform = 'scale(0.95)';
    }
    
    setTimeout(() => {
      if (filterId === 'all') {
        setFilteredProjects(portfolioProjects);
      } else {
        setFilteredProjects(portfolioProjects.filter(project => project.category === filterId));
      }
      
      // Add fade in effect
      if (portfolioWrapper) {
        portfolioWrapper.style.opacity = '1';
        portfolioWrapper.style.transform = 'scale(1)';
      }
      
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const portfolioWrapper = document.getElementById('portfolio_wrapper');
    if (portfolioWrapper) {
      portfolioWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
  }, []);

  const PortfolioItem = ({ project, index }: { project: typeof portfolioProjects[0], index: number }) => (
    <div 
      className={`portfolio-item ${project.category} isotope-item effect-oscar`}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <figure>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <div className="portfolio_img">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/img/placeholder.jpg'; // Fallback image
              }}
            />
          </div>
          <figcaption>
            <div>
              <h2><span>{project.title}</span></h2>
              <p>{project.description}</p>
            </div>
          </figcaption>
        </a>
      </figure>
    </div>
  );

  return (
    <section id="Portfolio" className="content">
      <div className="container portfolio_title">
        <div ref={portfolioRef} className="section-title">
          <h2>Projects</h2>
          <h6>"{quote.text}" — {quote.author}</h6>
        </div>
      </div>

      <div className="portfolio">
        <div id="filters" className="sixteen columns">
          <ul className="clearfix">
            {portfolioFilters.map((filter) => (
              <li key={filter.id}>
                <button
                  type="button"
                  data-filter={filter.cssClass}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter.id)}
                  disabled={isAnimating}
                >
                  <h5>{filter.label}</h5>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid" id="portfolio_wrapper">
          {filteredProjects.map((project, index) => (
            <PortfolioItem key={`${project.category}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="portfolio_btm"></div>

      <div id="project_container">
        <div className="clear"></div>
        <div id="project_data"></div>
      </div>
    </section>
  );
};