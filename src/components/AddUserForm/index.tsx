import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { addUserData } from '@/apis';
import CustomCalendar from '../CustomCalendar';
import SubmitButton from '../SubmitButton';
import { formatDateToString } from '@/utils/formatDateToString';
import { SUBMIT_BUTTON } from '@/constants/buttonTitle';
import { ADD_USER_FORM, PROFILE_LIST, SEX_LIST } from '@/constants/label';
import { IUser, IRootState } from '@/modules/types';
import * as S from './styles';

interface IAddUserFormProps {
  onClose: () => void;
}

const AddUserForm = ({ onClose }: IAddUserFormProps) => {
  const dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.users.users);
  const lastId = users[users.length - 1]?.id || 0;
  const { register, handleSubmit, formState, control, setValue, trigger } =
    useForm<IUser>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const onSubmit = (data: IUser) => {
    const newUserData: IUser = {
      id: lastId + 1,
      nickname: data.nickname,
      birthday: formatDateToString(new Date(data.birthday)),
      sex: data.sex,
      isDeleted: false,
    };

    addUserData(newUserData, dispatch);
    onClose();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.CloseButton type="button" onClick={onClose}>
        <S.StyledImg />
      </S.CloseButton>
      <S.Column>
        <S.InfoOption>
          <S.UserInfo>
            <S.Label>{PROFILE_LIST.name}</S.Label>
            <S.Input
              {...register('nickname', {
                required: ADD_USER_FORM.errName,
                validate: (value) => {
                  return !/\s/.test(value) || ADD_USER_FORM.errWhitespace;
                },
              })}
              type="text"
              placeholder={ADD_USER_FORM.infoName}
            />
          </S.UserInfo>
          <S.ErrorMessage>{formState.errors.nickname?.message}</S.ErrorMessage>
        </S.InfoOption>
        <S.InfoOption>
          <S.UserInfo>
            <S.Label>{PROFILE_LIST.birthday}</S.Label>
            <S.Input
              placeholder={ADD_USER_FORM.infoData}
              value={selectedDate}
              readOnly
            />
          </S.UserInfo>
          <S.CenteredWrapper>
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <CustomCalendar
                  onDateChange={(date: Date) => {
                    const offset = date.getTimezoneOffset();
                    const adjustedDate = new Date(
                      date.getTime() - offset * 60 * 1000,
                    );
                    const formattedDate = adjustedDate
                      .toISOString()
                      .split('T')[0];
                    setSelectedDate(formattedDate);
                    field.onChange(date);
                  }}
                />
              )}
              rules={{ required: ADD_USER_FORM.errData }}
            />
          </S.CenteredWrapper>
          <S.ErrorMessage>{formState.errors.birthday?.message}</S.ErrorMessage>
        </S.InfoOption>
        <S.InfoOption>
          <S.UserInfo>
            <S.Label>{PROFILE_LIST.sex}</S.Label>
            <S.GenderButton
              type="button"
              id="maleButton"
              key={'m'}
              selected={selectedGender === 'm'}
              onClick={async () => {
                setSelectedGender('m');
                setValue('sex', 'm');
                await trigger('sex');
              }}
            />
            <label htmlFor="maleButton">{SEX_LIST.m}</label>
            <S.GenderButton
              type="button"
              id="femaleButton"
              key={'w'}
              selected={selectedGender === 'w'}
              onClick={async () => {
                setSelectedGender('w');
                setValue('sex', 'w');
                await trigger('sex');
              }}
            />
            <label htmlFor="femaleButton">{SEX_LIST.w}</label>
            <S.Input
              id="sex"
              type="hidden"
              {...register('sex', {
                required: ADD_USER_FORM.errSex,
              })}
              value={selectedGender || ''}
            />
          </S.UserInfo>
          <S.ErrorMessage>{formState.errors.sex?.message}</S.ErrorMessage>
        </S.InfoOption>
      </S.Column>
      <S.Column>
        <SubmitButton label={SUBMIT_BUTTON.save} large isActive={true} />
      </S.Column>
    </S.Form>
  );
};

export default AddUserForm;
