import styled from 'styled-components';
import brFlag from '../assets/br-flag.svg';
import ukFlag from '../assets/uk-flag.svg';
import esFlag from '../assets/es-flag.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const NavbarContainer = styled.nav`
  width: 100%;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6) var(--space-5) var(--space-5);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow var(--transition-normal), background var(--transition-normal);
  
  &.scrolled {
    box-shadow: var(--shadow-md);
    background: rgba(255, 255, 255, 0.98);
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
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--color-black);
  position: relative;
  padding-bottom: 0.1em;
  cursor: pointer;
  user-select: none;
  transition: color var(--transition-normal);
  white-space: nowrap;
  flex-shrink: 1;
  
  &:hover {
    .diamond {
      transform: rotate(-18deg) scale(1.13);
      filter: drop-shadow(0 0 6px rgba(230, 57, 70, 0.6));
    }
    
    .rubi {
      color: var(--color-primary-dark);
    }
  }
  
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 0.09rem;
    font-size: 1.1rem;
    padding-bottom: 0;
    min-width: 0;
  }
`;

const Vanilla = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  color: var(--color-black);
  display: inline;
`;

const Diamond = styled.span`
  display: inline-flex;
  align-items: baseline;
  transition: transform var(--transition-normal), filter var(--transition-normal);
  margin: 0 0.13em 0 0.13em;
  height: 1.1em;
  
  @media (max-width: 600px) {
    margin: 0 0.04em 0 0.04em;
    height: 0.85em;
    svg { 
      width: 11px; 
      height: 11px; 
    }
  }
`;

const Rubi = styled.span`
  font-family: 'Monument Extended', 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.13em;
  font-stretch: expanded;
  display: inline;
  transition: color var(--transition-normal);
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
  
  &:hover {
    background-color: var(--color-gray-100);
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
  background: var(--color-black);
  border-radius: var(--radius-sm);
  transition: all var(--transition-normal);
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-left: auto;
  margin-right: var(--space-3);
  
  @media (max-width: 1200px) {
    gap: var(--space-4);
    margin-right: var(--space-2);
  }
  
  @media (max-width: 900px) {
    gap: var(--space-3);
    margin-right: 0;
  }
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  color: var(--color-black);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 1.07em;
  letter-spacing: 0.01em;
  text-decoration: none;
  position: relative;
  transition: color var(--transition-normal);
  cursor: pointer;
  padding: var(--space-1) var(--space-1);
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
    position: absolute;
    left: 0;
    bottom: -2px;
    border-radius: var(--radius-sm);
    opacity: 0.7;
  }
  
  &:hover::after, &:focus-visible::after {
    width: 100%;
  }
  
  &:hover {
    color: var(--color-primary);
  }
`;

const MobileMenuOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  z-index: 9999;
  
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
`;

const MobileMenuLink = styled(motion.a)`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-black);
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
const overlayVariants = {
  closed: { opacity: 0, y: -20 },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.2,
      ease: "easeInOut" 
    }
  }
};

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

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
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

  const menuItems = [
    { id: 'about', label: t('navbar.about', 'About') },
    { id: 'services', label: t('navbar.services', 'Services') },
    { id: 'audience', label: t('navbar.audience', "Who It's For") },
    { id: 'contact', label: t('navbar.invitation', 'The Invitation') },
  ];

  return (
    <NavbarContainer className={isScrolled ? 'scrolled' : ''}>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Vanilla>vanilla</Vanilla>
        <Diamond className="diamond">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15" height="15" rx="2" transform="matrix(0.75 -0.65 0.75 0.65 0 7.5)" fill="#E63946"/>
          </svg>
        </Diamond>
        <Rubi className="rubi">rubi</Rubi>
      </Logo>

      <Menu>
        {menuItems.map((item) => (
          <MenuLink 
            key={item.id} 
            href={`#${item.id}`} 
            onClick={(e) => handleMenuClick(e, item.id)}
          >
            {item.label}
          </MenuLink>
        ))}
      </Menu>

      <NavLinks>
        <FlagButton onClick={() => handleLang('pt')} title="Português" $active={i18n.language === 'pt'}>
          <img src={brFlag} alt="Português" />
        </FlagButton>
        <FlagButton onClick={() => handleLang('en')} title="English" $active={i18n.language === 'en'}>
          <img src={ukFlag} alt="English" />
        </FlagButton>
        <FlagButton onClick={() => handleLang('es')} title="Español" $active={i18n.language === 'es'}>
          <img src={esFlag} alt="Español" />
        </FlagButton>

        <Hamburger onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Bar style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <Bar style={isMobileMenuOpen ? { opacity: 0 } : {}} />
          <Bar style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </Hamburger>
      </NavLinks>

      {isMobileMenuOpen && createPortal(
        <MobileMenuOverlay onClick={handleOverlayClick}>
          <MobileMenuContainer>
            {menuItems.map((item, i) => (
              <MobileMenuLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleMenuClick(e, item.id)}
                custom={i}
                variants={linkVariants}
                initial="closed"
                animate="open"
              >
                {item.label}
              </MobileMenuLink>
            ))}
          </MobileMenuContainer>
        </MobileMenuOverlay>,
        document.body
      )}
    </NavbarContainer>
  );
};