import Head from 'next/head';

import Navbar from '../components/Navbar/index';
import About from '../components/About/index';
import Skills from '../components/Skills/index';
import Projects from '../components/Projects/index';
import Socials from '../components/Socials';

const Home = () => {
  return (
    <>
      <Head>
        <title>Guilherme Arruda - Portfólio</title>
      </Head>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </>
  );
};

export default Home;
