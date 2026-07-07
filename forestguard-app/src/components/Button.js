import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/colors';

export default function Button({
  title,
  onPress,
  variant = 'primary', // primary | secondary | danger | outline
  style,
  textStyle,
}) {
  const variants = {
    primary: { backgroundColor: colors.orange, color: colors.onAccent },
    orange: { backgroundColor: colors.orange, color: colors.onAccent },
    danger: { backgroundColor: colors.red, color: colors.onAccent },
    secondary: {
      backgroundColor: 'rgba(255,255,255,0.08)',
      color: colors.greenPale,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.15)',
    },
    outline: {
      backgroundColor: colors.white,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: v.backgroundColor, borderWidth: v.borderWidth, borderColor: v.borderColor },
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, { color: v.color }, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    borderRadius: radius.lg,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.85 },
  text: { fontSize: 14, fontWeight: '700', letterSpacing: 0.3 },
});
