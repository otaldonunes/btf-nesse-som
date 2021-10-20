import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --gray: #E5E5E5;
    --black: #000000;
    --pink: #FF009A;
    --header: #1C0473;
    --footer: #350668;
    --cyan: #00FFFF;
    --golden: #F7931E;
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
