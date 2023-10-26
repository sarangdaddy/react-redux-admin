import SubmitButton from '../SubmitButton';
import { SUBMIT_BUTTON } from '@/constants/buttonTitle';
import * as S from './styles';

interface FooterProps {
  isActive: boolean;
  handleDelete: (id: number) => void;
  checkedUserIds: number[];
}

const Footer = ({ isActive, handleDelete, checkedUserIds }: FooterProps) => {
  const isAbleSubmit = checkedUserIds.length > 0 ? true : false;

  return isActive ? null : (
    <S.Container>
      <SubmitButton
        label={SUBMIT_BUTTON.delete}
        isActive={isAbleSubmit}
        // onClick={handleDelete}
      />
      <S.Count>{checkedUserIds.length}</S.Count>
    </S.Container>
  );
};

export default Footer;
