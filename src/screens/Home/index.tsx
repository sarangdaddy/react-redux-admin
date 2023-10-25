import { useSelector } from 'react-redux';
import axios from 'axios';
import { IRootState } from '@/modules/types';
import * as S from './styles';

const Home = () => {
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      Home
    </S.Container>
  );
};

export default Home;
