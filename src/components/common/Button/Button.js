import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: rgba(168, 166, 161, 0.8);
  line-height: normal;
  padding: 1.2em 2em;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: none;
  color: white;
  min-width: 140px;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.25s linear 0s;

  :hover {
    background-color: rgba(168, 166, 161, 0.4);
  }
`;

export default Button;
