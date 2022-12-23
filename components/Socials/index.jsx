import { FaFacebookSquare, FaGithub, FaLinkedin, FaInstagram, FaAt } from 'react-icons/fa';
import SocialsContainer from './index.styled';

const Socials = () => {
  return (
    <SocialsContainer id="Entre em Contato">
      <div className="socials">
        <h2>Vamos trabalhar juntos...</h2>
        <p className="text">Para saber mais sobre mim ou entrar em contato use uma das seguintes opções!</p>
        <div>
          <a href="https://www.facebook.com/guilherme.arrudapanfiglio/" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
            <p>Facebook</p>
          </a>
          <a href="https://github.com/Guilherme-Arruda" target="_blank" rel="noreferrer">
            <FaGithub />
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/guilherme-arruda-840b4b1aa/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <p>Linkedin</p>
          </a>
          <a href="https://www.instagram.com/gui_arrudap/" target="_blank" rel="noreferrer">
            <FaInstagram />
            <p>Instagram</p>
          </a>
          <a href="mailto:guipanfiglio123@outlook.com">
            <FaAt />
            <p>Envie um email</p>
          </a>
        </div>
      </div>
      <div className="footer">
        <p>🤍 Esse portfólio foi realizado com muito carinho por Guilherme Arruda 🤍</p>
      </div>
    </SocialsContainer>
  );
};

export default Socials;
