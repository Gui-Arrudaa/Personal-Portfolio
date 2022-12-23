import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 2.5rem 5rem;
  background: linear-gradient(180deg, rgba(182, 45, 236, 1) 25%, rgba(140, 25, 185, 1) 75%);
  color: #f6f8fa;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 991.98px) {
    padding: 2rem 2.5rem;
  }

  @media screen and (max-width: 991.98px) {
    padding: 2rem;
  }

  @media screen and (max-width: 400px) {
    padding: 1.5rem 1rem;
  }

  h2 {
    text-decoration: underline;

    @media screen and (max-width: 620px) {
      font-size: 20px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    max-width: 1500px;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 6rem;
    margin-top: 3rem;

    @media screen and (max-width: 991.98px) {
      row-gap: 1rem;
      column-gap: 3rem;
      margin-top: 2rem;
    }

    @media screen and (max-width: 620px) {
      column-gap: 2rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 400px) {
      margin-bottom: 0;
    }

    li {
      .icon {
        margin-bottom: 1rem;
        font-size: 80px;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.2);
        }

        @media screen and (max-width: 1200px) {
          font-size: 60px;
        }

        @media screen and (max-width: 1060px) {
          font-size: 50px;
        }

        @media screen and (max-width: 991.98px) {
          font-size: 40px;
        }

        @media screen and (max-width: 620px) {
          font-size: 30px;
        }
      }

      p {
        font-weight: 600;
      }
    }
  }
`;

export default SkillsContainer;
