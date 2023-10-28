import styled from 'styled-components';
import XImg from '../../assets/XImg.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 15px 0px #091f5b33;

  position: relative;
`;

export const Column = styled.div`
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 7px solid ${(props) => props.theme.colors.darkGray};
  }

  &:nth-child(2) {
    padding: 8%;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
    padding-top: 3%;
    overflow: hidden;
  }
`;

export const InfoOption = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.darkGray};
  }

  label {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkBlue};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.div`
  display: flex;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 14px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => (props.value ? 'transparent' : 'initial')};
  color: ${(props) => props.theme.colors.darkBlue};

  &:focus {
    outline: none;
  }
`;

export const GenderButton = styled.button<{ selected: boolean }>`
  padding: 5px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.lightBlue : 'transparent'};
  border: 1px solid ${(props) => props.theme.colors.lightBlue};
  border-radius: 50%;
  cursor: pointer;
  margin: 5px;

  &:focus {
    outline: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const StyledImg = styled(XImg)`
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.darkBlue};
`;
