import mediaReducer, { setIsMobile, setIsTablet, setIsDesktop } from './media';

describe('mediaReducer', () => {
  const initialState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };

  it('Test SET_IS_MOBILE action in mediaReducer', () => {
    const newState = mediaReducer(initialState, setIsMobile(true));
    expect(newState.isMobile).toBe(true);
    expect(newState.isTablet).toBe(false);
    expect(newState.isDesktop).toBe(false);
  });

  it('Test SET_IS_TABLET action in mediaReducer', () => {
    const newState = mediaReducer(initialState, setIsTablet(true));
    expect(newState.isTablet).toBe(true);
    expect(newState.isMobile).toBe(false);
    expect(newState.isDesktop).toBe(false);
  });

  it('Test SET_IS_DESKTOP action in mediaReducer', () => {
    const newState = mediaReducer(initialState, setIsDesktop(true));
    expect(newState.isDesktop).toBe(true);
    expect(newState.isMobile).toBe(false);
    expect(newState.isTablet).toBe(false);
  });
});
