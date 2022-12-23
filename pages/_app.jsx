import GlobalStyle from '../styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
