import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoIsVanillaRubi } from './components/WhoIsVanillaRubi';
import { WhatWeOffer } from './components/WhatWeOffer';
import { WhoItsFor } from './components/WhoItsFor';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { GlobalStyles } from './styles/GlobalStyles';

function SEO() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const title = 'Vanilla Rubi — Multidimensional Business Growth Agency';
  const description = t('seo.description', {
    defaultValue: 'Vanilla Rubi is a multidimensional business growth agency for entrepreneurs ready to scale with clarity, creativity, and soul.'
  });
  const url = 'https://vanillarubi.eu/';
  const image = 'https://vanillarubi.eu/og-image.jpg';
  
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Alternate language versions */}
      <link rel="alternate" href="https://vanillarubi.eu/" hrefLang="en" />
      <link rel="alternate" href="https://vanillarubi.eu/pt/" hrefLang="pt" />
      <link rel="alternate" href="https://vanillarubi.eu/es/" hrefLang="es" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#E63946" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <WhoIsVanillaRubi />
        <WhatWeOffer />
        <WhoItsFor />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
