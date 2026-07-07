import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/colors';

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function HeaderBar({ title, onBack, bg = colors.greenDark, color = colors.greenPale }) {
  return (
    <View style={[styles.header, { backgroundColor: bg }]}>
      {onBack ? (
        <Pressable onPress={onBack} hitSlop={10}>
          <Text style={[styles.back, { color: colors.orange }]}>←</Text>
        </Pressable>
      ) : null}
      <Text style={[styles.title, { color }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  back: { fontSize: 18 },
  title: { fontSize: 15, fontWeight: '700' },
});
