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

              {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1067039781034205');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1067039781034205&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
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
