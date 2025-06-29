import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero = () => {
  const heroRef = useScrollAnimation('animate-zoom-in');

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutUs');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero_section" className="top_cont_outer">
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_section">
            <div className="row">
              <div className="col-md-12">
                <div ref={heroRef} className="top_left_cont">
                  <h2>
                    Hello, I am a CodeJedi<br />
                    <strong>I <i className="fa fa-heart"></i> Programming</strong>
                  </h2>
                  <div className="underline"></div>
                  <a href="#aboutUs" className="read_more2" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>
                    Who AM I
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};