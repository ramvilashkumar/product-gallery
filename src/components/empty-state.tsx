import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CustomText } from '_components';
import { useThemeStore } from '_store';
import { Search } from 'lucide-react-native';

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState = ({ onReset }: EmptyStateProps) => {
  const theme = useThemeStore(state => state.theme);

  return (
    <Animated.View entering={FadeInDown.springify()} style={styles.container}>
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: theme.colors.cardBackground },
        ]}
      >
        <Search color={theme.colors.bodyText} size={30} />
      </View>

      <CustomText
        variant="h3"
        color={theme.colors.titleText}
        style={styles.title}
      >
        No Products Found
      </CustomText>

      <CustomText
        variant="body"
        color={theme.colors.componentCaption}
        style={styles.subtitle}
      >
        We couldn't find any items matching this category. Try switching back to
        'All'.
      </CustomText>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onReset}
        style={[styles.button, { backgroundColor: theme.colors.accent }]}
      >
        <CustomText variant="h4" color="#FFF">
          Explore All Products
        </CustomText>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 60, // Centers it visually within the FlashList
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emoji: {
    fontSize: 40,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
});
