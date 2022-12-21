import { FiDownload } from 'react-icons/fi';
import Button from './index.styled';

const CVButton = () => {
  return (
    <a href="Files/Currículo.pdf" download="CVGuilherme.pdf">
      <Button>
        <FiDownload size={17} className="me-1" />
        Baixar Currículo
      </Button>
    </a>
  );
};

export default CVButton;
