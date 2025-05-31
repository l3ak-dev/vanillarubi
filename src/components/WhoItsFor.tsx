import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-white);
  color: var(--color-black);
  padding: 6rem 0 5rem 0;
  @media (max-width: 900px) {
    padding: 3rem 1.2rem 2.2rem 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 2.2rem 0.7rem 1.2rem 0.7rem;
  }
`;

const MotionDiv = styled(motion.div)``;

const Title = styled(motion.h2)`
  font-size: 2.1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  margin-top: 2.7rem;
  margin-bottom: 3.2rem;
  letter-spacing: -0.01em;
  text-align: left;
  @media (max-width: 900px) {
    margin-top: 1.7rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    margin-top: 1.1rem;
    font-size: 1.13rem;
    margin-bottom: 1.1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  @media (max-width: 900px) {
    gap: 1.1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }
`;

const ListItem = styled(motion.li)`
  font-size: 1.13rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  color: var(--color-black);
  @media (max-width: 900px) {
    font-size: 1rem;
    gap: 0.7rem;
  }
  @media (max-width: 600px) {
    font-size: 0.97rem;
    gap: 0.5rem;
  }
`;

const BulletIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  @media (max-width: 900px) {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
  }
  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }
`;

const Impact = styled(motion.div)`
  font-size: 1.18rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--color-primary);
  margin-top: 2.7rem;
  font-weight: 600;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.05rem;
    margin-top: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 0.97rem;
    margin-top: 0.7rem;
  }
`;

const BulletSVG = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7.5"/></svg>
);

export const WhoItsFor: React.FC = () => {
  const { t, i18n } = useTranslation();
  const bullets = i18n.t('whoItsFor.bullets', { returnObjects: true }) as string[];
  return (
    <Section className="container" id="audience">
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
          {t('whoItsFor.title')}
        </Title>
        <List>
          {bullets.map((item, idx) => (
            <ListItem
              key={item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BulletIcon>{BulletSVG}</BulletIcon>
              {item}
            </ListItem>
          ))}
        </List>
        <Impact
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {t('whoItsFor.impact')}
        </Impact>
      </MotionDiv>
    </Section>
  );
}; 