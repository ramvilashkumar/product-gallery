import React, { useState, useRef, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BrokenImage } from '_components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  runOnJS,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';
import {
  CustomText,
  CartFooter,
  ProductCarousel,
  ProductHeader,
} from '_components';
import { useThemeStore, useCartStore } from '_store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { RootRouteProps } from '_navigation/stack-navigator';

const { width, height } = Dimensions.get('window');

export const ProductDetailScreen = ({ navigation }: any) => {
  const { product } = useRoute<RootRouteProps<'ProductDetail'>>().params;
  const theme = useThemeStore(state => state.theme);
  const isDark = theme.themeType === 'dark';
  const insets = useSafeAreaInsets();

  const { items, addToCart, removeFromCart, getTotalCount } = useCartStore();
  const quantity = items[product.id] || 0;
  const totalCartCount = getTotalCount();

  // Animation Shared Values
  const cartRef = useRef<View>(null);
  const scrollX = useSharedValue(0);
  const cartScale = useSharedValue(1);
  const flyX = useSharedValue(0);
  const flyY = useSharedValue(0);
  const flyScale = useSharedValue(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isFlyImageFailed, setIsFlyImageFailed] = useState(false);

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const hapticTrigger = (type: HapticFeedbackTypes) => {
    ReactNativeHapticFeedback.trigger(type, {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
  };

  // FIXED: Trigger animation INSIDE the measurement callback
  const handleAddToCartAction = () => {
    if (isFlying || !cartRef.current) return;

    cartRef.current.measureInWindow((x, y, w, h) => {
      // 1. Calculate Target Coordinates
      const targetXValue = x + w / 2 - width / 2;
      const startYPos = height - (insets.bottom + 48 + 40);
      const targetYValue = y + h / 2 - startYPos;

      // 2. Prepare and Start Animation
      flyX.value = 0;
      flyY.value = 0;
      runOnJS(setIsFlying)(true);
      hapticTrigger(HapticFeedbackTypes.impactMedium);

      flyScale.value = withSpring(1);
      flyX.value = withSpring(targetXValue, { damping: 30, stiffness: 90 });
      flyY.value = withSpring(
        targetYValue,
        { damping: 30, stiffness: 90 },
        finished => {
          if (finished) {
            cartScale.value = withSequence(withSpring(1.5), withSpring(1));
            flyScale.value = 0;
            runOnJS(addToCart)(product.id);
            runOnJS(setIsFlying)(false);
            runOnJS(hapticTrigger)(HapticFeedbackTypes.notificationSuccess);
          }
        },
      );
    });
  };

  const flyStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    bottom: insets.bottom + 48,
    left: 0, // Anchoring horizontally for center alignment
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
    opacity: flyScale.value,
    transform: [
      { translateX: flyX.value },
      { translateY: flyY.value },
      {
        scale:
          flyScale.value *
          interpolate(
            flyY.value,
            [0, -height * 0.5],
            [1, 0.25],
            Extrapolation.CLAMP,
          ),
      },
    ],
  }));

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />

      <ProductHeader
        cartRef={cartRef}
        cartScale={cartScale}
        totalCount={totalCartCount}
        insets={{ top: insets.top }}
        onBack={() => navigation.goBack()}
      />

      {/* FLYING ELEMENT */}
      <Animated.View style={flyStyle} pointerEvents="none">
        {isFlyImageFailed ? (
          <BrokenImage style={styles.flyImage} />
        ) : (
          <FastImage
            source={{ uri: product.images[0] }}
            style={styles.flyImage}
            onError={() => setIsFlyImageFailed(true)}
          />
        )}
      </Animated.View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ProductCarousel
          images={product.images}
          productId={product.id}
          scrollX={scrollX}
          isDark={isDark}
        />

        <View
          style={[
            styles.content,
            {
              backgroundColor: isDark
                ? theme.colors.cardBackground
                : theme.colors.background,
            },
          ]}
        >
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <CustomText variant="h1">{product.name}</CustomText>
              <CustomText variant="label" color={theme.colors.componentCaption}>
                {product.category}
              </CustomText>
            </View>
            <CustomText
              variant="price"
              color={theme.colors.accent}
              style={styles.priceText}
            >
              ${product.price}
            </CustomText>
          </View>
          <CustomText variant="body" style={styles.description}>
            {product.description}
          </CustomText>
          <View style={{ height: 160 }} />
        </View>
      </ScrollView>

      <CartFooter
        quantity={quantity}
        isFlying={isFlying}
        onAdd={handleAddToCartAction}
        onRemove={() => removeFromCart(product.id)}
        theme={theme}
        insets={insets}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priceText: { fontSize: 28 },
  description: { lineHeight: 26, opacity: 0.8 },
  flyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
});
