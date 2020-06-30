import React from "react";

import * as Styled from "./styles";

const Row = ({ children }) => <Styled.Row>{children}</Styled.Row>;
const BodyItem = ({ children, ...rest }) => (
  <Styled.BodyItem {...rest}>{children}</Styled.BodyItem>
);

export { Row, BodyItem };
