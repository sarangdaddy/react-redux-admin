import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { setIsMobile, setIsTablet, setIsDesktop } from '@/modules/media';
import { IRootState } from '@/modules/types';
import Header from '@/components/Header';

const Layout = () => {
  const dispatch = useDispatch();
  const mobileQuery = useMediaQuery('(max-width: 767px)');
  const tabletQuery = useMediaQuery(
    '(min-width: 768px) and (max-width: 1249px)',
  );
  const desktopQuery = useMediaQuery('(min-width: 1250px)');

  useEffect(() => {
    if (mobileQuery) {
      dispatch(setIsMobile(true));
      dispatch(setIsTablet(false));
      dispatch(setIsDesktop(false));
    } else if (tabletQuery) {
      dispatch(setIsTablet(true));
      dispatch(setIsMobile(false));
      dispatch(setIsDesktop(false));
    } else if (desktopQuery) {
      dispatch(setIsDesktop(true));
      dispatch(setIsMobile(false));
      dispatch(setIsTablet(false));
    }
  }, [mobileQuery, tabletQuery, desktopQuery, dispatch]);

  const isMobile = useSelector((state: IRootState) => state.media.isMobile);

  return (
    <>
      <Header isMobile={isMobile} />
      <Outlet />
    </>
  );
};

export default Layout;
