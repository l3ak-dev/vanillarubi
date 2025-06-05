import React from 'react';
import styled from 'styled-components';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionSEO } from './SectionSEO';

// Material Icons styles
const MaterialIconStyles = `
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 28px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
    color: var(--color-secondary);
  }
`;

// Inject Material Icons styles
const IconStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: MaterialIconStyles }} />
);

// Styled Components
const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-primary);  
  color: var(--color-white);
  padding: var(--space-10) 0 var(--space-10) 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 10% 10%,
      rgba(90, 0, 22, 0.4) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(90, 0, 22, 0.6) 0%,
      transparent 50%
    );
    z-index: 1;
  }
  
  @media (max-width: 900px) {
    padding: var(--space-8) 0 var(--space-8) 0;
  }
  
  @media (max-width: 600px) {
    padding: var(--space-7) 0 var(--space-7) 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  position: relative;
  z-index: 2;
  
  @media (max-width: 600px) {
    padding: 0 var(--space-3);
  }
`;

const SectionHeader = styled.div`
  margin-bottom: var(--space-8);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 900px) {
    margin-bottom: var(--space-6);
  }
  
  @media (max-width: 600px) {
    margin-bottom: var(--space-5);
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin-bottom: var(--space-2);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-4);
  color: var(--color-white);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: var(--color-secondary);
    opacity: 0.6;
  }
  
  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: var(--color-gray-100);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  margin-top: var(--space-4);
  
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-5);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    gap: var(--space-4);
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0;
  padding: var(--space-5) var(--space-4) var(--space-4) var(--space-4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all var(--transition-normal);
  border: 1px solid rgba(220, 201, 182, 0.1);
  height: 100%;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: var(--color-secondary);
    transition: height var(--transition-slow);
  }
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(220, 201, 182, 0.2);
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    
    &::before {
      height: 100%;
    }
    
    .icon-container {
      background: var(--color-secondary);
      
      .material-icons {
        color: var(--color-primary);
      }
    }
    
    h3 {
      color: var(--color-secondary);
    }
  }
  
  @media (max-width: 900px) {
    padding: var(--space-4) var(--space-3);
    align-items: flex-start;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(220, 201, 182, 0.1);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  
  .material-icons {
    transition: all var(--transition-normal);
  }
  
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    margin-bottom: var(--space-3);
  }
  
  @media (max-width: 600px) {
    width: 54px;
    height: 54px;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: var(--space-3);
  position: relative;
  color: var(--color-white);
  transition: color var(--transition-normal);
  
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const ServiceDesc = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--color-gray-100);
  line-height: 1.8;
  
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

// Define o array de ícones do Material Icons para cada serviço
// Para alterar ícones: 
// 1. Visite https://fonts.google.com/icons
// 2. Encontre um ícone que você goste
// 3. Copie o nome exato do ícone (geralmente em minúsculas com underscores)
// 4. Substitua o nome do ícone abaixo na posição correspondente ao card
//
// Para usar um SVG personalizado:
// 1. Coloque 'custom_svg' na posição desejada do array abaixo
// 2. O renderIcon vai automaticamente usar o SVG personalizado nessa posição
const serviceIcons = [
  'campaign',           // Ícone para media management (megafone/campanha)
  'video_camera_back',  // Ícone para criação de conteúdo
  'moving',             // Ícone para brand & content strategy
  'self_improvement',   // Ícone para mentoria energética
  'custom_svg',         // Usaremos nosso SVG personalizado para creative direction
  'rocket_launch',      // Ícone para growth planning
];

// SVG personalizado para o ícone de network intelligence caso seja necessário
const NetworkIntelligenceSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="28px" 
    viewBox="0 -960 960 960" 
    width="28px" 
    fill="currentColor"
    style={{ 
      transform: 'scale(1.2)',
      position: 'relative',
      top: '2px'
    }}
    aria-hidden="true"
  >
    <path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z" />
  </svg>
);

// Animation variants - otimizados para performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const WhatWeOffer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const services = i18n.t('whatWeOffer.services', { returnObjects: true }) as { title: string; desc: string }[];
  
  return (
    <>
      <SectionSEO 
        id="services"
        title="What We Offer - Creative Strategy and Business Growth Services"
        description="From strategy to execution, discover our multidimensional services: Media Management, Content Creation, Strategic Clarity, Business Mentoring, and more."
        keywords="media management, content creation, business strategy, business mentoring, project planning"
      />
     
      <LazyMotion features={domAnimation}>
        <Section id="services" aria-labelledby="services-title">
          <IconStyles />
          <Container>
            <SectionHeader
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <Subtitle variants={itemVariants} aria-hidden="true">
                {t('whatWeOffer.subtitle')}
              </Subtitle>
              <Title variants={itemVariants} id="services-title">
                {t('whatWeOffer.title')}
              </Title>
              <Description variants={itemVariants}>
                {t('whatWeOffer.description')}
              </Description>
            </SectionHeader>
            
            <ServicesGrid
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              role="list"
            >
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  role="listitem"
                  aria-labelledby={`service-title-${index}`}
                >
                  <IconContainer className="icon-container">
                    {serviceIcons[index] === 'custom_svg' ? <NetworkIntelligenceSVG /> : <span className="material-icons" aria-hidden="true">{serviceIcons[index]}</span>}
                  </IconContainer>
                  <ServiceTitle id={`service-title-${index}`}>{service.title}</ServiceTitle>
                  <ServiceDesc>{service.desc}</ServiceDesc>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Container>
        </Section>
      </LazyMotion>
    </>
  );
}; 