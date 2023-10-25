import { useSelector } from 'react-redux';
import { IResponsiveState } from '@/redux/types';
import * as S from './styles';

const Home = () => {
  const isMobile = useSelector((state: IResponsiveState) => state.isMobile);
  const isTablet = useSelector((state: IResponsiveState) => state.isTablet);

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      Home
    </S.Container>
  );
};

export default Home;
