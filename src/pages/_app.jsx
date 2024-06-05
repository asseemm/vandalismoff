import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  return <Component {...pageProps} />;
}
