import styled from "styled-components";

export const Container = styled.section`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.strong`
  text-align: center;
  line-height: 1.3;
  font-size: 18px;
`;

export const SelectForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
`;
