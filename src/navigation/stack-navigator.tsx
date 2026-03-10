import React, { useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { ProductGalleryScreen, ProductDetailScreen } from '_screens';
import { useThemeStore } from '_store';
import { Product } from '_mock-data';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  ProductGallery: undefined;
  ProductDetail: { product: Product };
};

export type StackProps = NativeStackScreenProps<RootStackParamList>;

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const theme = useThemeStore(state => state.theme);

  const screenOptions = useMemo(
    () => ({
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.accent,
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: '700' as const,
        color: theme.colors.titleText,
      },
      headerShadowVisible: false,

      animation: 'fade' as const,
    }),
    [theme],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="ProductGallery"
        component={ProductGalleryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
