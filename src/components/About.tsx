import { useEffect, useState } from 'preact/hooks';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutRef = useScrollAnimation('animate-fade-in-left');
  
  const slides = [
    '/img/about1.jpg',
    '/img/about2.jpeg',
    '/img/about3.jpeg',
    '/img/about4.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="aboutUs">
      <div className="inner_wrapper aboutUs-container">
        <div className="container">
          <div className="inner_section">
            <div className="row">
              <div ref={aboutRef} className="col-lg-12 aboutUs-container">
                <div className="row">
                  <div className="col-md-9">
                    <h2>Who Am I</h2>
                    <h6>
                      "Let each person examine his own work, and then he can take pride in himself
                      alone, and not compare himself with someone else." -- Galatians 6:4
                    </h6>
                  </div>
                  <div className="col-md-2">
                    <img className="img-circle" src="/img/CodeJedi.png" width="100%" alt="CodeJedi" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inner_section">
            <div className="row">
              <div className="col-lg-12 about-us">
                <div className="row">
                  <div className="col-md-6">
                    <div className="slideshow-container">
                      {slides.map((slide, index) => (
                        <div 
                          key={index}
                          className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}
                          style={{ display: index === currentSlide ? 'block' : 'none' }}
                        >
                          <img className="img-responsive" src={slide} alt={`About ${index + 1}`} />
                        </div>
                      ))}
                      <button className="prev" onClick={prevSlide} aria-label="Previous slide">
                        &#10094;
                      </button>
                      <button className="next" onClick={nextSlide} aria-label="Next slide">
                        &#10095;
                      </button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                      {slides.map((_, index) => (
                        <button 
                          key={index}
                          className={`dot ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => goToSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3>Majoring in Honours Bachelor of Computer Science with AI Specialization
                      (2020-2025), University of Waterloo, Canada
                    </h3>
                    <p>
                      Embarking on the sacred path to AI mastery, my passion and curiosity guide me
                      through uncharted territories—exploring the vast realms of cloud computing,
                      neuroscience, computer vision, and the evolving art of AI, akin to a wise seeker
                      in the realm of knowledge.
                    </p>

                    <ul className="about-us-list">
                      <li className="points">
                        Programming languages: C, C++, C#, Java, R and Python
                      </li>
                      <li className="points">
                        Developer Tools: Pycharm, Eclipse, Jupyter Notebook, XCode, Visual studio,
                        VSCode, Code Blocks, Robot Framework
                      </li>
                      <li className="points">
                        Libraries: OpenCV, Tensorflow, PyTorch, Scikit-learn, Seaborn, Selenium,
                        Pandas, Numpy, MatplotLib, PyTorch, OpenAIGym, Nengo
                      </li>
                      <li className="points">
                        DevOps: CI/CD, GitHub, CodeCommit, CodePipeline, Jenkins, Ansible, Docker,
                        Kubernetes
                      </li>
                      <li className="points">
                        Database: PostgreSQL, MySQL, Aurora, MongoDB, DynamoDB
                      </li>
                      <li className="points">
                        Cloud: AWS, GCP
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};