import React from 'react';

const Scripts = () => {
    const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-93KTPMMH3S');
  `;

    const facebookPixelScript = `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1067039781034205');
  fbq('track', 'PageView');`;

  const SmartLookScript = `window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'cb0cb103185e7ecce86aec5b0bf9f55f8dc82df8', { region: 'eu' });`;

    return (
        <>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-93KTPMMH3S"></script>
            <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />

            {/* Facebook Pixel */}
            <script dangerouslySetInnerHTML={{ __html: facebookPixelScript }} />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1067039781034205&ev=PageView&noscript=1"
                />
            </noscript>

            <script dangerouslySetInnerHTML={{ __html: SmartLookScript }} />
        </>
    );
};

export default Scripts;
