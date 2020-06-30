import React from "react";

import * as Styled from "./styles";

const Table = ({ columns = [], children }) => {
  const renderHeader = columns.map((item, index) => (
    <Styled.HeaderItem key={`table_header_${index}`}>{item}</Styled.HeaderItem>
  ));

  return (
    <Styled.Container>
      <Styled.Header>{renderHeader}</Styled.Header>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Container>
  );
};

export default Table;
