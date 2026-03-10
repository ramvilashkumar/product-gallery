import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type BrokenImageProps = {
  style?: StyleProp<ViewStyle>;
  message?: string;
};

export const BrokenImage = ({
  style,
  message = 'Image unavailable',
}: BrokenImageProps) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  text: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
  },
});