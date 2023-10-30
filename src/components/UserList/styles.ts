import styled from 'styled-components';

export const Container = styled.div`
  width: 935px;
  height: 630px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px #091f5b33;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.media.mobile} {
    width: 350px;
    height: 500px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 688px;
    height: 500px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;

  span {
    display: inline-block;
    padding: 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.97px;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  span:nth-child(1) {
    width: 130px;
  }
  span:nth-child(2) {
    width: 100px;
  }
`;

export const Body = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 7px solid ${(props) => props.theme.colors.darkGray};
  }
`;

export const Column = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.lightSkyBlue : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightSkyBlue};
  }

  transition: background-color 0.2s ease-in-out;

  span {
    display: inline-block;
    padding: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.97px;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  span:nth-child(1) {
    width: 130px;
  }
  span:nth-child(2) {
    width: 100px;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;
