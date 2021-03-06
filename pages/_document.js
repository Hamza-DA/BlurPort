import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content='#0c0c0c' />
          {/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <link rel='shortcut icon' href='./favicon.png' type='image/png' />
          <meta name='robots' content='index, follow' />
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            name='keywords'
            content='frontend, developer, design, creative, html, css, js, reactjs, nextjs, sass'
          />
          <meta
            property='og:image'
            content='https://hamzadahmani.vercel.app/opengraph.jpg'
          />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@hamzadahmani01' />
          <meta
            name='twitter:image'
            content='https://hamzadahmani.vercel.app/opengraph.jpg'
          ></meta>

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          {/* <script>0</script> */}
          <Main />
          <NextScript />
          {/* <script src='/scripts/developedby.js'></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
