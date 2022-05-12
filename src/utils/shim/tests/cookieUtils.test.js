import jsCookie from 'js-cookie';

import CookieUtils from '../cookieUtils';

describe('CookieUtils', () => {
  let setSpy;
  let removeSpy;

  beforeEach(() => {
    setSpy = jest.spyOn(jsCookie, 'set');
    removeSpy = jest.spyOn(jsCookie, 'remove');
  });

  it('should get cookie correctly', () => {
    jsCookie.set('dummyKey', 'dummyValue');
    expect(CookieUtils.get('dummyKey')).toBe('dummyValue');
  });

  it('should set cookie correctly', () => {
    CookieUtils.set('dummyKey', 'dummyValue');
    expect(setSpy).toHaveBeenCalledWith(
      'dummyKey',
      'dummyValue',
      expect.anything(),
    );
    expect(jsCookie.get('dummyKey')).toBe('dummyValue');
  });

  it('should clear cookie correctly', () => {
    jsCookie.set('dummyKey', 'dummyValue');
    CookieUtils.clear();
    expect(removeSpy).toHaveBeenCalled();
  });

  it('should remove cookie correctly', () => {
    jsCookie.set('dummyKey', 'dummyValue');
    CookieUtils.remove('dummyKey');
    expect(removeSpy).toHaveBeenCalled();
  });
});
