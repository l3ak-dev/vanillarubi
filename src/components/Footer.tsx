import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: var(--color-primary-dark);
  color: var(--color-gray-300);
  padding: var(--space-9) var(--space-5) var(--space-5) var(--space-5);
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(220, 201, 182, 0.05) 0%,
      rgba(220, 201, 182, 0.3) 50%,
      rgba(220, 201, 182, 0.05) 100%
    );
  }
  
  @media (max-width: 900px) {
    padding: var(--space-7) var(--space-4) var(--space-4) var(--space-4);
  }
  
  @media (max-width: 600px) {
    padding: var(--space-6) var(--space-3) var(--space-3) var(--space-3);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: var(--space-8);
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  letter-spacing: 0.1em;
  color: var(--color-white);
  margin-bottom: var(--space-4);
  position: relative;
`;

const Vanilla = styled.span`
  font-weight: 400;
`;

const Diamond = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0.1em;
  height: 0.8em;
`;

const Rubi = styled.span`
  font-weight: 700;
  color: var(--color-secondary);
`;

const CompanyDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-gray-300);
  max-width: 320px;
  margin-bottom: var(--space-5);
  font-weight: 300;
`;

const FooterHeading = styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--color-white);
  margin-bottom: var(--space-4);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 1px;
    background: var(--color-secondary);
    opacity: 0.5;
  }
  
  @media (max-width: 600px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const FooterLink = styled.a`
  color: var(--color-gray-300);
  font-size: 0.95rem;
  text-decoration: none;
  transition: all var(--transition-normal);
  position: relative;
  width: fit-content;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-secondary);
    transition: width var(--transition-normal);
  }
  
  &:hover {
    color: var(--color-secondary);
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-3);
  
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: var(--color-gray-300);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0;
  background: transparent;
  border: 1px solid rgba(220, 201, 182, 0.2);
  
  &:hover {
    color: var(--color-secondary);
    transform: translateY(-3px);
    border-color: var(--color-secondary);
    
    svg {
      transform: scale(1.1);
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-normal);
  }
`;

const BottomBar = styled.div`
  margin-top: var(--space-8);
  padding-top: var(--space-5);
  border-top: 1px solid rgba(220, 201, 182, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--color-gray-500);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 900px) {
    margin-top: var(--space-6);
    padding-top: var(--space-4);
    flex-direction: column;
    gap: var(--space-3);
  }
`;

const Copyright = styled.div`
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-3);
  }
`;

const LegalLink = styled.a`
  color: var(--color-gray-400);
  text-decoration: none;
  transition: color var(--transition-normal);
  font-size: 0.85rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-gray-300);
    transition: width var(--transition-normal);
  }
  
  &:hover {
    color: var(--color-secondary);
    
    &::after {
      width: 100%;
    }
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const Footer: React.FC = () => (
  <FooterContainer
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    <FooterContent>
      <FooterColumn as={motion.div} variants={itemVariants}>
        <Logo>
          <Vanilla>vanilla</Vanilla>
          <Diamond>
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="15" height="15" rx="2" transform="matrix(0.75 -0.65 0.75 0.65 0 7.5)" fill="#DCC9B6"/>
            </svg>
          </Diamond>
          <Rubi>rubi</Rubi>
        </Logo>
        <CompanyDescription>
          A multidimensional business growth agency for entrepreneurs ready to scale with clarity, creativity, and soul.
        </CompanyDescription>
        <SocialLinks>
          <SocialIcon href="https://www.instagram.com/vanilla_rubi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </SocialIcon>
          <SocialIcon href="mailto:hello@vanillarubi.eu" aria-label="Email">
            <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><polyline points="22,6 12,13 2,6"/></svg>
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/company/vanillarubi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </SocialIcon>
        </SocialLinks>
      </FooterColumn>
      
      <FooterColumn as={motion.div} variants={itemVariants}>
        <FooterHeading>Navigation</FooterHeading>
        <FooterLinks>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#audience">Who It's For</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
      </FooterColumn> 
      
      <FooterColumn as={motion.div} variants={itemVariants}>
        <FooterHeading>Contact</FooterHeading>
        <FooterLinks>
          <FooterLink href="mailto:hello@vanillarubi.com">hello@vanillarubi.com</FooterLink>
          <FooterLink href="https://instagram.com/vanillarubi" target="_blank" rel="noopener noreferrer">@vanillarubi</FooterLink>
        </FooterLinks>
      </FooterColumn>
    </FooterContent>
    
    <BottomBar as={motion.div} variants={itemVariants}>
      <Copyright>
        © {new Date().getFullYear()} Vanilla Rubi. All rights reserved.
      </Copyright>
      <LegalLinks>
        <LegalLink href="#terms">Terms</LegalLink>
        <LegalLink href="#privacy">Privacy</LegalLink>
        <LegalLink href="#cookies">Cookies</LegalLink>
      </LegalLinks>
    </BottomBar>
  </FooterContainer>
); 