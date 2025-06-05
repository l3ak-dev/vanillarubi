import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import whoIsItForImage from '../imagens/whoisitfor.jpg';

const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-accent);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 30%;
    background: linear-gradient(135deg, transparent 50%, rgba(90, 0, 22, 0.05) 100%);
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
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const ContentColumn = styled(motion.div)`
  @media (max-width: 900px) {
    order: 2;
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
    right: -15px;
    width: 40%;
    height: 40%;
    background: linear-gradient(45deg, transparent, rgba(128, 0, 32, 0.08));
    z-index: -1;
  }
  
  @media (max-width: 900px) {
    order: 1;
    align-items: center;
  }
`;

const StylizedImage = styled.figure`
  position: relative;
  height: 680px;
  width: 85%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 15px;
  background-color: #f9f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.4s ease;
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
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom right,
      rgba(90, 0, 22, 0.1),
      transparent 40%,
      transparent
    );
    pointer-events: none;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
    filter: brightness(0.95) contrast(1.05);
    transition: all 0.6s ease;
    will-change: transform;
  }
  
  &:hover img {
    transform: scale(1.02);
    filter: brightness(1) contrast(1.05);
  }
  
  &:hover::before {
    top: 15px;
    left: 15px;
  }
  
  @media (max-width: 1200px) {
    height: 620px;
    width: 90%;
  }
  
  @media (max-width: 900px) {
    height: 580px;
    width: 85%;
    
    &::after {
      background: linear-gradient(
        to bottom,
        rgba(90, 0, 22, 0.1),
        transparent 60%
      );
    }
  }
  
  @media (max-width: 600px) {
    height: 500px;
    width: 100%;
    padding: 10px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 5rem;
    height: 2px;
    background: var(--color-primary);
    opacity: 0.5;
  }
  
  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }
  
  @media (max-width: 900px) {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 2rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
`;

const TitleDivider = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--color-primary-dark), transparent);
  margin-bottom: 1.5rem;
  opacity: 0.3;
  
  @media (max-width: 900px) {
    background: linear-gradient(to right, transparent, var(--color-primary-dark), transparent);
    margin-bottom: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  
  @media (max-width: 900px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const ListItem = styled(motion.li)`
  font-size: 1.15rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  color: #600014;
  line-height: 1.6;
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
    font-size: 1.1rem;
    gap: 1rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
    gap: 0.8rem;
  }
`;

const BulletIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  background: rgba(128, 0, 32, 0.08);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(90, 0, 22, 0.1);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(128, 0, 32, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ListItem}:hover &::after {
    opacity: 1;
  }
  
  svg {
    position: relative;
    z-index: 2;
    stroke: var(--color-primary);
    stroke-width: 2.5;
  }
  
  @media (max-width: 900px) {
    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
  }
  
  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }
`;

const ImpactContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

const ImpactIcon = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  width: 28px;
  height: 28px;
  background: rgba(128, 0, 32, 0.08);
  border-radius: 50%;
  
  svg {
    width: 16px;
    height: 16px;
    stroke: var(--color-primary);
    fill: none;
    stroke-width: 2;
  }
  
  @media (max-width: 900px) {
    margin: 0 auto 0.8rem;
  }
`;

const Impact = styled(motion.div)`
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  color: var(--color-primary);
  font-style: italic;
  font-weight: 500;
  line-height: 1.5;
  padding-left: 1.5rem;
  border-left: 2px solid var(--color-primary);
  display: flex;
  align-items: center;
  
  @media (max-width: 900px) {
    font-size: 1.3rem;
    text-align: center;
    padding-left: 0;
    border-left: none;
    padding-top: 1.5rem;
    border-top: 2px solid var(--color-primary);
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding-top: 1.2rem;
  }
`;

const BulletSVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ImpactSVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

// Animation variants - otimizados para performance
const bulletVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const fadeInVariants = {
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

export const WhoItsFor: React.FC = () => {
  const { t, i18n } = useTranslation();
  const bullets = i18n.t('whoItsFor.bullets', { returnObjects: true }) as string[];
  const imageRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  return (
    <LazyMotion features={domAnimation}>
      <Section id="audience" ref={sectionRef} aria-labelledby="audience-title">
        <Container>
          <ContentColumn
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Title
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
              id="audience-title"
            >
              {t('whoItsFor.title')}
            </Title>
            <TitleDivider 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              aria-hidden="true"
            />
            <Description
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              {t('whoItsFor.description')}
            </Description>
            <List role="list">
              {bullets.map((item, idx) => (
                <ListItem
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  variants={bulletVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  role="listitem"
                >
                  <BulletIcon aria-hidden="true">{BulletSVG}</BulletIcon>
                  {item}
                </ListItem>
              ))}
            </List>
            <ImpactContainer>
              <Impact
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ImpactIcon
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 180, damping: 15 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                >
                  {ImpactSVG}
                </ImpactIcon>
                {t('whoItsFor.impact')}
              </Impact>
            </ImpactContainer>
          </ContentColumn>
          
          <ImageColumn
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StylizedImage ref={imageRef}>
              <motion.img 
                src={whoIsItForImage} 
                alt={t('whoItsFor.imageAlt') || "Ideal audience for Vanilla Rubi services"}
                style={{ y: imageY }}
                loading="lazy"
                width="600" 
                height="800"
              />
            </StylizedImage>
          </ImageColumn>
        </Container>
      </Section>
    </LazyMotion>
  );
}; 