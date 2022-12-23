import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMicrosoftoffice,
  SiYarn,
  SiNpm,
} from 'react-icons/si';
import SkillsContainer from './index.styled';

const Skills = () => {
  return (
    <SkillsContainer id="Competencias">
      <h2>Essas são algumas das minhas Competências!</h2>
      <ul>
        <li>
          <SiHtml5 className="icon" />
          <p>HTML5</p>
        </li>
        <li>
          <SiCss3 className="icon" />
          <p>CSS3</p>
        </li>
        <li>
          <SiJavascript className="icon" />
          <p>JavaScript</p>
        </li>
        <li>
          <SiSass className="icon" />
          <p>Sass</p>
        </li>
        <li>
          <SiReact className="icon" />
          <p>React</p>
        </li>
        <li>
          <SiNextdotjs className="icon" />
          <p>Next.Js</p>
        </li>
        <li>
          <SiPython className="icon" />
          <p>Python</p>
        </li>
        <li>
          <SiGit className="icon" />
          <p>Git</p>
        </li>
        <li>
          <SiGithub className="icon" />
          <p>GitHub</p>
        </li>
        <li>
          <SiNpm className="icon" />
          <p>Npm</p>
        </li>
        <li>
          <SiYarn className="icon" />
          <p>Yarn</p>
        </li>
        <li>
          <SiMicrosoftoffice className="icon" />
          <p>Office</p>
        </li>
      </ul>
    </SkillsContainer>
  );
};

export default Skills;
