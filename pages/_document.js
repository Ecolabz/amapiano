import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <meta name="apple-mobile-web-app-title" content="" />
          <meta name="theme-color" content="#231c3b" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <meta name="application-name" content="Amapiano lifestyle" />
          <meta name="description" content="Amapiano lifestyle the Littiest Music Festival You Have Ever Seen!" />
          <meta
            name="keywords"
            content="Amapiano lifestyle, Amapiano, lifestyle, music, music lifestyle NFT, community, Blockchain"
          />
          <meta property="og:title" content="Amapiano lifestyle" />
          <meta property="og:site_name" content="Amapiano lifestyle" />
          <meta property="og:url" content="https://amapianolifestyle.com/" />
          <meta
            property="og:description"
            content="Amapiano lifestyle the Littiest Music Festival You Have Ever Seen!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:rich_attachment" content="true" />
          <meta property="og:image" content="https://amapianolifestyle.com/assets/banner.jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Amapiano lifestyle" />
          <meta name="twitter:creator" content="Amapiano lifestyle" />
          <meta name="twitter:site" content="@piano_lifestyle" />
          <meta name="twitter:image" content="https://amapianolifestyle.com/assets/banner.jpeg" />
          <meta name="twitter:image:alt" content="amapiano lifestyle" />
          <meta
            name="twitter:description"
            content="Amapiano lifestyle the Littiest Music Festival You Have Ever Seen!"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
