import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';
import AboutContainer from './index.styled';

const About = () => {
  return (
    <AboutContainer id="Sobre">
      <div className="about">
        <h1>
          Olá, Eu sou <span>Guilherme!</span>
        </h1>
        <p>
          Sou um estudante de Ciências da Computação da Universidade Federal do ABC (UFABC). Sou uma
          pessoa ambiciosa, que busca sempre os melhores resultados e que está constantemente
          procurando novos conhecimentos, visando ampliar cada vez mais meu perfil profissional e
          pessoal. Estou em busca de um estágio na áre de tecnologia.
        </p>
        <div>
          <FiArrowDown size={25} className="me-2" />
          <p className="p-center">
            Seja muito bem vindo ao meu portfólio. É um prazer te conhecer!
          </p>
          <FiArrowDown size={25} className="ms-2" />
        </div>
      </div>
      <div className="image">
        <Image className="me" src="/Files/me.jpg" width={430} height={430} />
      </div>
    </AboutContainer>
  );
};

export default About;
