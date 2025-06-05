import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors - adaptadas para o novo tema burgundy */
    --color-primary: #800020; /* Burgundy como cor primária */
    --color-primary-light: #A5324D; /* Burgundy mais claro */
    --color-primary-dark: #5A0016; /* Burgundy mais escuro */
    --color-secondary: #DCC9B6; /* Tom bege claro para contraste */
    --color-accent: #F3EBE2; /* Bege muito claro/quase branco */
    --color-black: #1A1A1A; /* Preto suave */
    --color-white: #FFFFFF;
    --color-gray-100: #F8F5F2; /* Tons de cinza com leve tom warm */
    --color-gray-200: #EFE9E4;
    --color-gray-300: #E2D9D3;
    --color-gray-400: #C9BEB7;
    --color-gray-500: #9E9189;
    --color-gray-600: #776B64;
    --color-gray-700: #544C47;
    
    /* Spacing system (8px increments) */
    --space-1: 0.25rem;  /* 4px */
    --space-2: 0.5rem;   /* 8px */
    --space-3: 1rem;     /* 16px */
    --space-4: 1.5rem;   /* 24px */
    --space-5: 2rem;     /* 32px */
    --space-6: 2.5rem;   /* 40px */
    --space-7: 3rem;     /* 48px */
    --space-8: 4rem;     /* 64px */
    --space-9: 5rem;     /* 80px */
    --space-10: 6rem;    /* 96px */
    
    /* Shadows - mais suaves para o estilo minimalista */
    --shadow-sm: 0 2px 8px rgba(26,26,26,0.04);
    --shadow-md: 0 4px 16px rgba(26,26,26,0.06);
    --shadow-lg: 0 6px 24px rgba(26,26,26,0.08);
    --shadow-primary: 0 6px 20px rgba(128,0,32,0.16);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Border radius - mais suaves */
    --radius-sm: 3px;
    --radius-md: 6px;
    --radius-lg: 12px;
    --radius-xl: 20px;
    --radius-2xl: 28px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-primary); /* Burgundy */
    color: var(--color-gray-100);
    line-height: 1.7;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, .logo-font {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
  }
  
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }
  
  h3 {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
  }

  .accent-font {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: var(--color-secondary);
    position: relative;
    display: inline-block;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    transition: var(--transition-normal);
    border: none;
    background: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-normal);
  }

  a:not(.no-underline) {
    position: relative;
    transition: color var(--transition-normal);
  }
  
  a:not(.no-underline)::after {
    content: '';
    display: block;
    width: 0;
    height: 1.5px;
    background: var(--color-secondary);
    transition: width var(--transition-normal);
    position: absolute;
    left: 0;
    bottom: -2px;
    border-radius: var(--radius-sm);
    opacity: 0.7;
  }
  
  a:not(.no-underline):hover::after, a:not(.no-underline):focus-visible::after {
    width: 100%;
  }

  .container + .container {
    margin-block: var(--space-8);
    border-top: 1px solid var(--color-gray-700);
  }
  
  @media (max-width: 900px) {
    .container + .container {
      margin-block: var(--space-6);
    }
  }
  
  @media (max-width: 600px) {
    .container + .container {
      margin-block: var(--space-4);
    }
  }
`; 