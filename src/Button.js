import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  ${(props) =>
    props.primary &&
    css`
      color: blue;
    `}
    ${(props) =>
      props.secondary &&
      css`
        color: green;
      `}
    ${(props) =>
      props.Pink &&
      css`
        background: pink;
        color: white;
      `}
`;
