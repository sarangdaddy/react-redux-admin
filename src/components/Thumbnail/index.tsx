import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '@/modules/types';
import { PROFILE_LIST } from '@/constants/label';
import { IRootState } from '@/modules/types';
import * as S from './styles';
import PlusButton from '../PlusButton';

interface ThumbnailProps {
  isAdd?: () => void;
  user: IUser;
  isChecked: boolean;
  onCheckboxChange: (userId: number, checked: boolean) => void;
}

const Thumbnail = ({
  user,
  isChecked,
  onCheckboxChange,
  isAdd,
}: ThumbnailProps) => {
  const firstLetterOfNickname = user.nickname[0];
  const sexInKorean = user.sex === 'm' ? '남자' : '여자';
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(user.id, e.target.checked);
  };

  if (isAdd) {
    return (
      <S.AddContainer $isMobile={isMobile} $isTablet={isTablet}>
        <PlusButton onAddUserPop={isAdd} />
      </S.AddContainer>
    );
  }

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      <S.Header>
        <S.Checkbox>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </S.Checkbox>
      </S.Header>
      <S.Content>
        <div className="profile-info">
          <div className="avatar">{firstLetterOfNickname}</div>
        </div>
        <div className="profile">
          <div className="profile-content">
            <span>{PROFILE_LIST.name}</span>
            <span>{user.nickname}</span>
          </div>
          <div className="profile-content">
            <span>{PROFILE_LIST.birthday}</span>
            <span>{user.birthday}</span>
          </div>
          <div className="profile-content">
            <span>{PROFILE_LIST.sex}</span>
            <span>{sexInKorean}</span>
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Thumbnail;
