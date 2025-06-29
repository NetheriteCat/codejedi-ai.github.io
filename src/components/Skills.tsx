import { skillsData } from '../data/skills';
import { quotes } from '../data/quotes';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills = () => {
  const skillsRef = useScrollAnimation('animate-fade-in-up');
  const quote = quotes[1]; // Using the skills quote

  return (
    <section id="skills">
      <div className="container">
        <div ref={skillsRef} className="text-center mb-4">
          <h2>Skills</h2>
          <h6>"{quote.text}" -- {quote.author}</h6>
        </div>
        <div className="skills_wrapper">
          <div className="row justify-content-center">
            {skillsData.map((skill, index) => (
              <div key={index} className="col-md-4 text-center">
                <div className="skills_icon delay-03s animate-zoom-in">
                  {skill.img ? (
                    <img src={skill.img} alt={skill.alt} className="mx-auto d-block" />
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="skills_block">
                  <h3 className="animate-fade-in-up">{skill.title}</h3>
                  <p className="animate-fade-in-down">{skill.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};