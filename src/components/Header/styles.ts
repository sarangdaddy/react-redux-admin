import { NavLink } from 'react-router-dom';
import Naraspace from '../../assets/Naraspace.svg';
import styled from 'styled-components';

export const Container = styled.div<{ $isMobile: boolean }>`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: ${(props) => (props.$isMobile ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
`;

export const Logo = styled.div`
  padding: 10px 20px;
`;

export const StyledImg = styled(Naraspace)`
  color: ${(props) => props.theme.colors.darkBlue};
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
