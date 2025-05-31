import React from 'react';
import styled from 'styled-components';
import brFlag from '../assets/br-flag.svg';
import ukFlag from '../assets/uk-flag.svg';
import esFlag from '../assets/es-flag.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const NavbarContainer = styled.nav`
  width: 100%;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.1rem 3.5rem 2.1rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.25s cubic-bezier(.4,0,.2,1), background 0.25s cubic-bezier(.4,0,.2,1);
  &.scrolled {
    box-shadow: 0 4px 18px rgba(24,24,27,0.07);
    background: var(--color-white);
  }
  @media (max-width: 1200px) {
    padding: 1.5rem 1.7rem 1.5rem 1.2rem;
  }
  @media (max-width: 900px) {
    padding: 1.1rem 1.2rem 1.1rem 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 1.3rem 0.7rem 1.3rem 0.7rem;
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
  transition: color 0.2s;
  white-space: nowrap;
  flex-shrink: 1;
  &:hover .diamond {
    transform: rotate(-18deg) scale(1.13);
    filter: drop-shadow(0 0 6px #e63946aa);
  }
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 0.09rem;
    font-size: 0.97rem;
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
  transition: transform 0.22s cubic-bezier(.4,0,.2,1), filter 0.22s;
  margin: 0 0.13em 0 0.13em;
  height: 1.1em;
  @media (max-width: 600px) {
    margin: 0 0.04em 0 0.04em;
    height: 0.85em;
    svg { width: 11px; height: 11px; }
  }
`;

const Rubi = styled.span`
  font-family: 'Monument Extended', 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.13em;
  font-stretch: expanded;
  display: inline;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const FlagButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3em 0.5em;
  margin-left: auto;
  z-index: 120;
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
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 1.2rem;
  @media (max-width: 1200px) {
    gap: 1.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 900px) {
    gap: 1.1rem;
    margin-right: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  color: var(--color-black);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  font-size: 1.07em;
  letter-spacing: 0.01em;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  cursor: pointer;
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

const MobileMenuOverlay = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: var(--color-white);
  z-index: 200;
  @media (min-width: 601px) {
    display: none;
  }
`;

const MobileMenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;
`;

const MobileMenuLink = styled.a`
  color: var(--color-black);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  cursor: pointer;
  &:hover, &:focus-visible {
    color: var(--color-primary);
  }
`;

export const Navbar: React.FC = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language;
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha menu mobile ao redimensionar para desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 600) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scroll suave ao clicar
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false); // fecha menu mobile se aberto
  };

  // Fecha menu ao clicar fora
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setMobileMenuOpen(false);
  };

  const handleLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <Logo>
        <Vanilla>VANILLA</Vanilla>
        <Diamond className="diamond">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="9,2 16,9 9,16 2,9" fill="#E63946" />
            <polyline points="9,2 9,16" stroke="#fff" strokeWidth="1.2" />
            <polyline points="2,9 16,9" stroke="#fff" strokeWidth="1.2" />
            <polyline points="5.5,5.5 12.5,12.5" stroke="#fff" strokeWidth="1" />
            <polyline points="12.5,5.5 5.5,12.5" stroke="#fff" strokeWidth="1" />
          </svg>
        </Diamond>
        <Rubi>RUBI</Rubi>
      </Logo>
      <Menu>
        <MenuLink href="#about" onClick={e => handleMenuClick(e, 'about')}>{t('navbar.about')}</MenuLink>
        <MenuLink href="#services" onClick={e => handleMenuClick(e, 'services')}>{t('navbar.services')}</MenuLink>
        <MenuLink href="#audience" onClick={e => handleMenuClick(e, 'audience')}>{t('navbar.audience')}</MenuLink>
        <MenuLink href="#contact" onClick={e => handleMenuClick(e, 'contact')}>{t('navbar.invitation')}</MenuLink>
      </Menu>
      <Hamburger aria-label="Abrir menu" tabIndex={0} onClick={() => setMobileMenuOpen(true)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenuOverlay
            onClick={handleOverlayClick}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <MobileMenuLinks>
              <MobileMenuLink href="#about" onClick={e => handleMenuClick(e, 'about')}>{t('navbar.about')}</MobileMenuLink>
              <MobileMenuLink href="#services" onClick={e => handleMenuClick(e, 'services')}>{t('navbar.services')}</MobileMenuLink>
              <MobileMenuLink href="#audience" onClick={e => handleMenuClick(e, 'audience')}>{t('navbar.audience')}</MobileMenuLink>
              <MobileMenuLink href="#contact" onClick={e => handleMenuClick(e, 'contact')}>{t('navbar.invitation')}</MobileMenuLink>
            </MobileMenuLinks>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
      <NavLinks>
        <FlagButton onClick={() => handleLang('pt')} aria-label="Português" style={{ opacity: currentLang === 'pt' ? 1 : 0.5 }}>
          <img src={brFlag} alt="Português" width={24} height={16} />
        </FlagButton>
        <FlagButton onClick={() => handleLang('en')} aria-label="English" style={{ opacity: currentLang === 'en' ? 1 : 0.5 }}>
          <img src={ukFlag} alt="English" width={24} height={16} />
        </FlagButton>
        <FlagButton onClick={() => handleLang('es')} aria-label="Español" style={{ opacity: currentLang === 'es' ? 1 : 0.5 }}>
          <img src={esFlag} alt="Español" width={24} height={16} />
        </FlagButton>
      </NavLinks>
    </NavbarContainer>
  );
};