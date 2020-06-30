import styled from "styled-components";

export const Container = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: table-header-group;
  width: 100%;
`;

export const HeaderItem = styled.div`
  display: table-cell;
  text-transform: uppercase;
  font-size: 16px;
  color: #012d51;
  padding: 10px;
  min-height: 43px;
  border-right: 1px solid #29abe2;
  border-bottom: 1px solid #29abe2;
  text-align: center;
  vertical-align: middle;
  font-family: "Roboto-Regular";

  :last-child {
    border-right: none;
  }
`;

export const Body = styled.div`
  display: table-row-group;
  width: 100%;
`;
