import * as S from './styles';

interface PlusButtonProps {
  onAddUserPop: () => void;
}

const PlusButton = ({ onAddUserPop }: PlusButtonProps) => {
  return (
    <S.Container onClick={onAddUserPop}>
      <svg
        width={30}
        height={30}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </S.Container>
  );
};

export default PlusButton;
