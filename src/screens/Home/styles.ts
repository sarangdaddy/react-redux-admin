import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.lightGray};
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

export const Body = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => {
      if (props.$isMobile) return 1;
      if (props.$isTablet) return 2;
      return 3;
    }},
    1fr
  );
  gap: 35px;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
  padding-bottom: 100px;
`;
