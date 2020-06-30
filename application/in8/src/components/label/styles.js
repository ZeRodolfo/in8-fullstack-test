import styled from "styled-components";

export const Text = styled.label`
  color: ${({ color }) => (color ? color : "#000")};
  font-size: ${({ size }) => (size ? size : "12px")};
  font-weight: 300;
  font-family: "Roboto-Regular";
`;
