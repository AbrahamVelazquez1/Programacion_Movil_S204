import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/colors';

export function TypeChip({ label, selected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{label}</Text>
    </Pressable>
  );
}

export function FilterPill({ label, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.pill, active && styles.pillActive]}>
      <Text style={[styles.pillText, active && styles.pillTextActive]}>{label}</Text>
    </Pressable>
  );
}

const BADGE_STYLES = {
  activo: { bg: colors.badgeRedBg, color: colors.badgeRedText },
  critico: { bg: colors.badgeRedBg, color: colors.badgeRedText },
  validado: { bg: colors.badgeGreenBg, color: colors.badgeGreenText },
  resuelto: { bg: colors.badgeGreenBg, color: colors.badgeGreenText },
  revision: { bg: colors.badgeAmberBg, color: colors.badgeAmberText },
};

export function StatusBadge({ label, kind = 'validado' }) {
  const s = BADGE_STYLES[kind] || BADGE_STYLES.validado;
  return (
    <Text style={[styles.badge, { backgroundColor: s.bg, color: s.color }]}>{label}</Text>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  chipSelected: {
    borderColor: colors.orange,
    backgroundColor: colors.badgeOrangeBg,
  },
  chipText: { fontSize: 12, color: colors.muted, fontWeight: '500' },
  chipTextSelected: { color: colors.badgeOrangeText },

  pill: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  pillActive: { borderColor: colors.orange, backgroundColor: colors.badgeOrangeBg },
  pillText: { fontSize: 12, color: colors.muted },
  pillTextActive: { color: colors.badgeOrangeText, fontWeight: '600' },

  badge: {
    fontSize: 10,
    fontWeight: '700',
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 6,
    overflow: 'hidden',
  },
});
