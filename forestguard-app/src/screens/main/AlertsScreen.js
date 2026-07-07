import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { activeAlerts } from '../../data/mockData';

const LEVEL_STYLES = {
  critico: { borderColor: colors.red, bg: colors.surface, badgeBg: colors.badgeRedBg, badgeColor: colors.badgeRedText },
  moderado: { borderColor: colors.amber, bg: colors.surface, badgeBg: colors.badgeAmberBg, badgeColor: colors.badgeAmberText },
  bajo: { borderColor: colors.green, bg: colors.surface, badgeBg: colors.badgeGreenBg, badgeColor: colors.badgeGreenText },
};

export default function AlertsScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Alertas activas 🔔</Text>
        <Text style={styles.subtitle}>{activeAlerts.length} alertas en tu zona</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 10, gap: 8 }}>
        {activeAlerts.map((a) => {
          const s = LEVEL_STYLES[a.level];
          return (
            <View key={a.id} style={[styles.card, { borderLeftColor: s.borderColor, backgroundColor: s.bg }]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {a.icon} {a.title}
                </Text>
                <Text style={[styles.badge, { backgroundColor: s.badgeBg, color: s.badgeColor }]}>{a.badge}</Text>
              </View>
              <Text style={styles.cardBody}>{a.body}</Text>
              <Text style={styles.cardMeta}>{a.meta}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { backgroundColor: colors.white, paddingHorizontal: 14, paddingTop: 10, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: colors.border },
  title: { fontSize: 17, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 11, color: colors.muted },

  card: {
    borderRadius: radius.lg,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, gap: 8 },
  cardTitle: { fontSize: 12, fontWeight: '700', color: colors.text, flex: 1 },
  badge: { fontSize: 10, fontWeight: '700', paddingVertical: 2, paddingHorizontal: 7, borderRadius: 20, overflow: 'hidden' },
  cardBody: { fontSize: 11, color: colors.muted, lineHeight: 16 },
  cardMeta: { fontSize: 10, color: colors.mutedLight, marginTop: 5 },
});
