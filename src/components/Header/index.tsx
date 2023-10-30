import * as S from './styles';
import { PAGE_LIST } from '@/constants/buttonTitle';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <S.StyledImg />
      </S.Logo>
      <S.Menu>
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
