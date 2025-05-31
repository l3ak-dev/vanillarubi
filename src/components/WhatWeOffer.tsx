import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-gray);
  color: var(--color-black);
  padding: 6rem 0 5rem 0;
  @media (max-width: 900px) {
    padding: 3rem 1.2rem 2.2rem 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 3.2rem 1.2rem 2.7rem 1.2rem;
    border-top: 1.5px solid #ececec;
  }
`;

const MotionDiv = styled(motion.div)``;

const Title = styled(motion.h2)`
  font-size: 2.2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  margin-top: 2.7rem;
  margin-bottom: 3.5rem;
  letter-spacing: -0.01em;
  text-align: left;
  @media (max-width: 900px) {
    margin-top: 1.7rem;
    text-align: center;
    font-size: 1.7rem;
  }
  @media (max-width: 600px) {
    margin-top: 1.1rem;
    font-size: 1.18rem;
    margin-bottom: 2.2rem;
    text-align: center;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 4.2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: start;
  padding-bottom: 3.5rem;
  @media (max-width: 900px) {
    gap: 2rem;
    padding-bottom: 2.2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.7rem;
    padding-bottom: 1.3rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--color-white);
  border-radius: 18px;
  padding: 2.5rem 1.7rem 1.7rem 1.7rem;
  box-shadow: 0 4px 24px rgba(24,24,27,0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  border: 1.5px solid transparent;
  min-height: 210px;
  margin-bottom: 0;
  &:hover {
    box-shadow: 0 8px 32px rgba(230,57,70,0.13);
    border: 1.5px solid var(--color-primary);
    transform: translateY(-6px) scale(1.03);
    .icon-svg {
      stroke: #e63946;
      filter: drop-shadow(0 2px 8px rgba(230,57,70,0.10));
      transition: stroke 0.22s, filter 0.22s;
    }
    h3 {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  @media (max-width: 900px) {
    padding: 2rem 1.1rem 1.1rem 1.1rem;
    align-items: center;
    min-height: 180px;
  }
  @media (max-width: 600px) {
    padding: 1.1rem;
    min-height: 140px;
    margin-bottom: 1.2rem;
    align-items: center;
  }
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 36px;
    height: 36px;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    margin-bottom: 0.7rem;
  }
  svg.icon-svg {
    transition: stroke 0.22s, filter 0.22s;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0.18em;
    background: var(--color-primary);
    border-radius: 1px;
    position: absolute;
    left: 0;
    bottom: -0.18em;
    opacity: 0;
    transition: width 0.28s cubic-bezier(.4,0,.2,1), opacity 0.18s;
  }
  @media (max-width: 900px) {
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.08rem;
    margin-bottom: 0.4rem;
  }
`;

const ServiceDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.01rem;
  color: var(--color-dark-gray);
  @media (max-width: 900px) {
    font-size: 0.97rem;
  }
  @media (max-width: 600px) {
    font-size: 1.01rem;
    color: #444;
  }
`;

const serviceIcons = [
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h3l8-6v12l-8-6z"/><circle cx="21" cy="14" r="2.5"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22l16-16 4 4-16 16H4v-4z"/><path d="M14 6l8 8"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10"/><path d="M14 14l4-2-2 4-4 2 2-4z"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 2 16 14 12 14 16 26"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="14" cy="14" rx="10" ry="6"/><circle cx="14" cy="14" r="2.5"/></svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 20 10 14 16 18 24 8"/><circle cx="4" cy="20" r="1.5"/><circle cx="10" cy="14" r="1.5"/><circle cx="16" cy="18" r="1.5"/><circle cx="24" cy="8" r="1.5"/></svg>
  ),
];

export const WhatWeOffer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const services = i18n.t('whatWeOffer.services', { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <Section className="container" id="services">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {t('whatWeOffer.title')}
        </Title>
        <ServicesGrid>
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <IconBox>{React.cloneElement(serviceIcons[idx], { className: 'icon-svg' })}</IconBox>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDesc>{service.desc}</ServiceDesc>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </MotionDiv>
    </Section>
  );
}; 