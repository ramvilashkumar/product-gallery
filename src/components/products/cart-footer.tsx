import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import { Plus, Minus } from 'lucide-react-native';
import { CustomText } from '_components';
import { ThemeType } from '../../styles/theme';

type CartFooterProps = {
  quantity: number;
  isFlying: boolean;
  onAdd: () => void;
  onRemove: () => void;
  theme: ThemeType;
  insets: { bottom: number };
};

export const CartFooter = ({
  quantity,
  isFlying,
  onAdd,
  onRemove,
  theme,
  insets,
}: CartFooterProps) => {
  const isDark = theme.themeType === 'dark';

  return (
    <Animated.View
      layout={LinearTransition.springify()}
      style={[
        styles.footer,
        {
          backgroundColor: isDark
            ? theme.colors.cardBackground
            : theme.colors.background,
          paddingBottom: insets.bottom + 16,
        },
      ]}
    >
      {quantity === 0 ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <TouchableOpacity
            disabled={isFlying}
            onPress={onAdd}
            style={[
              styles.buyBtn,
              {
                backgroundColor: isFlying
                  ? theme.colors.divider
                  : theme.colors.accent,
              },
            ]}
          >
            {isFlying && (
              <ActivityIndicator color="#FFF" style={{ marginRight: 10 }} />
            )}
            <CustomText variant="h4" color="#FFF">
              {isFlying ? 'ADDING...' : 'ADD TO CART'}
            </CustomText>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.stepperContainer}
        >
          <TouchableOpacity
            style={[styles.stepBtn, { borderColor: theme.colors.accent }]}
            onPress={onRemove}
          >
            <Minus color={theme.colors.accent} />
          </TouchableOpacity>
          <View style={styles.quantityDisplay}>
            <CustomText variant="h3">{quantity}</CustomText>
            <CustomText variant="label" color={theme.colors.componentCaption}>
              In Cart
            </CustomText>
          </View>
          <TouchableOpacity
            style={[styles.stepBtn, { backgroundColor: theme.colors.accent }]}
            onPress={onAdd}
          >
            {isFlying ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Plus color="#FFF" />
            )}
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  buyBtn: {
    height: 64,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepBtn: {
    width: 64,
    height: 64,
    borderRadius: 22,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityDisplay: { alignItems: 'center' },
});
