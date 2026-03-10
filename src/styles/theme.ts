import { colorPalette } from './color-palette';

export interface ThemeType {
  themeType: 'dark' | 'light';
  colors: {
    // Layout
    background: string;
    foreground: string;
    cardBackground: string;
    modalBackground: string;

    // Typography
    titleText: string;
    bodyText: string;
    screenTitleText: string;
    inputText: string;
    inputPlaceholder: string;

    // Brand & UI
    accent: string;
    success: string;
    link: string;
    icon: string;
    border: string;
    divider: string;

    // Component Specific
    componentTitle: string;
    componentBody: string;
    componentCaption: string;
    sectionHeader: string;
    price: string;
  };
  spacing: {
    m: { s: number; m: number; l: number; xl: number };
    p: { s: number; m: number; l: number; xl: number };
  };
}

const baseSpacing = {
  m: { s: 8, m: 16, l: 32, xl: 40 },
  p: { s: 8, m: 16, l: 32, xl: 40 },
};

export const darkTheme: ThemeType = {
  themeType: 'dark',
  spacing: baseSpacing,
  colors: {
    background: colorPalette.BLACK,
    foreground: colorPalette.DARK,
    cardBackground: '#1A1A1A',
    modalBackground: colorPalette.DARK,
    titleText: colorPalette.WHITE,
    bodyText: colorPalette.OFF_WHITE,
    screenTitleText: colorPalette.WHITE,
    inputText: colorPalette.WHITE,
    inputPlaceholder: colorPalette.WISTERIA,
    accent: colorPalette.LIGHT_PURPLE,
    success: '#4ADE80',
    link: colorPalette.LAVENDER,
    icon: colorPalette.OFF_WHITE,
    border: colorPalette.WARM_GREY,
    divider: colorPalette.OFF_WHITE,
    componentTitle: colorPalette.WHITE,
    componentBody: colorPalette.OFF_WHITE,
    componentCaption: colorPalette.WARM_GREY_TWO,
    sectionHeader: colorPalette.LIGHT_PURPLE,
    price: colorPalette.LIGHT_PURPLE,
  },
};

export const lightTheme: ThemeType = {
  themeType: 'light',
  spacing: baseSpacing,
  colors: {
    background: colorPalette.WHITE,
    foreground: colorPalette.WHITE_THREE,
    cardBackground: '#F9F9F9',
    modalBackground: colorPalette.WHITE,
    titleText: colorPalette.DARK_BLUE,
    bodyText: colorPalette.DARK_BLUE,
    screenTitleText: colorPalette.DARK_TWO,
    inputText: colorPalette.BLACK,
    inputPlaceholder: colorPalette.WISTERIA,
    accent: colorPalette.DARK_PURPLE,
    success: '#22C55E',
    link: colorPalette.DARK_PURPLE,
    icon: colorPalette.DARK_PURPLE,
    border: colorPalette.WARM_GREY,
    divider: colorPalette.OFF_WHITE,
    componentTitle: colorPalette.CHARCOAL_BLACK,
    componentBody: colorPalette.GREYISH_BROWN,
    componentCaption: colorPalette.WARM_GREY,
    sectionHeader: colorPalette.DARK_TWO,
    price: colorPalette.DARK_PURPLE,
  },
};
