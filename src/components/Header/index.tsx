import * as S from './styles';
import { PAGE_LIST } from '@/constants/buttonTitle';

interface HeaderProps {
  isMobile?: boolean;
}

const Header = ({ isMobile = false }: HeaderProps) => {
  return (
    <S.Container $isMobile={isMobile}>
      <S.Title>NARA SPACE</S.Title>
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
