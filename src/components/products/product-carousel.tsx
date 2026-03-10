import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { BrokenImage } from '../custom/broken-image';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

type ProductCarouselProps = {
  images: string[];
  productId: string | number;
  isDark: boolean;
  scrollX: SharedValue<number>;
};

export const ProductCarousel = ({
  images,
  productId,
  isDark,
  scrollX,
}: ProductCarouselProps) => {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const markImageAsFailed = useCallback((index: number) => {
    setFailedImages(prev => ({ ...prev, [index]: true }));
  }, []);

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((img: string, index: number) => {
          const imageStyle = useAnimatedStyle(() => ({
            transform: [
              {
                translateX: interpolate(
                  scrollX.value,
                  [(index - 1) * width, index * width, (index + 1) * width],
                  [-width * 0.2, 0, width * 0.2],
                  Extrapolation.CLAMP,
                ),
              },
              { scale: 1.1 },
            ],
          }));

          const hasError = failedImages[index];

          return (
            <View key={index} style={styles.slide}>
              {hasError ? (
                <BrokenImage style={styles.image} />
              ) : (
                <AnimatedFastImage
                  source={{ uri: img }}
                  style={[styles.image, imageStyle]}
                  sharedTransitionTag={`image-${productId}`}
                  onError={() => markImageAsFailed(index)}
                />
              )}
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, i: number) => {
          const dotStyle = useAnimatedStyle(() => ({
            width: interpolate(
              scrollX.value,
              [(i - 0.5) * width, i * width, (i + 0.5) * width],
              [6, 20, 6],
              Extrapolation.CLAMP,
            ),
            opacity: interpolate(
              scrollX.value,
              [(i - 0.5) * width, i * width, (i + 0.5) * width],
              [0.3, 1, 0.3],
              Extrapolation.CLAMP,
            ),
          }));
          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                dotStyle,
                { backgroundColor: isDark ? '#FFF' : '#000' },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: Dimensions.get('window').height * 0.55 },
  slide: { width, overflow: 'hidden' },
  image: { width, height: '100%' },
  indicatorContainer: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  dot: { height: 6, borderRadius: 3 },
});
