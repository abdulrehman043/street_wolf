import "@styles/style.css";
import Script from "next/script";

export const metadata = {
  title: "Vidyarthiadda | Find the best college in the city",
  description: "Find top colleges in the city, with 100% guaranteed placemenent.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
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


    </head>
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
