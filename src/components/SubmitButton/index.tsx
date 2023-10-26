import * as S from './styles';

interface SubmitButtonProps {
  label: string;
  large?: boolean;
  isActive?: boolean;
  onClick?: () => void;
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
