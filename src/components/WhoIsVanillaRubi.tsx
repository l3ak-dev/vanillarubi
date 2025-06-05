import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import whoIsVanillaImage from '../imagens/whoisvanilla.jpg';
import { SectionSEO } from './SectionSEO';

const Section = styled.section`
  background: var(--color-accent);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 90px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 30%;
    background: linear-gradient(225deg, transparent 50%, rgba(90, 0, 22, 0.05) 100%);
    z-index: 1;
  }
  
  @media (max-width: 900px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 600px) {
    padding: 5rem 1.2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 600px) {
    padding: 0 1.2rem;
  }
`;

const ImageColumn = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  
  &::after {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40%;
    height: 40%;
    background: linear-gradient(135deg, rgba(128, 0, 32, 0.08), transparent);
    z-index: -1;
  }
  
  @media (max-width: 900px) {
    order: 1;
    align-items: center;
  }
`;

const StylishImage = styled.figure`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  background-color: #f4ece7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  margin: 0;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(90, 0, 22, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border: 1px solid var(--color-primary);
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 38%;
    filter: contrast(1.05) saturate(1.05);
    transition: all 0.6s ease;
    mix-blend-mode: multiply;
    will-change: transform;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
  
  &:hover::before {
    top: 15px;
    left: 15px;
  }
  
  @media (max-width: 1200px) {
    aspect-ratio: 16 / 10;
  }
  
  @media (max-width: 900px) {
    aspect-ratio: 16 / 11;
  }
  
  @media (max-width: 600px) {
    aspect-ratio: 16 / 12;
  }
`;

const ContentColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 900px) {
    order: 2;
  }
`;

const Eyebrow = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.8rem;
`;

const Title = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.1;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: 0;
    width: 5rem;
    height: 1px;
    background: var(--color-primary);
    opacity: 0.5;
  }
  
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  
  @media (max-width: 900px) {
    font-size: 2.5rem;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const TitleDivider = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--color-primary-dark), transparent);
  margin: -0.5rem 0 1.5rem 0;
  opacity: 0.3;
  
  @media (max-width: 900px) {
    background: linear-gradient(to right, transparent, var(--color-primary-dark), transparent);
    margin-bottom: 1.2rem;
  }
`;

const HighlightedText = styled.span`
  font-style: italic;
`;

const Paragraph = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #600014;
  margin-bottom: 1.5rem;
  position: relative;
  text-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 0.5rem;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, rgba(128, 0, 32, 0.05), transparent);
    z-index: -1;
    transition: width 0.5s ease;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const HighlightBlock = styled.span`
  color: var(--color-primary);
  font-weight: 600;
  display: inline;
`;

const Quote = styled(motion.blockquote)`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--color-primary);
  margin: 2rem 0 0 0;
  padding-left: 1rem;
  border-left: 1px solid var(--color-primary);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -1.5rem;
    left: -0.5rem;
    font-size: 3rem;
    color: rgba(128, 0, 32, 0.1);
    font-family: 'Playfair Display', serif;
  }
  
  @media (max-width: 900px) {
    text-align: center;
    padding-left: 0;
    border-left: none;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-primary);
    
    &::before {
      top: -1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Helper function to parse highlighted text
const renderWithHighlights = (text: string) => {
  if (!text) return null;
  
  const parts = text.split(/<highlight>|<\/highlight>/);
  return parts.map((part, index) => {
    // Even indexes are regular text, odd indexes need highlighting
    if (index % 2 === 0) return part;
    return <HighlightBlock key={index}>{part}</HighlightBlock>;
  });
};

export const WhoIsVanillaRubi: React.FC = () => {
  const { t } = useTranslation();
  const componentRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });
  
  const imageScaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const contentOpacityProgress = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  
  return (
    <>
      <SectionSEO 
        id="who"
        title="Who is Vanilla Rubi - Business Growth Agency"
        description="Vanilla Rubi is a multidimensional business growth force, not just a marketing agency. We bring stillness, focus, and intention to your business strategy."
        keywords="business growth, marketing agency, business strategy, Vanilla Rubi"
        imageUrl={whoIsVanillaImage}
      />
      
      <Section ref={componentRef} id="who" aria-labelledby="who-title">
        <Container>
          <ImageColumn
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StylishImage>
              <motion.img 
                src={whoIsVanillaImage} 
                alt={t('who.imageAlt') || "Vanilla Rubi - Business Growth Philosophy"}
                style={{ scale: imageScaleProgress }}
                loading="lazy"
                width="600"
                height="337"
              />
            </StylishImage>
          </ImageColumn>
          
          <ContentColumn
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            style={{ opacity: contentOpacityProgress }}
          >
            <Eyebrow variants={itemVariants} aria-hidden="true">
              {renderWithHighlights(t('who.agency'))}
            </Eyebrow>
            
            <Title variants={itemVariants} id="about-title">
              {t('who.title1')}<HighlightedText></HighlightedText>{t('who.title2')}
            </Title>
            
            <TitleDivider 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              aria-hidden="true"
            />
            
            <Paragraph variants={itemVariants}>
              {renderWithHighlights(t('who.desc1'))}
            </Paragraph>
            
            <Paragraph variants={itemVariants}>
              {renderWithHighlights(t('who.desc2'))}
            </Paragraph>
            
            <Quote variants={itemVariants} cite="https://vanillarubi.com">
              {t('who.trinium')}
            </Quote>
          </ContentColumn>
        </Container>
      </Section>
    </>
  );
}; 