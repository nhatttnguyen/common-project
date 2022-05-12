import themes from '../index';
import defaultTheme from '../defaultTheme';

describe('app/themes', () => {
  it('should contain defaultTheme', () => {
    expect(themes.defaultTheme).toBe(defaultTheme);
  });
});
