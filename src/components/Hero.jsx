// src/components/Hero.jsx
import { Linkedin, Github, Instagram, Mail } from 'lucide-react'; // Importa los iconos
import '../styles/Hero.css';
import MiFoto from '../assets/119070406.png';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-glow"></div>
      
      <div className="hero-content-split">
        <div className="hero-image-wrapper">
          <img src={MiFoto} alt="Fausto Jara" className="hero-image" />
          <div className="availability-badge">
            <div className="pulse-dot"></div>
            <span>DISPONIBLE</span>
          </div>
        </div>

        <div className="hero-text-side">
          <div className="award-badge">✦ Software Engineer</div>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="text-gradient-blue">Full Stack</span> <br />
            <span className="text-gradient-purple">Eco-systems.</span>
          </h1>
          <p className="hero-description">
           Especializado en el desarrollo de aplicaciones de extremo a extremo, 
  combinando bases de datos robustas con interfaces de usuario excepcionales.
          </p>
          
          {/* SECCIÓN DE REDES SOCIALES ACTUALIZADA */}
          <div className="hero-actions">
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="mailto:tu-correo@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;