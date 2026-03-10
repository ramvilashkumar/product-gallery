import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { useThemeStore } from '_store';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 44) / 2;

export const ShimmerCard = () => {
  const theme = useThemeStore(state => state.theme);
  const shimmerValue = useSharedValue(0);

  useEffect(() => {
    shimmerValue.value = withRepeat(withTiming(1, { duration: 1500 }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      shimmerValue.value,
      [0, 1],
      [-COLUMN_WIDTH, COLUMN_WIDTH],
    );
    return { transform: [{ translateX }] };
  });

  return (
    <View
      style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}
    >
      {/* Ghost Image */}
      <View
        style={[
          styles.imagePlaceholder,
          { backgroundColor: theme.colors.background },
        ]}
      />

      {/* Ghost Text lines */}
      <View style={styles.info}>
        <View
          style={[
            styles.lineSmall,
            { backgroundColor: theme.colors.background },
          ]}
        />
        <View
          style={[
            styles.lineLarge,
            { backgroundColor: theme.colors.background },
          ]}
        />
        <View
          style={[
            styles.lineMedium,
            { backgroundColor: theme.colors.background },
          ]}
        />
      </View>

      {/* The actual Shimmer Overlay */}
      <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.2)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: COLUMN_WIDTH,
    borderRadius: 24,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: COLUMN_WIDTH * 1.3,
  },
  info: { padding: 14, gap: 8 },
  lineSmall: { width: '40%', height: 10, borderRadius: 4 },
  lineLarge: { width: '90%', height: 14, borderRadius: 4 },
  lineMedium: { width: '60%', height: 14, borderRadius: 4 },
});
