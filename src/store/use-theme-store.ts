import { create } from 'zustand';
import { darkTheme, lightTheme, ThemeType } from '_styles';

interface ThemeState {
  theme: ThemeType;
  selectedThemeValue: 'light' | 'dark' | 'system';

  // Actions
  setTheme: (theme: ThemeType) => void;
  setSelectedThemeValue: (value: 'light' | 'dark' | 'system') => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  // Initial State
  theme: lightTheme,
  selectedThemeValue: 'system',

  setTheme: newTheme => set(() => ({ theme: { ...newTheme } })),

  setSelectedThemeValue: value => set(() => ({ selectedThemeValue: value })),

  toggleTheme: () =>
    set(state => ({
      selectedThemeValue:
        state.selectedThemeValue === 'light' ? 'dark' : 'light',
      theme: state.selectedThemeValue === 'light' ? darkTheme : lightTheme,
    })),
}));
