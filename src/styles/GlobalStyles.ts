import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #E63946;
    --color-black: #18181B;
    --color-white: #FFFFFF;
    --color-gray: #F3F4F6;
    --color-dark-gray: #6B7280;
  }

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;700&display=swap');

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
  }

  h1, h2, h3, h4, h5, h6, .logo-font {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .accent-font {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    color: var(--color-primary);
    position: relative;
    display: inline-block;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
  }

  a:not(.no-underline) {
    position: relative;
    transition: color 0.3s cubic-bezier(.4,0,.2,1);
  }
  a:not(.no-underline)::after {
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
  a:not(.no-underline):hover::after, a:not(.no-underline):focus-visible::after {
    width: 100%;
  }

  .container + .container {
    margin-block: 4.5rem;
    border-top: 1px solid rgba(24,24,27,0.07);
  }
  @media (max-width: 900px) {
    .container + .container {
      margin-block: 2.7rem;
      border-top: 1px solid rgba(24,24,27,0.09);
    }
  }
  @media (max-width: 600px) {
    .container + .container {
      margin-block: 1.3rem;
      border-top: 1px solid rgba(24,24,27,0.11);
    }
  }
`; 