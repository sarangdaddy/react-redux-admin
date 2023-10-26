import { MouseEventHandler } from 'react';
import * as S from './styles';

interface SubmitButtonProps {
  label: string;
  large?: boolean;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton = ({
  label,
  large = false,
  isActive = false,
  onClick,
  ...rest
}: SubmitButtonProps) => {
  return (
    <S.Button
      {...rest}
      $large={large}
      $isActive={isActive}
      onClick={onClick}
      disabled={!isActive}
    >
      {label}
    </S.Button>
  );
};

export default SubmitButton;
