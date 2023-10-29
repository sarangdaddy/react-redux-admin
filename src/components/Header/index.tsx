import * as S from './styles';
import { PAGE_LIST } from '@/constants/buttonTitle';
import { useSelector } from 'react-redux';
import { IRootState } from '@/modules/types';

const Header = () => {
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  return (
    <S.Container $isMobile={isMobile}>
      <S.Logo>
        <S.StyledImg />
      </S.Logo>
      <S.Menu $isMobile={isMobile}>
        {PAGE_LIST.map((page) => (
          <S.Page key={page.id} to={page.path}>
            {page.name}
          </S.Page>
        ))}
      </S.Menu>
    </S.Container>
  );
};

export default Header;
