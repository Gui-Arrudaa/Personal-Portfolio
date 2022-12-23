import styled from 'styled-components';

const SocialsContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, rgba(182, 45, 236, 1) 25%, rgba(140, 25, 185, 1) 75%);
  color: #f6f8fa;
  text-align: center;

  div.socials {
    height: 88%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 560px) {
      height: 90%;
    }

    h2 {
      font-size: 40px;
      font-weight: bold;

      @media screen and (max-width: 860px) {
        font-size: 25px;
      }

      @media screen and (max-width: 560px) {
        font-size: 22px;
      }
    }

    p.text {
      font-size: 20px;
      font-weight: 300;
      font-style: oblique;

      @media screen and (max-width: 860px) {
        font-size: 16px;
      }

      @media screen and (max-width: 560px) {
        font-size: 12px;
      }
    }

    div {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;

      @media screen and (max-width: 560px) {
        gap: 1rem;
        margin-top: 1rem;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 27px;
        color: #f6f8fa;
        transition: all 0.2s ease-out;
        cursor: pointer;

        &:hover {
          transform: translateY(8px);
        }

        @media screen and (max-width: 991.98px) {
          font-size: 1.5rem;
        }

        @media screen and (max-width: 860px) {
          font-size: 1.2rem;
        }

        @media screen and (max-width: 560px) {
          font-size: 1rem;
        }
      }
    }
  }

  p {
    margin: 0;
  }

  div.footer {
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f6f8fa;

    @media screen and (max-width: 560px) {
      height: 10%;
    }

    p {
      font-size: 16px;
      font-weight: 600;

      @media screen and (max-width: 560px) {
        font-size: 10px;
      }
    }
  }
`;

export default SocialsContainer;
