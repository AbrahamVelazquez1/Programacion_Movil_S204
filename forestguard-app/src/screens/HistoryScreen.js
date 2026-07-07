import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../theme/colors';
import { HeaderBar } from '../components/Card';
import { FilterPill } from '../components/Chip';
import { StatusBadge } from '../components/Chip';
import { myReports } from '../data/mockData';

const FILTERS = ['Todos', 'Activos', 'Validados', 'Resueltos'];

export default function HistoryScreen({ navigation }) {
  const [filter, setFilter] = useState('Todos');

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <HeaderBar title="Mis Reportes 📋" onBack={() => navigation.goBack()} bg={colors.white} color={colors.text} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {FILTERS.map((f) => (
          <FilterPill key={f} label={f} active={filter === f} onPress={() => setFilter(f)} />
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={{ padding: 10, gap: 6 }}>
        {myReports.map((r) => (
          <View key={r.id} style={styles.item}>
            <View style={styles.thumb}>
              <Text style={{ fontSize: 18 }}>{r.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{r.name}</Text>
              <Text style={styles.loc}>📍 {r.loc}</Text>
              <View style={styles.badgesRow}>
                {r.badges.map((b, i) => (
                  <StatusBadge key={i} label={b.label} kind={b.kind} />
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  filterRow: { paddingHorizontal: 10, paddingVertical: 8, gap: 6 },
  item: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 11,
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  thumb: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.greenMid,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontSize: 13, fontWeight: '600', color: colors.text },
  loc: { fontSize: 11, color: colors.muted, marginTop: 1 },
  badgesRow: { flexDirection: 'row', gap: 5, marginTop: 5 },
});
