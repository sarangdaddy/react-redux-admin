import styled from 'styled-components';

export const Container = styled.div<{ $hasRestoreClick: boolean }>`
  background-color: white;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px #091f5b33;
  width: ${(props) => (props.$hasRestoreClick ? '450px' : '450px')};

  ${(props) => props.theme.media.mobile} {
    width: ${(props) => (props.$hasRestoreClick ? '350px' : '327px')};
  }

  ${(props) => props.theme.media.tablet} {
    width: ${(props) => (props.$hasRestoreClick ? '688px' : '350px')};
  }
`;

export const AddContainer = styled.div`
  height: 430px;
  background-color: white;
  box-shadow: 0px 5px 15px 0px #091f5b33;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.media.mobile} {
    width: 327px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 350px;
  }
  ${(props) => props.theme.media.desktop} {
    width: 450px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 145px;
  background-color: ${(props) => props.theme.colors.lightSkyBlue};
  position: relative;
`;

export const Checkbox = styled.button`
  position: absolute;
  right: 0px;
  padding: 10px;
  border: none;
  background: none;
  outline: none;

  input {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  background-color: white;
  position: relative;

  .profile-info {
    position: relative;
    top: -90px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .avatar {
      height: 180px;
      width: 180px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 50%;
      box-shadow: 0px 5px 10px 0px #091f5b26;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
      font-weight: 400;
      line-height: 124.8px;
    }
  }

  .profile {
    position: relative;
    top: -50px;
    display: flex;
    flex-direction: column;
    margin: 0px 70px;

    .profile-content {
      display: flex;
      justify-content: center;
      align-items: center;

      &:not(:last-child) {
        border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
        margin-bottom: 5px;
      }

      span {
        color: ${(props) => props.theme.colors.darkBlue};
        display: flex;
        align-items: center;
      }

      span:first-child {
        font-weight: 600;
        width: 90px;
        height: 30px;
      }

      span:last-child {
        font-weight: 400;
        margin-left: 10px;
        width: 100%;
        height: 30px;
      }
    }
  }
`;

export const RecoveryButton = styled.div`
  padding: 15px 10px 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
