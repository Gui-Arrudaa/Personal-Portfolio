import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Image from 'next/image';
import ProjectsContainer from './index.styled';

const Projects = () => {
  return (
    <ProjectsContainer id="Projetos">
      <h2>
        Esses são alguns dos meus <span>Projetos!</span>
      </h2>
      <div className="container">
        <a href="https://studio-ghibli-guilherme-arruda.vercel.app" target="_blank" rel="noreferrer">
          <Image className="image" src="/Files/ghibli.png" width={350} height={262.5} />
          <p>
            <FiChevronLeft className="icon" /> The Studio Ghibli Collection <FiChevronRight className="icon" />
          </p>
        </a>
        <a href="https://guilherme-arruda.github.io/markdown-previewer/" target="_blank" rel="noreferrer">
          <Image className="image" src="/Files/markdown.png" width={350} height={262.5} />
          <p>
            <FiChevronLeft className="icon" /> Markdown Previewer <FiChevronRight className="icon" />
          </p>
        </a>
        <a href="https://pokedex-guilherme-arruda.vercel.app" target="_blank" rel="noreferrer">
          <Image className="image" src="/Files/pokedex.png" width={350} height={262.5} />
          <p>
            <FiChevronLeft className="icon" /> Master Pokédex <FiChevronRight className="icon" />
          </p>
        </a>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
