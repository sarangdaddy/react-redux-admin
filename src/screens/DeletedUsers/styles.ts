import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Body = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    ${(props) => {
      if (props.$isMobile) return 1;
      if (props.$isTablet) return 1;
      return 3;
    }},
    1fr
  );
  gap: 35px;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
  padding-bottom: 80px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 7px solid ${(props) => props.theme.colors.darkGray};
  }
`;
