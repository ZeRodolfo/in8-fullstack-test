import React from "react";

import * as Styled from "./styles";

const Label = ({ text = "", color, size = "12px" }) => (
  <Styled.Text color={color} size={size}>
    {text}
  </Styled.Text>
);

export default Label;
