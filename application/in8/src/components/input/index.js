import React from "react";

import * as Styled from "./styles";

const Input = ({ type = "text", value = "", placeholder = "", ...rest }) => (
  <Styled.Input type={type} value={value} placeholder={placeholder} {...rest} />
);

export default Input;
