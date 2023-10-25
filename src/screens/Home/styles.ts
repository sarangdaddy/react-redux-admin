import styled from 'styled-components';

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  background-color: ${(props) =>
    props.$isMobile ? 'tomato' : props.$isTablet ? 'blue' : 'black'};
`;
