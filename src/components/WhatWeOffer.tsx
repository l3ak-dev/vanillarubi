import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-gray-100);  
  color: var(--color-black);
  padding: var(--space-10) 0 var(--space-9) 0;
  
  @media (max-width: 900px) {
    padding: var(--space-7) var(--space-3) var(--space-5) var(--space-3);
  }
  
  @media (max-width: 600px) {
    padding: var(--space-7) var(--space-3) var(--space-6) var(--space-3);
    border-top: 1px solid var(--color-gray-200);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  
  @media (max-width: 600px) {
    padding: 0 var(--space-2);
  }
`;

const SectionHeader = styled.div`
  margin-bottom: var(--space-7);
  text-align: center;
  
  @media (max-width: 900px) {
    margin-bottom: var(--space-5);
  }
  
  @media (max-width: 600px) {
    margin-bottom: var(--space-4);
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-3);
  
  @media (max-width: 900px) {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--color-gray-700);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-5);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    gap: var(--space-4);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-4) var(--space-4) var(--space-4);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow var(--transition-normal), transform var(--transition-normal), border var(--transition-normal);
  border: 1.5px solid transparent;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: var(--color-primary);
    transition: height var(--transition-slow);
  }
  
  &:hover {
    box-shadow: var(--shadow-lg), var(--shadow-primary);
    border: 1.5px solid var(--color-gray-200);
    transform: translateY(-8px);
    
    &::before {
      height: 100%;
    }
    
    .icon-container {
      background: var(--color-primary);
      
      svg {
        stroke: var(--color-white);
        transform: scale(1.1) rotate(5deg);
      }
    }
    
    h3::after {
      width: 100%;
      opacity: 1;
    }
  }
  
  @media (max-width: 900px) {
    padding: var(--space-4) var(--space-3);
    align-items: flex-start;
  }
`;

const IconContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: var(--color-gray-100);
  margin-bottom: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-normal);
  
  svg {
    transition: stroke var(--transition-normal), transform var(--transition-normal);
  }
  
  @media (max-width: 900px) {
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-2);
  }
  
  @media (max-width: 600px) {
    width: 52px;
    height: 52px;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    border-radius: var(--radius-sm);
    position: absolute;
    left: 0;
    bottom: -4px;
    opacity: 0;
    transition: width var(--transition-normal), opacity var(--transition-normal);
  }
  
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

const ServiceDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

const serviceIcons = [
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h3l8-6v12l-8-6z"/><circle cx="21" cy="14" r="2.5"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22l16-16 4 4-16 16H4v-4z"/><path d="M14 6l8 8"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10"/><path d="M14 14l4-2-2 4-4 2 2-4z"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 2 16 14 12 14 16 26"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="14" cy="14" rx="10" ry="6"/><circle cx="14" cy="14" r="2.5"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 20 10 14 16 18 24 8"/><circle cx="4" cy="20" r="1.5"/><circle cx="10" cy="14" r="1.5"/><circle cx="16" cy="18" r="1.5"/><circle cx="24" cy="8" r="1.5"/></svg>
  ),
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

export const WhatWeOffer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const services = i18n.t('whatWeOffer.services', { returnObjects: true }) as { title: string; desc: string }[];
  
  return (
    <Section id="services">
      <Container>
        <SectionHeader
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Subtitle variants={itemVariants}>
            {t('whatWeOffer.subtitle')}
          </Subtitle>
          <Title variants={itemVariants}>
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
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <IconContainer className="icon-container">
                {serviceIcons[index % serviceIcons.length]}
              </IconContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDesc>{service.desc}</ServiceDesc>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
}; 