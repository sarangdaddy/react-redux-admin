import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Main = styled.button<{ $isOpened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 123px;
  height: 40px;
  padding: 10px, 15px, 10px, 15px;
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  color: ${(props) =>
    props.$isOpened ? props.theme.colors.white : props.theme.colors.darkBlue};

  background-color: ${(props) =>
    props.$isOpened ? props.theme.colors.lightBlue : props.theme.colors.white};

  background-color: ${(props) => props.disabled && props.theme.colors.darkGray};

  &:not([disabled]):hover {
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 19.97px;
`;

export const Modal = styled.ul<{ $isOpened: boolean }>`
  position: absolute;
  margin-top: 5px;
  width: 123px;
  border-radius: 14px;
  border: none;
  display: ${(props) => (props.$isOpened ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 10px 0px #091f5b26;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightSkyBlue};
  }
`;

export const Filter = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 40px;
  border: none;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightSkyBlue};
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
