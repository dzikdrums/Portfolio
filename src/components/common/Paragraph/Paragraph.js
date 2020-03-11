import styled, { css } from 'styled-components';

import { media } from 'utils';

const Paragraph = styled.p`
  /* text-align: center; */
  color: black;
  margin: 1rem 0;
  font-size: 14px;
  line-height: 1.8;
  transition: font-size 0.14s;
  font-weigh: 300;
  letter-spacing: 0.02em;
  white-space: pre-wrap;

  ${({ invert }) =>
    invert &&
    css`
      color: white;
    `}

  ${media.tablet`
    font-size: 1.1rem;
    line-height: 1.8;
    `};
`;

export default Paragraph;
