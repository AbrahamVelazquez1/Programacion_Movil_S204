import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { mapFires, mapZones } from '../../data/mockData';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>🗺️ Mapa en vivo</Text>
        <Text style={styles.filterBtn}>Filtrar ▾</Text>
      </View>

      <View style={styles.mapFull}>
        <View style={styles.grid} />

        {mapZones.map((z) => (
          <View
            key={z.id}
            style={[
              styles.zoneOverlay,
              {
                width: z.size,
                height: z.size,
                borderRadius: z.size / 2,
                top: z.top,
                left: z.left,
                borderColor: z.color,
                backgroundColor: z.bg,
              },
            ]}
          />
        ))}

        {mapFires.map((f) => (
          <Text key={f.id} style={[styles.firePin, { top: f.top, left: f.left }]}>
            {f.icon}
          </Text>
        ))}

        <View style={styles.controls}>
          <Pressable style={styles.mapBtn}><Text>＋</Text></Pressable>
          <Pressable style={styles.mapBtn}><Text>－</Text></Pressable>
          <Pressable style={styles.mapBtn}><Text>📍</Text></Pressable>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🔥 Cerro de la Silla</Text>
          <Text style={styles.infoSub}>Querétaro · hace 12 min · 4.2 km</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.chip, styles.chipRed]}>Crítico</Text>
            <Text style={[styles.chip, styles.chipAmber]}>Incendio activo</Text>
            <Text style={[styles.chip, styles.chipGreen]}>Validado</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: { fontSize: 14, fontWeight: '700', color: colors.text, flex: 1 },
  filterBtn: { fontSize: 12, color: colors.orange, fontWeight: '600' },

  mapFull: { flex: 1, backgroundColor: colors.greenMid, position: 'relative', overflow: 'hidden' },
  grid: { ...StyleSheet.absoluteFillObject },

  zoneOverlay: { position: 'absolute', borderWidth: 2, borderStyle: 'dashed' },
  firePin: { position: 'absolute', fontSize: 22 },

  controls: { position: 'absolute', right: 10, top: '45%', gap: 6 },
  mapBtn: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.surface2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoCard: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    backgroundColor: 'rgba(10,14,22,0.92)',
    borderWidth: 1,
    borderColor: 'rgba(255,107,53,0.25)',
    borderRadius: radius.lg,
    padding: 12,
  },
  infoTitle: { fontSize: 13, fontWeight: '700', color: colors.greenPale },
  infoSub: { fontSize: 11, color: colors.greenSoft, marginTop: 2 },
  infoRow: { flexDirection: 'row', gap: 8, marginTop: 8, flexWrap: 'wrap' },
  chip: { fontSize: 10, fontWeight: '600', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden' },
  chipRed: { backgroundColor: 'rgba(220,38,38,0.2)', color: '#fca5a5' },
  chipAmber: { backgroundColor: 'rgba(217,119,6,0.2)', color: '#fcd34d' },
  chipGreen: { backgroundColor: 'rgba(22,163,74,0.2)', color: '#86efac' },
});
