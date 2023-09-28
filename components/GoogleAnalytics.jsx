import Script from "next/script";

const GN_ID = process.env.GN_ID;

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GN_ID}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GN_ID}');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;

