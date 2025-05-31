import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: var(--color-white);
  color: var(--color-dark-gray);
  padding: 2.2rem 2rem 1.1rem 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  border-top: 1px solid var(--color-gray);
  @media (max-width: 900px) {
    padding: 1.3rem 1.1rem 0.7rem 1.1rem;
  }
  @media (max-width: 600px) {
    padding: 0.7rem 0.5rem 0.3rem 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  margin-bottom: 0.7rem;
  @media (max-width: 900px) {
    gap: 1.1rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 600px) {
    gap: 0.6rem;
    margin-bottom: 0.2rem;
  }
`;

const SocialIcon = styled.a`
  color: var(--color-dark-gray);
  font-size: 1.3rem;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--color-primary);
    transform: scale(1.13);
  }
  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
  @media (max-width: 600px) {
    font-size: 0.93rem;
  }
`;

const Separator = styled.div`
  width: 100%;
  max-width: 120px;
  height: 1px;
  background: linear-gradient(90deg, #fff 0%, #ececec 40%, #ececec 60%, #fff 100%);
  margin: 0.7rem auto 0.7rem auto;
  opacity: 0.7;
`;

const Legal = styled.div`
  font-size: 0.85rem;
  color: #b0b0b0;
  margin-top: 1.1rem;
  letter-spacing: 0.01em;
  @media (max-width: 900px) {
    font-size: 0.78rem;
    margin-top: 0.7rem;
  }
  @media (max-width: 600px) {
    font-size: 0.71rem;
    margin-top: 0.4rem;
  }
`;

const LegalLink = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  font-size: inherit;
  position: relative;
  transition: color 0.2s;
  &:hover, &:focus-visible {
    color: var(--color-primary);
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s cubic-bezier(.4,0,.2,1);
    position: absolute;
    left: 0;
    bottom: -2px;
    border-radius: 1px;
    opacity: 0.7;
  }
  &:hover::after, &:focus-visible::after {
    width: 100%;
  }
`;

const iconStyle = { width: 22, height: 22 };

export const Footer: React.FC = () => (
  <FooterContainer
    className="container"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    viewport={{ once: true }}
  >
    <SocialLinks>
      <SocialIcon href="https://instagram.com/vanillarubi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg {...iconStyle} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
      </SocialIcon>
      <SocialIcon href="mailto:contato@vanillarubi.com" aria-label="Email">
        <svg {...iconStyle} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><polyline points="22,6 12,13 2,6"/></svg>
      </SocialIcon>
      <SocialIcon href="https://linkedin.com/company/vanillarubi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg {...iconStyle} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/></svg>
      </SocialIcon>
    </SocialLinks>
    <Separator />
    <Legal>
      © {new Date().getFullYear()} Vanilla Rubi. All rights reserved. &nbsp;|&nbsp;
      <LegalLink href="#terms">Terms</LegalLink> &nbsp;|&nbsp;
      <LegalLink href="#privacy">Privacy</LegalLink>
    </Legal>
  </FooterContainer>
); 