const theme = {};

theme.palette = {
  primary: [
    '#4482FF', // 0: Default
    '#3A78F5', // 1: Darken 4%
    '#3775F2', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#4C8AFF', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#6AA8FF', // 6: Lighten 15%
    '#63A1FF', // 7: Lighten 12%
    '#3F7DFA', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#5896FF', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#236cfe', // 12: darken 10%
    '#4d88ff', // 13: Lighten 5%
  ],
  secondary: [
    '#2d3446', // 0: DarkBlue
    '#f1f3f6', // 1: LightBluish
    '#788195', // 2: LightBlue
    '#E4E6E9', // 3: LightBluish Darken 5%
    '#364d79', // 4:
    '#202739', // 5: DarkBlue Darken 5%
    '#f5f6f8', // 6: LighterBluish
    '#e9ebf1', // 7: DarkBluish
    '#F6F8FB', // 8: LighterBluish Lighten 2%
    '#E9EBEE', // 9: LighterBluish Darken 3%
    '#1a1a1a', // 10: Sidebar submenu select
  ],
  color: [
    '#FEAC01', // 0: Orange
    '#42299a', // 1: Purple
    '#F75D81', // 2: Pink
    '#7ED321', // 3: LimeGreen
    '#39435f', // 4: BlueShade
    '#FFCA28', // 5: Yellow
    '#F2BD1B', // 6: Yellow Darken 5%
    '#3b5998', // 7: Facebook
    '#344e86', // 8: Facebook Darken 5%
    '#dd4b39', // 9: Google Plus
    '#d73925', // 10: Google Plus Darken 5%
    '#e14615', // 11: Auth0
    '#ca3f13', // 12: Auth0
    '#e0364c', // 13: themeColor--AlizarinCrimson
    '#417505', // 14: Ready File State
    '#F5A623', // 15: Queued File State
    '#4A90E2', // 16: Active
    '#F2F8FF', // 17: Gray Background Panel
    '#ffffff', // 18: White
    '#979797', // 19
    '#1A8ED5', // 20
    '#E98232', // 21: light brilliant orange
    '#888888', // 22
    '#C9E6F4', // 23
    '#E8F5FB', // 24
  ],
  warning: [
    '#ffbf00', // 0: Warning
  ],
  success: [
    '#00b16a', // 0: Success
  ],
  error: [
    '#f64744', // 0: Error
    '#EC3D3A', // 1: Darken 4%
    '#FF5B58', // 2: Lighten 8%
    '#E1071D', // 3
  ],
  grayscale: [
    '#bababa', // 0: GreyShade
    '#c1c1c1', // 1: GreyDark
    '#D8D8D8', // 2: Grey
    '#f1f1f1', // 3: GreyAlt
    '#F3F3F3', // 4: GreyLight
    '#fafafa', // 5: DarkWhite
    '#F9F9F9', // 6: DarkerWhite
    '#fcfcfc', // 7: #fff Darken 1%
    '#eeeeee', // 8:
    '#fbfbfb', // 9:
    '#f5f5f5', // 10:
    '#f7f8f9', // 11: today-highlight-bg
  ],
  text: [
    '#323332', // 0: Heading
    '#595959', // 1: HeadingLight
    '#979797', // 2: Text
    '#797979', // 3: TextDark
    '#6a6c6a', // 4: Heading Lighten 22%
  ],
  border: [
    '#e9e9e9', // 0: Border
    '#d8d8d8', // 1: BorderDark
    '#ebebeb', // 2: BorderLight
    '#d3d3d3', // 3:
    'rgba(228, 228, 228, 0.65)', // 4:
  ],

  calendar: [
    '#905', // 0:
    '#690', // 1:
    '#a67f59', // 2:
    '#07a', // 3:
    '#dd4a68', // 4:
    '#e90', // 5:
  ],
};

theme.fonts = {
  primary: 'Lato, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

theme.colors = {
  main: '#4482ff',

  // Blue
  blueStartBackground: '#08325C',
  blueEndBackground: '#137AAA',
  blueBorder: '#4A90E2',
  blueBGHoverMenuItem: '#dbecfe',
  blueBGTab: 'rgba(24,154,214,.18)',
  shortcutBG: '#1C9CD6',
  blueDocx: '#165EA9',
  blueBGFile: 'rgba(13, 78, 144, 0.1)',
  cerulean: '#1677B3',
  dodgerBlue: '#1890FF',
  seaGull: '#6CC0E5',
  curiousBlue: '#1690D1',

  // Gray
  grayBackgroundPanel: '#F2F8FF',
  disabledText: '#646464',
  grayBorder: '#D8DDE6',
  grayBackgroundHover: '#f7f9fb',
  gray7C: '#7c7c7c',
  grayF9: '#F9F9F9',
  grayE9: '#E9E9E9',
  grayBD: '#BDBDBD',
  grayFA: '#FAFAFA',
  grayBGNoti: '#E5F4D3',
  gray97: '#979797',
  gray64: '#646464',
  gray80: '#808080',
  gray84: '#848484',
  grayPageHeading: 'rgba(0,0,0,.23)',
  grayAA: '#AAA',
  grayC4: '#C4C4C4',
  gray43: '#434343',
  grayE0: '#E0E0E0',
  grayShuttle: '#536270',
  grayActionBorder: 'rgba(100, 100, 100, .5)',
  gray40: '#404040',
  gray51: '#515151',
  gray9A: '#9A9A9A',
  grayMenuEditorBackground: '#73757D',
  gray8E: '#8E8E8E',
  grayA4: '#A4A4A4',
  grayNotificationBackground: '#F3F5F5',
  gray8A: '#8A8A8A',
  gray66: '#666666',
  boulder: '#767676',
  graySpeaker: '#44535E',
  grayMenuEditor: '#6C757D',

  // Light
  light: '#EBEBEB',

  // White
  white: '#FFFFFF',
  whiteE: '#EEEEEE',
  white0_5: 'rgba(255,255,255,0.5)',
  white0_2: 'rgba(255,255,255,0.2)',

  // Dark
  dark59: '#595959',
  darkFileName: '#2b303b',
  darkActive: '#3a44a',
  darkInactive: '#7d868b',
  black: '#000000',
  blackTextNoti: '#555252',
  black51: '#515151',
  blackAudioPlayer: '#3B3B3B',

  // Purple
  purpleTextDropdown: '#54698D',

  // Green
  greenSuccess: '#48BE00',
  salem: '#067F3C',
  greenPersian: '#00B5AC',

  // Yellow
  candlelightYellow: '#F9D423',
  sunglowYellow: '#FFC836',
  yellowSea: '#FEAF00',
  brightSun: '#EBB831',
  contrastYellow: '#F4C623',

  // Orange
  orange: '#FF851B',
  orangeError: '#BD5B00',

  // Pink
  karry: '#FFE8D2',

  // Red
  sangria: '#870011',
  pomegranate: '#EB3425',

  // Silver
  silverChalice: '#9F9F9F',

  // Black
  black32: '#323232',

  primary: {
    qsrDarkBlue: '#0D4E90',
    midBlue: '#0269AE',
    qsrLightBlue: '#189AD6',
  },

  secondary: {
    grey: '#646464',
    green: '#069547',
    funGreen: '#00893B',
    purple: '#4C3597',
    orange: '#D75B36',
  },
};

export default theme;
