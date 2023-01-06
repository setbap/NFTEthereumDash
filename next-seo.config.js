import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaEthereumDash",
  titleTemplate: "%s | Business Intelligence Dashboard Ethereum",
  defaultTitle: "MegaEthereumDash | Business Intelligence Dashboard Ethereum ",
  description:
    "Best Business Intelligence Dashboard Ethereum by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaEthereumDash.vercel.app/",
  openGraph: {
    url: "https://MegaEthereumDash.vercel.app/",
    title: "MegaEthereumDash",
    description:
      "Best Business Intelligence Dashboard Ethereum by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaEthereumDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
