import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
// Explicitly import SharedValue and useAnimatedStyle
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import { CustomText } from '_components';
import { useThemeStore } from '_store';

interface ProductHeaderProps {
  cartRef: React.RefObject<View | null>;
  cartScale: SharedValue<number>;
  totalCount: number;
  insets: { top: number };
  onBack: () => void;
}

export const ProductHeader = ({
  cartRef,
  cartScale,
  totalCount,
  insets,
  onBack,
}: ProductHeaderProps) => {
  const theme = useThemeStore(state => state.theme);
  const isDark = theme.themeType === 'dark';

  const cartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: cartScale.value }],
  }));

  return (
    <View style={[styles.header, { top: insets.top + 5 }]}>
      <TouchableOpacity
        onPress={onBack}
        style={[
          styles.glassButton,
          {
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(255, 255, 255, 0.85)',
          },
        ]}
      >
        <ArrowLeft color={isDark ? '#FFF' : '#000'} size={24} />
      </TouchableOpacity>

      <Animated.View
        ref={cartRef}
        style={[styles.cartContainer, cartAnimatedStyle]}
      >
        {totalCount > 0 && (
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            style={[styles.badge, { backgroundColor: theme.colors.success }]}
          >
            <CustomText variant="label" color="#FFF" style={styles.badgeText}>
              {totalCount}
            </CustomText>
          </Animated.View>
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.glassButton,
            {
              backgroundColor: isDark
                ? 'rgba(255, 255, 255, 0.15)'
                : 'rgba(255, 255, 255, 0.85)',
            },
          ]}
        >
          <ShoppingCart color={isDark ? '#FFF' : '#000'} size={22} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  glassButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: { elevation: 4 },
    }),
  },
  cartContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
