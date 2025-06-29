import React from 'react';
import styled from 'styled-components';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionSEO } from './SectionSEO';

// Styled Components
const HeroContainer = styled(motion.section)`
  scroll-margin-top: 90px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`;

const LeftSection = styled.div`
  background-color: #F3EBE2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  @media (max-width: 900px) {
    min-height: auto;
    padding: 5rem 0;
  }
`;

const RightSection = styled.div`
  background-color: #B30020;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
  
  @media (max-width: 900px) {
    min-height: 50vh;
  }
  
  @media (max-width: 600px) {
    min-height: 60vh;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right 15%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  will-change: transform;
  transition: transform 0.5s ease-out;
  transform-origin: center;
  
  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 900px) {
    object-position: 90% 20%;
  }
`;

const ImageWrapper = styled.figure`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto) 1fr auto;
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
  z-index: 1;
  padding: 3rem;
  
  @media (max-width: 900px) {
    padding: 2rem;
  }
  
  @media (max-width: 600px) {
    padding: 1.5rem;
    text-align: center;
  }
`;

const PhraseRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  padding: 0 3rem;
  margin: 0;
  z-index: 10;
  
  &:nth-child(1) {
    top: 20%;
  }
  
  &:nth-child(2) {
    top: 30%;
  }
  
  &:nth-child(3) {
    top: 40%;
  }
  
  &:nth-child(4) {
    top: 60%;
  }
  
  /* Ajuste específico para idiomas PT e ES - mais espaço entre linha 3 e 4 */
  html[lang="pt"] &:nth-child(4),
  html[lang="es"] &:nth-child(4) {
    top: 55%;
  }
  
  @media (max-width: 900px) {
    position: relative;
    top: auto;
    margin-bottom: 1rem;
    padding: 0 2rem;
    
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
      top: auto;
    }
    
    &:nth-child(3) {
      margin-bottom: 5rem;
    }
  }
  
  /* Ajuste específico para idiomas que precisam de mais espaço */
  html[lang="pt"] &:nth-child(3),
  html[lang="es"] &:nth-child(3) {
    margin-bottom: 8rem;
    
    @media (max-width: 900px) {
      margin-bottom: 7rem;
    }
    
    @media (max-width: 600px) {
      margin-bottom: 6rem;
    }
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1.5rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  
  @media (max-width: 600px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  
  @media (max-width: 600px) {
    justify-content: center;
    padding-left: 0;
  }
`;

const LeftHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: #B30020;
  line-height: 0.9;
  margin: 0;
  text-align: right;
  display: inline-block;
  
  ${PhraseRow}:nth-child(4) & {
    font-size: clamp(2.5rem, 4.5vw, 3.7rem);
    font-weight: 500;
    line-height: 1.1;
  }
  
  @media (max-width: 600px) {
    text-align: center;
    font-size: clamp(1.8rem, 7vw, 2.5rem);
    
    ${PhraseRow}:nth-child(4) & {
      font-size: clamp(2.2rem, 7.5vw, 3rem);
    }
  }
`;

const RightHeadline = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: #ffeccc;
  line-height: 0.9;
  font-style: italic;
  text-align: left;
  margin: 0;
  display: inline-block;
  
  ${PhraseRow}:nth-child(4) & {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(2.5rem, 4.5vw, 3.7rem);
    line-height: 1.1;
    color: #ffeccc;
  }
  
  @media (max-width: 600px) {
    text-align: center;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    margin-top: 0.5rem;
    
    ${PhraseRow}:nth-child(4) & {
      font-size: clamp(2.2rem, 7.5vw, 3rem);
    }
  }
`;

const BottomContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Ajuste simples para resolução 1024x600 - só mover para baixo */
  @media (min-width: 1000px) and (max-height: 650px) {
    bottom: 1%;
  }
  
  @media (max-width: 900px) {
    position: relative;
    bottom: auto;
    margin-top: 4rem;
    padding: 0 2rem;
  }
  
  @media (max-width: 600px) {
    text-align: center;
    align-items: center;
    padding: 0 1.5rem;
  }
`;

const SubheadlineContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto 2.5rem;
  padding: 0 3rem;
  
  /* Dar mais espaço para o botão na resolução 1024x600 */
  @media (min-width: 1000px) and (max-height: 650px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 900px) {
    margin-bottom: 2rem;
    padding: 0 2rem;
  }
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1.35rem, 1.9vw, 1.7rem);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  position: relative;
  margin: 0;
  text-align: center;
  color: #333333;
  max-width: 850px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion.a)`
  background: #B30020;
  color: #FFF;
  padding: 0.85rem 2.5rem;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: block;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(179, 0, 32, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    max-width: 240px;
    padding: 0.8rem 0;
  }
`;

// Animation variants - optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SectionSEO 
        id="home"
        title="Vanilla Rubi - Strategy meets flow, Boldness meets classic, Intention meets income"
        description="A thriving business is an ecosystem. You just found your one-stop solution to integrate and balance every part of it. Creative strategy and business growth with soul."
        keywords="business growth, strategy, creative strategy, business ecosystem, flow, boldness, intention, income"
      />
      
      <LazyMotion features={domAnimation}>
        <HeroContainer 
          id="home"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          role="region"
          aria-label="Hero Section"
        >
          <PhraseRow>
            <LeftContent>
              <LeftHeadline aria-label={t('hero.strategyMeets')}>
                {t('hero.strategyMeets')}
              </LeftHeadline>
            </LeftContent>
            <RightContent>
              <RightHeadline aria-label={t('hero.flow')}>
                {t('hero.flow')}.
              </RightHeadline>
            </RightContent>
          </PhraseRow>
          
          <PhraseRow>
            <LeftContent>
              <LeftHeadline aria-label={t('hero.boldnessMeets')}>
                {t('hero.boldnessMeets')}
              </LeftHeadline>
            </LeftContent>
            <RightContent>
              <RightHeadline aria-label={t('hero.classic')}>
                {t('hero.classic')}.
              </RightHeadline>
            </RightContent>
          </PhraseRow>
          
          <PhraseRow>
            <LeftContent>
              <LeftHeadline aria-label={t('hero.intentionMeets')}>
                {t('hero.intentionMeets')}
              </LeftHeadline>
            </LeftContent>
            <RightContent>
              <RightHeadline aria-label={t('hero.income')}>
                {t('hero.income')}.
              </RightHeadline>
            </RightContent>
          </PhraseRow>
          
          <PhraseRow>
            <LeftContent>
              <LeftHeadline aria-label={t('hero.andYou')}>
                {t('hero.andYou')}
              </LeftHeadline>
            </LeftContent>
            <RightContent>
              <RightHeadline aria-label={t('hero.youMeetUs')}>
                {t('hero.youMeetUs')}!
              </RightHeadline>
            </RightContent>
          </PhraseRow>
          
          <SplitLayout>
            <LeftSection aria-hidden="true">
              <ContentGrid />
            </LeftSection>
            
            <RightSection>
              <ImageWrapper>
                <HeroImage 
                  src="/imagens/heroimg.jpg" 
                  alt="Creative strategy and business growth"
                  loading="eager"
                />
              </ImageWrapper>
            </RightSection>
          </SplitLayout>
          
          <BottomContent>
            <SubheadlineContainer variants={itemVariants}>
              <Subheadline role="doc-subtitle">
                {t('hero.subheadline')}
              </Subheadline>
            </SubheadlineContainer>
            
            <CTAButton 
              href="#contact" 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label={t('hero.cta')}
            >
              {t('hero.cta')}
            </CTAButton>
          </BottomContent>
        </HeroContainer>
      </LazyMotion>
    </>
  );
}; 