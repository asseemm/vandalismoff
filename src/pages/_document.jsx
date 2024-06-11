import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/fav.png" /> {/* Правильный путь к фавикону */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
        <title>ВандализмOFF</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="aos" src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script id="scroll" src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous" />
        <Script id="aos-init">
          {`AOS.init();`}
        </Script>
      </body>
    </Html>
  );
}
