import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: ${(props) => (props.$isMobile ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
`;

export const Title = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.darkBlue};
  font-weight: 800;
`;

export const Menu = styled.div<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? '100%' : 'auto')};
  padding: 20px;
  display: flex;
  justify-content: ${(props) => (props.$isMobile ? 'space-evenly' : 'center')};
  align-items: center;
  gap: 20px;
`;

export const Page = styled(NavLink)`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 600;
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;
