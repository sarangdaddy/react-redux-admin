import styled from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  padding-top: ${(props) => (props.$isMobile ? '150px' : '70px')};
  height: ${(props) => (props.$isMobile || props.$isTablet ? '' : '100vh')};
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  flex-direction: ${(props) =>
    props.$isMobile || props.$isTablet ? 'column' : 'row'};
  gap: 35px;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const Body = styled.div``;
