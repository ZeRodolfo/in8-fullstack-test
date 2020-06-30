import styled from "styled-components";

export const Input = styled.input`
  color: ${({ color }) => (color ? color : "#000")};
  font-size: ${({ size }) => (size ? size : "12px")};
  font-weight: 300;
  font-family: "Roboto-Regular";
  border: none;
  border-bottom: 2px solid #fff;
  background: transparent;
`;
