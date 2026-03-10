import React, { useCallback, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import { BrokenImage } from '_components';
import Animated, {
  FadeInRight,
  LinearTransition,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CustomText, EmptyState, ShimmerCard } from '_components';
import { useProducts } from '_hooks';
import { useThemeStore } from '_store';
import { Product } from '_mock-data';
import { AppNavigatorScreenProps } from '_navigation/app-navigator';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 44) / 2;
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Accessories', 'Home'];

interface Props extends AppNavigatorScreenProps {}

export const ProductGalleryScreen = ({ navigation }: Props) => {
  const theme = useThemeStore(state => state.theme);
  const insets = useSafeAreaInsets();

  const { products, isLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markImageAsFailed = useCallback((productId: string) => {
    setFailedImages(prev => ({ ...prev, [productId]: true }));
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory, products]);

  const skeletonData = useMemo(() => Array(6).fill({ id: 'shimmer' }), []);

  const handleReset = useCallback(() => setSelectedCategory('All'), []);

  const renderItem = useCallback(
    ({ item, index }: { item: Product; index: number }) => {
      if (isLoading) {
        return <ShimmerCard />;
      }

      return (
        <Animated.View
          layout={LinearTransition.springify()}
          entering={FadeInRight.delay(index * 50).duration(400)}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate('ProductDetail', { product: item })
            }
            style={[
              styles.card,
              { backgroundColor: theme.colors.cardBackground },
            ]}
          >
            {failedImages[item.id] ? (
              <BrokenImage style={styles.image} />
            ) : (
              <AnimatedFastImage
                source={{
                  uri: item.images[0],
                  priority: FastImage.priority.high,
                }}
                style={styles.image}
                sharedTransitionTag={`image-${item.id}`}
                resizeMode={FastImage.resizeMode.cover}
                onError={() => markImageAsFailed(item.id)}
              />
            )}
            <View style={styles.info}>
              <CustomText variant="label" color={theme.colors.accent}>
                {item.category}
              </CustomText>
              <CustomText
                variant="h4"
                numberOfLines={1}
                color={theme.colors.titleText}
              >
                {item.name}
              </CustomText>
              <CustomText variant="price" color={theme.colors.titleText}>
                ${item.price.toFixed(2)}
              </CustomText>
            </View>
          </TouchableOpacity>
        </Animated.View>
      );
    },
    [theme, navigation, isLoading, failedImages, markImageAsFailed],
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* 1. TOP TAB NAVIGATOR */}
      <View style={{ paddingTop: insets.top }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabBarContainer}
        >
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={styles.tabItem}
              >
                {isActive && (
                  <Animated.View
                    layout={LinearTransition.springify()}
                    style={[
                      styles.activePill,
                      { backgroundColor: theme.colors.accent },
                    ]}
                  />
                )}
                <CustomText
                  variant="h4"
                  color={isActive ? '#FFF' : theme.colors.componentCaption}
                  style={styles.tabText}
                >
                  {cat}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* 2. PRODUCT GRID (FlashList) */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={isLoading ? skeletonData : filteredProducts}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) =>
            isLoading ? `shimmer-${index}` : item.id
          }
          //  estimatedItemSize={280}
          // Only show EmptyState if we aren't loading
          ListEmptyComponent={
            !isLoading ? <EmptyState onReset={handleReset} /> : null
          }
          contentContainerStyle={
            !isLoading && filteredProducts.length === 0
              ? { height: '100%' }
              : styles.listPadding
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabBarContainer: { paddingHorizontal: 16, paddingVertical: 12, gap: 8 },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activePill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 25,
    zIndex: -1,
  },
  tabText: { fontSize: 15 },
  listPadding: { paddingHorizontal: 16, paddingBottom: 40 },
  card: {
    width: COLUMN_WIDTH,
    borderRadius: 24,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: { elevation: 4 },
    }),
  },
  image: {
    width: '100%',
    height: COLUMN_WIDTH * 1.3,
    backgroundColor: '#f0f0f0',
  },
  info: { padding: 14, gap: 2 },
});
