import "@styles/style.css";
import Script from "next/script";
import Head from 'next/head';

export const metadata = {
  title: "Vidyarthiadda | Find the best college in the city",
  description: "Find top colleges in the city, with 100% guaranteed placemenent.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <Head>
      <div>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-93KTPMMH3S`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-93KTPMMH3S');
        `}
        </Script>

        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', 'cb0cb103185e7ecce86aec5b0bf9f55f8dc82df8', { region: 'eu' });
          `,
          }}
        />
      </div>


    </Head>
    <body>
      <div className='main'>
        <div className='gradient' />
      </div>
      <main className='app'>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
