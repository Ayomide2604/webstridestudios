import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Webstride Studios",
  description: "Webstride Studios - Creative Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/css/theme.min.css"
        />
      </head>
      <body>
        <Spinner />
        <main className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </main>
        <Script src="/assets/js/theme-switcher.js" />
        <Script src="/assets/vendor/jarallax/dist/jarallax.min.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="/assets/js/theme.min.js" />
        <Script src="/assets/js/page-loading.js" />
      </body>
    </html>
  );
}
