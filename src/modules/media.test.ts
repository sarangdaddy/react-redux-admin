import mediaReducer, { setIsMobile, setIsTablet, setIsDesktop } from './media';

describe('mediaReducer', () => {
  const initialState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };

  it('Test SET_IS_MOBILE action in mediaReducer', () => {
    expect(mediaReducer(initialState, setIsMobile(true))).toEqual({
      ...initialState,
      isMobile: true,
    });
  });

  it('Test SET_IS_TABLET action in mediaReducer', () => {
    expect(mediaReducer(initialState, setIsTablet(true))).toEqual({
      ...initialState,
      isTablet: true,
    });
  });

  it('Test SET_IS_DESKTOP action in mediaReducer', () => {
    expect(mediaReducer(initialState, setIsDesktop(true))).toEqual({
      ...initialState,
      isDesktop: true,
    });
  });
});
