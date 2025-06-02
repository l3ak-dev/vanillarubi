import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroContainer = styled(motion.section)`
  scroll-margin-top: 90px;
  min-height: 85vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: var(--color-white);
  padding: var(--space-9) var(--space-7);
  gap: var(--space-8);
  
  @media (max-width: 1200px) {
    padding: var(--space-6) var(--space-5);
    gap: var(--space-5);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: var(--space-5) var(--space-3);
    gap: var(--space-3);
    min-height: unset;
  }
  
  @media (max-width: 600px) {
    padding: var(--space-3);
    min-height: unset;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  @media (max-width: 900px) {
    order: 2;
    margin-top: var(--space-5);
  }
  
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 900px) {
    order: 1;
    width: 100%;
  }
`;

const Headline = styled(motion.h1)<{ $lang?: string }>`
  font-size: ${({ $lang }) =>
    $lang === 'pt' || $lang === 'es'
      ? 'clamp(2.3rem, 5vw, 3.7rem)'
      : 'clamp(2.5rem, 5vw, 4rem)'};
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-3);
  
  @media (max-width: 900px) {
    margin-bottom: var(--space-2);
  }
  
  @media (max-width: 600px) {
    margin-bottom: var(--space-3);
  }
`;

const Highlight = styled(motion.span)`
  color: var(--color-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.22em;
    background: var(--color-primary);
    position: absolute;
    left: 0;
    bottom: 0.08em;
    border-radius: var(--radius-sm);
    opacity: 0.18;
    transition: width var(--transition-normal);
  }
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: var(--color-gray-700);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  max-width: 480px;
  margin-bottom: var(--space-4);
  line-height: 1.6;
  
  @media (max-width: 900px) {
    margin-bottom: var(--space-3);
    max-width: 90%;
  }
  
  @media (max-width: 600px) {
    margin-bottom: var(--space-5);
    max-width: 100%;
    text-align: center;
  }
`;

const CTAButton = styled(motion.a)`
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-2xl);
  font-size: 1.1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-md), 0 8px 24px rgba(230,57,70,0.16);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg), 0 12px 28px rgba(230,57,70,0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-md), 0 6px 16px rgba(230,57,70,0.2);
  }
  
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: var(--space-2) var(--space-4);
  }
  
  @media (max-width: 600px) {
    width: 100%;
    padding: var(--space-3) 0;
    border-radius: var(--radius-xl);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 90%;
  height: 520px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(210deg, rgba(230,57,70,0.08) 0%, rgba(24,24,27,0.02) 100%);
    z-index: 1;
  }
  
  @media (max-width: 1200px) {
    height: 460px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: 600px) {
    height: 300px;
    border-radius: var(--radius-lg);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-slow);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const HeadlineLine = styled.span`
  display: inline-flex;
  align-items: flex-end;
  gap: 0.5ch;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};



export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <HeroContainer 
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ContentSection>
        <Headline variants={itemVariants} $lang={i18n.language}>
          <HeadlineLine>
            {t('hero.strategyMeets')}
            <Highlight>{t('hero.flow')}</Highlight>
          </HeadlineLine>
          <HeadlineLine>
            {t('hero.boldnessMeets')}
            <Highlight>{t('hero.classic')}</Highlight>
          </HeadlineLine>
          <HeadlineLine>
            {t('hero.intentionMeets')}
            <Highlight>{t('hero.income')}</Highlight>
          </HeadlineLine>
          <HeadlineLine>
            {t('hero.andYou')}
            <Highlight>{t('hero.youMeetUs')}</Highlight>
          </HeadlineLine>
        </Headline>
        
        <Subheadline variants={itemVariants}>
          {t('hero.subheadline')}
        </Subheadline>
        
        <CTAButton 
          href="#contact" 
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('hero.cta')}
        </CTAButton>
      </ContentSection>
      
      <ImageSection>
        <ImageContainer variants={imageVariants}>
          <HeroImage 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Vanilla Rubi - Brand Strategy"
          />
        </ImageContainer>
      </ImageSection>
    </HeroContainer>
  );
}; 