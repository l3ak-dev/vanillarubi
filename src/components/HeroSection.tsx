import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionHeroContainer = styled(motion.section)`
  scroll-margin-top: 90px;
  min-height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: var(--color-white);
  padding: 0 5rem;
  gap: 4.5rem;
  @media (max-width: 1200px) {
    padding: 0 2.5rem;
    gap: 2.2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2.2rem 1.2rem 1.2rem 1.2rem;
    gap: 1.2rem;
    min-height: unset;
  }
  @media (max-width: 600px) {
    display: block;
    padding: 0;
    min-height: unset;
    background: var(--color-white);
  }
`;

const MobileImageWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    background: var(--color-gray);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    overflow: hidden;
    height: 220px;
    max-height: 220px;
  }
`;

const MobileProfileImg = styled(motion.img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

const HeroContent = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100vw;
    padding: 2.2rem 1.2rem 2.7rem 1.2rem;
    position: relative;
    background: url('https://plus.unsplash.com/premium_photo-1673758900733-b7b5b031341b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center top/cover no-repeat;
    color: var(--color-black);
    z-index: 2;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      position: absolute;
      inset: 0; 
      background: rgba(255,255,255,0.88);
      z-index: 1;
      border-radius: 0;
    }
    > * {
      position: relative;
      z-index: 2;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  min-height: 480px;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    min-height: unset;
  }
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    gap: 1.1rem;
    margin-bottom: 2.2rem;
  }
`;

const Headline = styled(motion.h1)`
  font-size: 3.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 2.2rem;
    line-height: 1.13;
  }
  @media (max-width: 600px) {
    font-size: 1.68rem;
    line-height: 1.22;
    margin-bottom: 1.1rem;
    margin-top: 1.1rem;
    text-align: center;
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
    border-radius: 1px;
    opacity: 0.18;
    transition: width 0.3s cubic-bezier(.4,0,.2,1);
  }
`;

const Subheadline = styled(motion.p)`
  font-size: 1.18rem;
  color: var(--color-dark-gray);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  max-width: 420px;
  margin-bottom: 1.7rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.08rem;
    margin-bottom: 2.2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 95vw;
    line-height: 1.6;
  }
`;

const CTAButton = styled(motion.a)`
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-black) 100%);
  color: var(--color-white);
  padding: 1.1rem 2.5rem;
  border-radius: 40px;
  font-size: 1.13rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 24px rgba(24,24,27,0.07);
  transition: background 0.3s cubic-bezier(.4,0,.2,1), transform 0.2s cubic-bezier(.4,0,.2,1);
  cursor: pointer;
  border: none;
  text-decoration: none;
  margin-top: 0.7rem;
  margin-bottom: 1.7rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    display: block;
    font-size: 1.01rem;
    padding: 1.1rem 0;
    margin-top: 2.2rem;
    margin-bottom: 2.1rem;
    border-radius: 32px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  width: 420px;
  max-width: 38vw;
  height: 520px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(24,24,27,0.10);
  background: var(--color-gray);
  @media (max-width: 1200px) {
    width: 320px;
    height: 380px;
    max-width: 48vw;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

// Hook para detectar mobile
function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const ResponsiveHeadline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Headline>
      {t('hero.strategyMeets')}<br /><Highlight>{t('hero.flow')}</Highlight><br />
      {t('hero.boldnessMeets')}<br /><Highlight>{t('hero.classic')}</Highlight><br />
      {t('hero.intentionMeets')}<br /><Highlight>{t('hero.income')}</Highlight><br />
      {t('hero.andYou')}<br /><Highlight>{t('hero.youMeetUs')}</Highlight>
    </Headline>
  );
};

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MotionHeroContainer
      id="about"
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <HeroContent>
        <Left>
          <ResponsiveHeadline />
          <Subheadline>
            {t('hero.subheadline')}
          </Subheadline>
          <CTAButton
            as={motion.a}
            href="#book-call"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.cta')}
          </CTAButton>
        </Left>
      </HeroContent>
      <Right>
        <DesktopImage
          src="https://plus.unsplash.com/premium_photo-1673758900733-b7b5b031341b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Editorial business portrait"
        />
      </Right>
    </MotionHeroContainer>
  );
}; 