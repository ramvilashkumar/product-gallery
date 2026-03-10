import React, { useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigator, StackProps } from './stack-navigator';
import { useThemeStore } from '_store';
import { darkTheme, lightTheme } from '_styles';

export const navigationRef = createNavigationContainerRef();

// export type AppNavigatorScreenProps = CompositeScreenProps<StackProps>
export type AppNavigatorScreenProps = StackProps;

export const AppNavigator = () => {
  const systemColorScheme = useColorScheme();

  const theme = useThemeStore(state => state.theme);
  const selectedThemeValue = useThemeStore(state => state.selectedThemeValue);
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    if (selectedThemeValue === 'system') {
      const targetTheme = systemColorScheme === 'dark' ? darkTheme : lightTheme;
      setTheme(targetTheme);
    }
  }, [systemColorScheme, selectedThemeValue, setTheme]);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme.themeType === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
