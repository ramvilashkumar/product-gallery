# eKart - Interactive E-Commerce Product Gallery

## Overview

This repository implements an interactive product gallery with rich animation, product detail carousel, and add-to-cart destination animations. The app is a high-fidelity mobile UX demo with polished transitions and efficient state management.

- Demo video link: https://drive.google.com/file/d/1rag5nNhiP2SlFzI-E9gWcex2bEWI45JP/view?usp=share_link

## Tech Stack

- React Native `0.84.1`
- TypeScript
- React Navigation (native-stack)
- Reanimated v4(`react-native-reanimated`)
- Gesture Handler (`react-native-gesture-handler`)
- Zustand for state management (`useCartStore`, `useThemeStore`)

## Features implemented

### 1) Product Gallery

- `FlatList` grid layout in `src/screens/product-gallary-screen.tsx`. For production high performance we can consider FlashList from @shopify/flashlist

- Mock product dataset in `src/mock-data/products-data.ts` (20+ products, 3+ images each)
- Shared element hero transition using `sharedTransitionTag` from list item to detail image

### 2) Product Detail & Carousel

- `ProductDetailScreen` with `ProductCarousel` component,
- `Animated.ScrollView` horizontal `pagingEnabled`
- Per-image parallax effect (translate interpolation via `useAnimatedStyle`)
- Reviews screen and data layout (name/price/category/description)

### 3) Add-to-Cart animation

- `CartFooter` with `ADD TO CART` and steppers
- Cart fly animation in `ProductDetailScreen` via `flyX`, `flyY`, `flyScale` shared values
- Bump animation on cart icon via `cartScale` from `ProductHeader`

### 4) Broken image fallback

- Shared `BrokenImage` component for all image error states in carousel/gallery/detail transitions
- Uses native `Text` + fallback style

## Architecture

- `src/components/` for reusable components
- `src/screens/` for application screens (pages)
- `src/store/` for application state management using Zustand
- `src/mock-data/` for mock API data
- `src/style/` for color palette, theme configuration, and global styles
- `src/hooks/` for reusable hooks and functionality
- `src/navigation/` for stack and root navigation, and can be extended for other navigators in the future (e.g., MaterialTopTabNavigator, BottomTabNavigator)TabNavigator)
- Path aliases enabled via `babel-plugin-module-resolver` (ex: `_components` maps to `src/components/index`), so component imports use short alias paths with `import { CartFooter } from '_components';`

## Performance and profiling

- All heavy animations are implemented using Reanimated shared values and `useAnimatedStyle`, offloading work to UI thread.
- Carousel and hero transitions are hardware-accelerated and animated fully on the native thread.
- Verified smoothness sustained close to 60 FPS with minimal main-thread JS usage.

## Workflow

1. Install dependencies:
   - `bun install`
2. Run iOS:
   - `bun ios` (or `npx react-native run-ios`)
3. Run Android:
   - `bun android` (or `npx react-native run-android`)
4. Metro reset if stale:
   - `bun start --reset-cache`

## Known caveats / trade-offs

- Cart-flight animation is crafted to visually demonstrate design intent; may need offset tweaking for different screen sizes.
- Reanimated transitions are in place; if targeting older low-end devices, reduce animation duration to avoid drop frames.
