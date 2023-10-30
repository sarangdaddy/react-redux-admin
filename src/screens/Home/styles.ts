import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.lightGray};

  ${(props) => props.theme.media.mobile} {
    padding-top: 108px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  padding: 20px 0;
  z-index: 1;
`;

export const Switch = styled.div<{ $isActive: boolean }>`
  width: 58px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.lightBlue};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.darkBlue : props.theme.colors.white};
`;

export const Body = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
  padding-bottom: 80px;

  ${(props) => props.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 7px solid ${(props) => props.theme.colors.darkGray};
  }
`;

export const ModalPopUp = styled.div`
  width: 430px;
  height: 630px;

  ${(props) => props.theme.media.mobile} {
    width: 350px;
    height: 450px;
  }
`;

export const Dimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
