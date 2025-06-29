import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Footer = () => {
  const footerRef = useScrollAnimation('animate-fade-in-up');

  return (
    <footer className="footer_wrapper" id="contact">
      <div className="container">
        <section className="page_section contact">
          <div ref={footerRef} className="contact_section">
            <h2>Get In Touch</h2>
            <h6>
              <h3><a href="https://www.linkedin.com/in/codejediatuw/">Let's Linked in</a></h3>
              <h3><a href="https://github.com/codejedi-ai">GitHub</a></h3>
              <h2 className="section-title">QR Code</h2>
              <div className="qr-code" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                margin: '20px auto' 
              }}>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://codejedi-ai.github.io/"
                  alt="QR Code for CodeJedi Portfolio" 
                  style={{ maxWidth: '200px', height: 'auto' }} 
                />
              </div>
            </h6>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="footer_bottom">
          <span>
            Copyright © 2015, Template by{' '}
            <a href="http://webthemez.com">WebThemez.com</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};