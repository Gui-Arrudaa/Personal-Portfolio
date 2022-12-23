import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 3rem;
  background: #f6f8fa;
  text-align: center;

  @media screen and (max-width: 860px) {
    padding: 1.5rem 1rem;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: #b62dec;

    @media screen and (max-width: 620px) {
      font-size: 22px;
    }

    span {
      color: #b62dec;
    }
  }

  div.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1500px;
    gap: 2.5rem;
    margin-top: 4rem;

    @media screen and (max-width: 860px) {
      margin-top: 2rem;
      gap: 1rem;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #212529;
      cursor: pointer;

      .image {
        border-radius: 10px;
        box-shadow: 2px -2px 10px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;

        @media screen and (max-width: 860px) {
          width: 300px;
          height: 225px;
        }
      }

      .icon {
        font-size: 25px;
        opacity: 0;
        transition: all 0.2s;

        @media screen and (max-width: 400px) {
          font-size: 1.25rem;
        }
      }

      p {
        display: flex;
        align-items: center;
        margin-top: 1.5rem;
        font-size: 1.4rem;
        font-weight: 600;

        @media screen and (max-width: 400px) {
          font-size: 1.2rem;
          margin-top: 1rem;
        }
      }

      &:hover .icon,
      &:hover p {
        color: #b62dec;
        opacity: 1;
      }

      &:hover .image {
        transform: scale(1.03);
      }
    }
  }
`;

export default ProjectsContainer;
