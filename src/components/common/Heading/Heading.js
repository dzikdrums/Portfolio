import styled, { css } from 'styled-components';

const Heading = styled.h2`
  text-align: center;
  color: black;
  margin: 1.2rem 0;
  font-size: 2.1rem;
  line-height: 1.3;
  transition: font-size 0.14s;
  font-weight: 500;
  letter-spacing: 0em;

  ${({ invert }) =>
    invert &&
    css`
      color: white;
    `}
`;

export default Heading;
