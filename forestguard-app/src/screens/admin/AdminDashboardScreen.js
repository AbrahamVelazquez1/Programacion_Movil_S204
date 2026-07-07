import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { adminStats, topMunicipios, pendingReports } from '../../data/mockData';

const STAT_COLOR = { red: colors.red, amber: colors.amber, green: colors.green, default: colors.text };

export default function AdminDashboardScreen({ navigation, onLogout }) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Dashboard Admin 🛡️</Text>
          <Text style={styles.subtitle}>Sistema activo · Tiempo real</Text>
        </View>
        <Pressable onPress={onLogout}>
          <Text style={styles.logout}>Salir</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.statsGrid}>
          {adminStats.map((s) => (
            <View key={s.id} style={styles.statCard}>
              <Text style={[styles.statValue, { color: STAT_COLOR[s.kind] }]}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top municipios con incidentes</Text>
          {topMunicipios.map((m) => (
            <View key={m.id} style={styles.muniRow}>
              <Text style={styles.muniRank}>{m.rank}</Text>
              <Text style={styles.muniName}>{m.name}</Text>
              <Text style={styles.muniCount}>{m.count}</Text>
              <View style={styles.muniBar}>
                <View style={[styles.muniFill, { width: `${m.pct}%` }]} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reportes pendientes de validar</Text>
          {pendingReports.map((r) => (
            <Pressable
              key={r.id}
              style={styles.pendingRow}
              onPress={() => navigation.navigate('AdminValidate', { report: r })}
            >
              <Text style={{ fontSize: 16 }}>🔥</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.pendingTitle}>{r.title}</Text>
                <Text style={styles.pendingMeta}>📍 {r.loc} · {r.time}</Text>
              </View>
              <Text style={styles.pendingArrow}>›</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { backgroundColor: colors.greenDark, paddingHorizontal: 14, paddingVertical: 12, flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 15, fontWeight: '700', color: colors.greenPale },
  subtitle: { fontSize: 11, color: colors.green },
  logout: { fontSize: 11, color: colors.greenSoft },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, padding: 10 },
  statCard: { width: '48%', backgroundColor: colors.white, borderRadius: radius.md, padding: 10, borderWidth: 1, borderColor: colors.border },
  statValue: { fontSize: 22, fontWeight: '800', color: colors.text, lineHeight: 26 },
  statLabel: { fontSize: 11, color: colors.muted, marginTop: 2 },

  section: { paddingHorizontal: 10, marginTop: 6 },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: colors.text, marginBottom: 6 },

  muniRow: {
    backgroundColor: colors.white,
    borderRadius: 7,
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  muniRank: { fontSize: 13, fontWeight: '800', color: colors.muted, width: 16 },
  muniName: { fontSize: 12, fontWeight: '600', color: colors.text, flex: 1 },
  muniCount: { fontSize: 12, fontWeight: '700', color: colors.orange },
  muniBar: { width: 50, height: 5, backgroundColor: colors.border, borderRadius: 3, overflow: 'hidden' },
  muniFill: { height: '100%', backgroundColor: colors.orange, borderRadius: 3 },

  pendingRow: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pendingTitle: { fontSize: 12, fontWeight: '600', color: colors.text },
  pendingMeta: { fontSize: 10, color: colors.muted, marginTop: 2 },
  pendingArrow: { fontSize: 16, color: colors.muted },
});
