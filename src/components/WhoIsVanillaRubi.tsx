import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  background: var(--color-white);
  color: var(--color-black);
  padding: 6rem 0 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 3.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.2rem 2.2rem 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 3.2rem 1.2rem 2.7rem 1.2rem;
    display: block;
    border-top: 1.5px solid #ececec;
  }
`;

const MotionDiv = styled(motion.div)``;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-black);
  margin-top: 2.7rem;
  margin-bottom: 0.7rem;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 2rem;
    margin-top: 1.7rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.22rem;
    margin-top: 1.1rem;
    margin-bottom: 1.2rem;
    text-align: center;
    .accent-font {
      color: var(--color-primary);
      letter-spacing: 0.04em;
      font-weight: 700;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 1.1rem;
  }
  @media (max-width: 600px) {
    gap: 1.3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.13rem;
  font-family: 'Inter', sans-serif;
  color: var(--color-dark-gray);
  line-height: 1.7;
  max-width: 520px;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    color: #444;
    margin-bottom: 1.3rem;
    max-width: 100vw;
    line-height: 1.7;
  }
`;

const Trinium = styled(motion.div)`
  font-size: 1.08rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--color-primary);
  margin-top: 1.7rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-top: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.01rem;
    margin-top: 1.7rem;
  }
`;

export const WhoIsVanillaRubi: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="container" id="about">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <Title
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {t('who.title1')} <span className="accent-font">Vanilla Rubi</span>{t('who.title2')}
        </Title>
        <Content>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="accent-font">{t('who.agency')}</span>{t('who.desc1a')}<span className="accent-font">{t('who.trio')}</span>{t('who.desc1b')}
          </Description>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t('who.desc2a')} <span className="accent-font">{t('who.triniumSystem')}</span>{t('who.desc2b')}<span className="accent-font">{t('who.bodyMindSoul')}</span>{t('who.desc2c')}
          </Description>
          <Trinium
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t('who.trinium')}
          </Trinium>
        </Content>
      </MotionDiv>
    </Section>
  );
}; 