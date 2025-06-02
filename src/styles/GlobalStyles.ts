import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --color-primary: #E63946;
    --color-primary-light: #F5969E;
    --color-primary-dark: #C6333F;
    --color-black: #18181B;
    --color-white: #FFFFFF;
    --color-gray-100: #F9FAFB;
    --color-gray-200: #F3F4F6;
    --color-gray-300: #E5E7EB;
    --color-gray-400: #D1D5DB;
    --color-gray-500: #9CA3AF;
    --color-gray-600: #6B7280;
    --color-gray-700: #4B5563;
    --color-accent: #F7F0EA; /* Subtle tertiary accent */
    
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
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(24,24,27,0.05);
    --shadow-md: 0 4px 16px rgba(24,24,27,0.08);
    --shadow-lg: 0 8px 32px rgba(24,24,27,0.12);
    --shadow-primary: 0 8px 24px rgba(230,57,70,0.16);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-white);
    color: var(--color-black);
    line-height: 1.7;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, .logo-font {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
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
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    color: var(--color-primary);
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
    font-family: 'Inter', sans-serif;
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
    height: 2px;
    background: var(--color-primary);
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
    border-top: 1px solid var(--color-gray-200);
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