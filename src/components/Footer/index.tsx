import { MouseEvent } from 'react';
import SubmitButton from '../SubmitButton';
import { SUBMIT_BUTTON } from '@/constants/buttonTitle';
import * as S from './styles';

interface FooterProps {
  isActive: boolean;
  onUsersDelete: (ids: number[]) => void;
  checkedUserIds: number[];
}

const Footer = ({ isActive, onUsersDelete, checkedUserIds }: FooterProps) => {
  const isAbleSubmit = checkedUserIds.length > 0 ? true : false;

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (checkedUserIds.length > 0) {
      onUsersDelete(checkedUserIds);
    }
  };

  return isActive ? null : (
    <S.Container>
      <SubmitButton
        label={SUBMIT_BUTTON.delete}
        isActive={isAbleSubmit}
        onClick={handleSubmit}
      />
      <S.Count>{checkedUserIds.length}</S.Count>
    </S.Container>
  );
};

export default Footer;
