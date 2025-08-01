import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// Assets
import brFlag from '../assets/br-flag.svg';
import ukFlag from '../assets/uk-flag.svg';
import esFlag from '../assets/es-flag.svg';

// Styled Components
const NavbarContainer = styled.nav`
  width: 100%;
  background: var(--color-primary);
  border-bottom: 1px solid rgba(220, 201, 182, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6) var(--space-5) var(--space-5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 120;
  transition: box-shadow var(--transition-normal), background var(--transition-normal);
  will-change: transform;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  height: 80px;
  box-sizing: border-box;
  
  &.scrolled {
    box-shadow: var(--shadow-md);
    background: rgba(128, 0, 32, 0.98);
    backdrop-filter: blur(8px);
  }
  
  @media (max-width: 1200px) {
    padding: var(--space-4) var(--space-4);
  }
  
  @media (max-width: 900px) {
    padding: var(--space-3) var(--space-3);
  }
  
  @media (max-width: 600px) {
    padding: var(--space-3) var(--space-2);
    min-height: 64px;
    height: 64px;
    position: fixed;
    width: 100%;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--color-white);
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: color var(--transition-normal);
  white-space: nowrap;
  flex-shrink: 0;
  height: 100%;
  
  &:hover {
    .diamond {
      transform: rotate(-18deg) scale(1.13);
      filter: drop-shadow(0 0 6px rgba(220, 201, 182, 0.6));
    }
    
    .rubi {
      color: var(--color-secondary);
    }
  }
  
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 0.09rem;
    font-size: 1.1rem;
    min-width: 0;
  }
`;

const Vanilla = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: var(--color-white);
  display: inline-block;
  line-height: 1;
`;

const Diamond = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal), filter var(--transition-normal);
  margin: 0 0.13em 0 0.13em;
  line-height: 1;
  
  @media (max-width: 600px) {
    margin: 0 0.04em 0 0.04em;
    svg { 
      width: 11px; 
      height: 11px; 
    }
  }
`;

const Rubi = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.13em;
  font-stretch: expanded;
  display: inline-block;
  transition: color var(--transition-normal);
  line-height: 1;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  @media (max-width: 600px) {
    gap: var(--space-1);
  }
`;

const FlagButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  padding: var(--space-1);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), opacity 0.18s, filter 0.18s;
  opacity: ${props => props.$active ? '1' : '0.45'};
  filter: ${props => props.$active ? 'none' : 'grayscale(0.4)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
    opacity: 1;
    filter: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: var(--radius-sm);
    transition: filter var(--transition-fast);
    @media (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover img {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
  margin-left: auto;
  z-index: 120;
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  height: 40px;
  width: 40px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.22em;
  }
`;

const Bar = styled.span`
  display: block;
  width: 22px;
  height: 2.5px;
  background: var(--color-white);
  border-radius: var(--radius-sm);
  transition: all var(--transition-normal);
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--color-gray-100);
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: var(--space-1) var(--space-1);
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--color-secondary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-secondary);
    transition: width var(--transition-normal);
    border-radius: var(--radius-sm);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: var(--color-accent);
  backdrop-filter: blur(8px);
  z-index: 115;
  top: 64px;
  height: calc(100vh - 64px);
  overflow: auto;
  
  @media (min-width: 601px) {
    display: none;
  }
`;

const MobileMenuContainer = styled(motion.div)`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  padding: 2rem 1rem;
  background: transparent;
`;

const MobileMenuLink = styled(motion.a)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-primary);
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
    position: absolute;
    left: 0;
    bottom: -4px;
    border-radius: var(--radius-sm);
    opacity: 0.7;
  }
  
  &:hover::after, &:focus-visible::after {
    width: 100%;
  }
`;

// Animation variants
const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect handler
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Handlers
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Usar contact-mobile em vez de contact no mobile
    const targetId = id === 'contact' && window.innerWidth <= 600 ? 'contact-mobile' : id;
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Menu items data
  const menuItems = [
    { id: 'who', label: t('navbar.about') },
    { id: 'services', label: t('navbar.services') },
    { id: 'audience', label: t('navbar.audience') },
    { id: 'contact', label: t('navbar.invitation') },
  ];

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <meta name="description" content={t('seo.description')} />
        <link rel="canonical" href="https://vanillarubi.eu" />
      </Helmet>
      
      <header>
        <NavbarContainer className={isScrolled ? 'scrolled' : ''} role="navigation" aria-label="Main Navigation">
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Vanilla Rubi - Home">
            <Vanilla>vanilla</Vanilla>
            <Diamond className="diamond">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="15" height="15" rx="2" transform="matrix(0.75 -0.65 0.75 0.65 0 7.5)" fill="#E63946"/>
              </svg>
            </Diamond>
            <Rubi className="rubi">rubi</Rubi>
          </Logo>

          <Menu aria-label="Desktop Menu">
            {menuItems.map((item) => (
              <NavLink 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleMenuClick(e, item.id)}
              >
                {item.label}
              </NavLink>
            ))}
          </Menu>

          <NavLinks>
            <FlagButton onClick={() => handleLang('en')} $active={i18n.language === 'en'} title="Change to English">
              <img src={ukFlag} alt="English" />
            </FlagButton>
            <FlagButton onClick={() => handleLang('es')} $active={i18n.language === 'es'} title="Cambiar a Español">
              <img src={esFlag} alt="Spanish" />
            </FlagButton>
            <FlagButton onClick={() => handleLang('pt')} $active={i18n.language === 'pt'} title="Mudar para Português">
              <img src={brFlag} alt="Portuguese" />
            </FlagButton>
          </NavLinks>

          <Hamburger 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </NavbarContainer>
      </header>

      {isMobileMenuOpen && createPortal(
        <MobileMenuOverlay onClick={handleOverlayClick}>
          <MobileMenuContainer
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {menuItems.map((item, index) => (
              <MobileMenuLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleMenuClick(e, item.id)}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                custom={index}
              >
                {item.label}
              </MobileMenuLink>
            ))}
          </MobileMenuContainer>
        </MobileMenuOverlay>,
        document.body
      )}
    </>
  );
};
