import { useState } from 'preact/hooks';
import { portfolioProjects, portfolioFilters } from '../data/portfolio';
import { quotes } from '../data/quotes';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const portfolioRef = useScrollAnimation('animate-fade-in-left');
  const quote = quotes[2]; // Using the portfolio quote

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    
    if (filterId === 'all') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === filterId));
    }
  };

  const PortfolioItem = ({ project }: { project: typeof portfolioProjects[0] }) => (
    <figure className={`portfolio-item one-four ${project.category} isotope-item effect-oscar`}>
      <a href={project.href} className="fancybox">
        <div className="portfolio_img">
          <img src={project.imageUrl} alt={project.title} />
        </div>
        <figcaption>
          <div>
            <h2><span>{project.title}</span></h2>
            <p>{project.description}</p>
          </div>
        </figcaption>
      </a>
    </figure>
  );

  return (
    <section id="Portfolio" className="content">
      <div className="container portfolio_title">
        <div ref={portfolioRef} className="section-title">
          <h2>Projects</h2>
          <h6>"{quote.text}" — {quote.author}</h6>
        </div>
      </div>

      <div className="portfolio-top"></div>

      <div className="portfolio">
        <div id="filters" className="sixteen columns">
          <ul className="clearfix">
            {portfolioFilters.map((filter) => (
              <li key={filter.id}>
                <a
                  href="#"
                  data-filter={filter.cssClass}
                  className={activeFilter === filter.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilterClick(filter.id);
                  }}
                >
                  <h5>{filter.label}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="isotope fadeInLeft animated grid" id="portfolio_wrapper">
          {filteredProjects.map((project, index) => (
            <PortfolioItem key={index} project={project} />
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