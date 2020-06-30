import styled from "styled-components";

export const ContainerForm = styled.section`
  background: #29abe2;
  padding: 30px;
`;

export const TitleForm = styled.h1`
  font-family: "Helvetica";
  font-size: 45px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const Row = styled.div`
  width: 100%;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  ${({ center }) => center && `align-items: center;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
`;


export const ContainerList = styled.section`
  background: #fff;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

export const TitleList = styled.h1`
  font-family: "Helvetica";
  font-size: 45px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  color: #29abe2;
  margin-bottom: 30px;
`;
