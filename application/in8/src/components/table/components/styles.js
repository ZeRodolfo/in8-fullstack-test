import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: table-row;

  :first-child div {
    border-top: none;
  }
`;

export const BodyItem = styled.div`
  color: #808080;
  display: table-cell;
  font-size: 14px;
  vertical-align: middle;
  padding: 10px;
  min-height: 43px;
  min-width: 80px;
  border-right: 1px solid #29abe2;
  border-top: 1px solid #29abe2;
  font-family: "Roboto-Regular";

  :last-child {
    border-right: none;
  }

  :first-child {
    color: #012d51;
    font-family: "Roboto-Light";
  }

  ${({ center }) => center && `text-align: center;`}
`;
