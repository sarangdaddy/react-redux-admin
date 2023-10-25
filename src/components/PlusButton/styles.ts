import styled from 'styled-components';

export const Container = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.darkSkyBlue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: none;
  transition: background-color 0.1s ease-in-out;
  box-shadow: 0px 4px 10px 0px #091f5b26;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBlue};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;
