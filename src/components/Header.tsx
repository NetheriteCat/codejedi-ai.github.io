import { useEffect, useState } from 'preact/hooks';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero_section');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero_section', 'aboutUs', 'skills', 'experience', 'Portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="header_wrapper" 
      className={isScrolled ? 'scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%'
      }}
    >
      <div className="container">
        <div className="header_box">
          <div className="logo">
            <a href="#"><img src="/img/logo.png" alt="logo" /></a>
          </div>
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button 
                type="button" 
                id="nav-toggle" 
                className="navbar-toggle" 
                data-toggle="collapse"
                data-target="#main-nav"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="main-nav" className="collapse navbar-collapse navStyle">
              <ul className="nav navbar-nav" id="mainNav">
                <li className={activeSection === 'hero_section' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero_section'); }}>
                    Home
                  </a>
                </li>
                <li className={activeSection === 'aboutUs' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('aboutUs'); }}>
                    About Me
                  </a>
                </li>
                <li className={activeSection === 'skills' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                    Skills
                  </a>
                </li>
                <li className={activeSection === 'experience' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
                    Experience
                  </a>
                </li>
                <li className={activeSection === 'Portfolio' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('Portfolio'); }}>
                    Projects
                  </a>
                </li>
                <li className={activeSection === 'contact' ? 'active' : ''}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};