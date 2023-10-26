import styled from 'styled-components';

export const Button = styled.button<{ $isActive: boolean; $large: boolean }>`
  width: ${(props) => (props.$large ? '70%' : '330px')};
  height: 50px;
  padding: 15px, 10px, 15px, 10px;
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'not-allowed')};
  transition: background-color 0.1s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.97px;

  background-color: ${(props) =>
    props.$isActive
      ? props.theme.colors.lightBlue
      : props.theme.colors.darkSkyBlue};
  color: white;

  &:hover {
    background-color: ${(props) =>
      props.$isActive
        ? props.theme.colors.darkBlue
        : props.theme.colors.darkSkyBlue};
  }
`;
