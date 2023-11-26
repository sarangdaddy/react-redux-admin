import { NavLink } from 'react-router-dom';
import HomeLogo from '../../assets/HomeLogo.svg';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  ${(props) => props.theme.media.mobile} {
    align-items: flex-start;
  }

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  padding: 10px 20px;
`;

export const StyledImg = styled(HomeLogo)`
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const Menu = styled.div`
  width: auto;
  justify-content: center;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Page = styled(NavLink)`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 600;
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;
