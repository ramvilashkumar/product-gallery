import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { useThemeStore } from '_store';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'price'
  | 'label';

interface Props extends TextProps {
  variant?: TextVariant;
  centered?: boolean;
  color?: string;
  children: React.ReactNode;
}

export const CustomText = ({
  variant = 'body',
  centered,
  color,
  style,
  children,
  ...props
}: Props) => {
  const theme = useThemeStore(state => state.theme);

  const getVariantColor = () => {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        return theme.colors.titleText;
      case 'price':
        return theme.colors.price;
      case 'caption':
      case 'label':
        return theme.colors.componentCaption;
      case 'body':
      case 'bodySmall':
      default:
        return theme.colors.bodyText;
    }
  };

  const variantStyle = styles[variant] || styles.body;

  const combinedStyles: TextStyle[] = [
    variantStyle,
    { color: color || getVariantColor() },
    centered ? { textAlign: 'center' } : {},
    style as TextStyle,
  ];

  return (
    <Text style={combinedStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: 0.5,
  },
  h2: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  h4: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  caption: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
