import { useState, useEffect, useRef } from 'react';
import { FILTER_LIST, IFilter } from '@/constants/buttonTitle';
import * as S from './styles';

interface FilterButtonProps {
  currentFilter: IFilter;
  setCurrentFilter: (filter: IFilter) => void;
}

const FilterButton = ({
  currentFilter,
  setCurrentFilter,
}: FilterButtonProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpened(!isOpened);
  };

  const handleFilterSelect = (filter: IFilter) => {
    setCurrentFilter(filter);
    setIsOpened(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container onClick={handleToggle} ref={containerRef}>
      <S.Main $isOpened={isOpened}>
        <S.Title>{currentFilter.name}</S.Title>
        <svg
          width={13}
          height={10}
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </S.Main>
      <S.Modal $isOpened={isOpened}>
        {FILTER_LIST.map((filter) => (
          <S.Filter key={filter.id} onClick={() => handleFilterSelect(filter)}>
            {filter.name}
          </S.Filter>
        ))}
      </S.Modal>
    </S.Container>
  );
};

export default FilterButton;
