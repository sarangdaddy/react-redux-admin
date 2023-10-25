import { useSelector } from 'react-redux';
import { IRootState } from '@/modules/types';
import axios from 'axios';
import * as S from './styles';

const Home = () => {
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  console.log(isMobile, isTablet);

  axios.get('http://localhost:9000/user_data').then((res) => {
    console.log(res);
  });

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      Home
    </S.Container>
  );
};

export default Home;
