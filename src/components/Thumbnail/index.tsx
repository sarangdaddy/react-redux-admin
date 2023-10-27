import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import PlusButton from '../PlusButton';
import SubmitButton from '../SubmitButton';
import { IUser } from '@/modules/types';
import { IRootState } from '@/modules/types';
import { SUBMIT_BUTTON } from '@/constants/buttonTitle';
import { PROFILE_LIST } from '@/constants/label';
import * as S from './styles';

interface ThumbnailProps {
  isAdd?: () => void;
  isDeleted?: () => void;
  user?: IUser;
  isChecked?: boolean;
  onCheckboxChange?: (userId: number, checked: boolean) => void;
  isActive?: boolean;
}

const Thumbnail = ({
  user,
  isChecked,
  onCheckboxChange,
  isAdd,
  isDeleted,
  isActive = true,
}: ThumbnailProps) => {
  const firstLetterOfNickname = user?.nickname[0];
  const sexInKorean = user?.sex === 'm' ? '남자' : '여자';
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (user && onCheckboxChange) {
      onCheckboxChange(user.id, e.target.checked);
    }
  };

  if (isAdd) {
    return (
      <S.AddContainer $isMobile={isMobile} $isTablet={isTablet}>
        <PlusButton onAddUserPop={isAdd} isActive={isActive} />
      </S.AddContainer>
    );
  }

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      <S.Header>
        {!isActive && (
          <S.Checkbox>
            <input
              id={user?.id.toString()}
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </S.Checkbox>
        )}
      </S.Header>
      <S.Content>
        <div className="profile-info">
          <div className="avatar">{firstLetterOfNickname}</div>
        </div>
        <div className="profile">
          <div className="profile-content">
            <span>{PROFILE_LIST.name}</span>
            <span>{user?.nickname}</span>
          </div>
          <div className="profile-content">
            <span>{PROFILE_LIST.birthday}</span>
            <span>{user?.birthday}</span>
          </div>
          <div className="profile-content">
            <span>{PROFILE_LIST.sex}</span>
            <span>{sexInKorean}</span>
          </div>
        </div>
      </S.Content>
      {isDeleted && (
        <S.RecoveryButton>
          <SubmitButton
            label={SUBMIT_BUTTON.recovery}
            large
            isActive={isChecked}
            onClick={isDeleted}
          />
        </S.RecoveryButton>
      )}
    </S.Container>
  );
};

export default Thumbnail;
