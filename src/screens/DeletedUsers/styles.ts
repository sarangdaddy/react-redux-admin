import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 70px;
  height: 100vh;

  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  ${(props) => props.theme.media.mobile} {
    padding-top: 150px;
    height: auto;
  }

  ${(props) => props.theme.media.tablet} {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
  }
`;

export const Body = styled.div``;
