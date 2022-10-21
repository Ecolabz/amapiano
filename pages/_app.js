import Mainlayout from '../components/layout/Mainlayout';
import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}

export default MyApp;
