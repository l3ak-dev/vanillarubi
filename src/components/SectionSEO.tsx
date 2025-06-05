import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SectionSEOProps {
  id: string;
  title: string;
  description: string;
  keywords?: string;
  imageUrl?: string;
}

export const SectionSEO: React.FC<SectionSEOProps> = ({
  id,
  title,
  description,
  keywords,
  imageUrl
}) => {
  return (
    <Helmet>
      {/* Microdata para esta seção específica */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          "isPartOf": {
            "@type": "WebPage",
            "@id": "https://vanillarubi.eu/#website"
          },
          "name": title,
          "description": description,
          ...(imageUrl && { "image": imageUrl }),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://vanillarubi.eu/#${id}`
          }
        })}
      </script>
      
      {/* Dados específicos da seção para complementar as meta tags principais */}
      <meta property="article:section" content={title} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}; 