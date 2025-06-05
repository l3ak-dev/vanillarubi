import React from 'react';
import styled from 'styled-components';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionSEO } from './SectionSEO';

// Container principal com altura total da tela
const MobileContainer = styled(motion.section)`
  scroll-margin-top: 70px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// Seção principal com a imagem de fundo
const HeroBackground = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #800020;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(128, 0, 32, 0.3) 0%,
      rgba(128, 0, 32, 0.6) 50%,
      rgba(128, 0, 32, 0.85) 100%
    );
    z-index: 1;
  }
`;

// Imagem hero como background
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.9) contrast(1.1);
  will-change: transform;
`;

// Container para o conteúdo sobreposto
const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.5rem 3.5rem;
  z-index: 2;
`;

// Container para as frases
const PhrasesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
  margin-bottom: 2rem;
`;

// Linha de frase individual
const PhraseRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1.4rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

// Primeira parte da frase
const LeftPhrase = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: clamp(1.9rem, 6.5vw, 2.7rem);
  color: #ffffff;
  line-height: 1;
  margin: 0;
  padding-right: 5px;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  
  ${PhraseRow}:nth-child(4) & {
    font-size: clamp(2.2rem, 7vw, 3rem);
    font-weight: 500;
  }
`;

// Segunda parte da frase
const RightPhrase = styled.span`
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  font-size: clamp(1.9rem, 6.5vw, 2.7rem);
  color: #F3EBE2;
  line-height: 1;
  font-style: italic;
  margin: 0;
  padding-left: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  
  ${PhraseRow}:nth-child(4) & {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(2.2rem, 7vw, 3rem);
    color: #F3EBE2;
  }
`;

// Separador decorativo
const Decorator = styled.div`
  width: 60px;
  height: 1px;
  background-color: #F3EBE2;
  margin: 1.5rem auto 2.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #F3EBE2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Subtítulo
const Subheadline = styled(motion.p)`
  font-size: clamp(1.1rem, 4.8vw, 1.4rem);
  color: #F3EBE2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto 2.5rem;
  text-align: center;
  max-width: 90%;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

// Botão CTA
const CTAButton = styled(motion.a)`
  background: #B30020;
  color: #FFF;
  padding: 0.8rem 0;
  border-radius: 0;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #F3EBE2;
  text-decoration: none;
  display: block;
  width: 100%;
  max-width: 240px;
  margin: 0 auto 1.5rem;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

// Indicador de scroll
const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  color: #F3EBE2;
  opacity: 0.8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
  
  &::after {
    content: '';
    width: 1px;
    height: 25px;
    background: #F3EBE2;
    margin-top: 8px;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scaleY(1);
      opacity: 0.8;
    }
    50% {
      transform: scaleY(0.7);
      opacity: 0.5;
    }
    100% {
      transform: scaleY(1);
      opacity: 0.8;
    }
  }
`;

// Animações - otimizadas para performance
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
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.08
    }
  })
};

export const MobileHeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SectionSEO 
        id="home-mobile"
        title="Vanilla Rubi Mobile - Business Growth Agency"
        description="Strategy meets flow, Boldness meets classic, Intention meets income. A thriving business is an ecosystem - discover your one-stop solution for business growth."
        keywords="mobile, business growth, strategy, creative strategy, business ecosystem, flow, boldness, intention"
      />
    
      <LazyMotion features={domAnimation}>
        <MobileContainer 
          id="home-mobile"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          role="region"
          aria-label="Mobile Hero Section"
        >
          <HeroBackground>
            <HeroImage 
              src="/imagens/heroimg.jpg" 
              alt="Creative strategy and business growth"
              loading="eager"
              width="640"
              height="960"
            />
            <ContentOverlay>
              <PhrasesContainer variants={containerVariants}>
                <motion.div custom={1} variants={itemVariants}>
                  <PhraseRow>
                    <LeftPhrase aria-label={t('hero.strategyMeets')}>
                      {t('hero.strategyMeets')}
                    </LeftPhrase>
                    <RightPhrase aria-label={t('hero.flow')}>
                      {t('hero.flow')}.
                    </RightPhrase>
                  </PhraseRow>
                </motion.div>
                
                <motion.div custom={2} variants={itemVariants}>
                  <PhraseRow>
                    <LeftPhrase aria-label={t('hero.boldnessMeets')}>
                      {t('hero.boldnessMeets')}
                    </LeftPhrase>
                    <RightPhrase aria-label={t('hero.classic')}>
                      {t('hero.classic')}.
                    </RightPhrase>
                  </PhraseRow>
                </motion.div>
                
                <motion.div custom={3} variants={itemVariants}>
                  <PhraseRow>
                    <LeftPhrase aria-label={t('hero.intentionMeets')}>
                      {t('hero.intentionMeets')}
                    </LeftPhrase>
                    <RightPhrase aria-label={t('hero.income')}>
                      {t('hero.income')}.
                    </RightPhrase>
                  </PhraseRow>
                </motion.div>
                
                <motion.div custom={4} variants={itemVariants}>
                  <PhraseRow>
                    <LeftPhrase aria-label={t('hero.andYou')}>
                      {t('hero.andYou')}
                    </LeftPhrase>
                    <RightPhrase aria-label={t('hero.youMeetUs')}>
                      {t('hero.youMeetUs')}!
                    </RightPhrase>
                  </PhraseRow>
                </motion.div>
                
                <motion.div custom={5} variants={itemVariants}>
                  <Decorator role="presentation" aria-hidden="true" />
                </motion.div>
                
                <Subheadline 
                  custom={6} 
                  variants={itemVariants}
                  role="doc-subtitle"
                >
                  {t('hero.subheadline')}
                </Subheadline>
                
                <CTAButton 
                  href="#contact-mobile" 
                  custom={7}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  role="button"
                  aria-label={t('hero.cta')}
                >
                  {t('hero.cta')}
                </CTAButton>
              </PhrasesContainer>
              
              <ScrollIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1, duration: 0.5 }}
                aria-hidden="true"
              >
                {t('hero.scroll')}
              </ScrollIndicator>
            </ContentOverlay>
          </HeroBackground>
        </MobileContainer>
      </LazyMotion>
    </>
  );
}; 