import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px -4px 10px 0px #091f5b1a;
  gap: 10px;
`;

export const Count = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.97px;
  background-color: ${(props) => props.theme.colors.lightSkyBlue};
  color: ${(props) => props.theme.colors.darkBlue};
`;
