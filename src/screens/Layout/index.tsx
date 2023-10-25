import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import {
  setIsMobile,
  setIsTablet,
  setIsDesktop,
} from '@/redux/actions/responsiveActions';

const Layout = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1249px)');
  const isDesktop = useMediaQuery('(min-width: 1250px)');

  useEffect(() => {
    if (isMobile) {
      dispatch(setIsMobile(true));
      dispatch(setIsTablet(false));
      dispatch(setIsDesktop(false));
    } else if (isTablet) {
      dispatch(setIsTablet(true));
      dispatch(setIsMobile(false));
      dispatch(setIsDesktop(false));
    } else if (isDesktop) {
      dispatch(setIsDesktop(true));
      dispatch(setIsMobile(false));
      dispatch(setIsTablet(false));
    }
  }, [isMobile, isTablet, isDesktop, dispatch]);

  return <Outlet />;
};

export default Layout;
