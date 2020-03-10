import { createGlobalStyle, css } from 'styled-components';

import { media } from 'utils';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  
  :focus {
    outline: 0;
  }
  ol, ul {
    list-style: none;
  }
  
  body {
    scroll-behavior: smooth;
    line-height: 1;
    color: white;
    margin: 0;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    background-color: #38383b;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .02em;
    text-transform: none;

    ${({ overflow }) =>
      overflow &&
      css`
        overflow: hidden;

        ${media.tablet`
          overflow: auto;
        `}
      `};
  }
`;

export default GlobalStyle;
