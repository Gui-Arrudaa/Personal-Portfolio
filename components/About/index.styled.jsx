import styled from 'styled-components';

const AboutContainer = styled.div`
  height: calc(100vh - 56px);
  padding: 5rem;
  display: flex;

  @media screen and (max-width: 1200px) {
    padding: 2.5rem;
  }

  @media screen and (max-width: 991.98px) {
    height: fit-content;
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
    gap: 2.5rem;
  }

  div.about {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 991.98px) {
      width: 100%;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 25px;

      @media screen and (max-width: 1200px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 767.98px) {
        font-size: 1.5rem;
      }
    }

    span {
      color: #b62dec;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b62dec;
    }

    p {
      font-size: 18px;
      text-align: justify;

      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }

      @media screen and (max-width: 767.98px) {
        font-size: 14px;
      }
    }

    .p-center {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin: 0;

      @media screen and (max-width: 767.98px) {
        font-size: 12px;
      }
    }
  }

  div.image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 991.98px) {
      width: 100%;
    }

    .me {
      border-radius: 20px;
      box-shadow: 25px -25px #f6f8fa, 25px -25px 0px 4.5px #b62dec;

      @media screen and (max-width: 1200px) {
        width: 320px;
        height: 320px;
      }

      @media screen and (max-width: 991.98px) {
        width: 200px;
        height: 200px;
        box-shadow: 15px -15px #f6f8fa, 15px -15px 0px 3.5px #b62dec;
      }

      @media screen and (max-width: 400px) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default AboutContainer;
