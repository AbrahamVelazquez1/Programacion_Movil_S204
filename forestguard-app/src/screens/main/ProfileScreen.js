import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { currentUser } from '../../data/mockData';

const MENU = [
  { id: 'mis-reportes', icon: '📋', label: 'Mis reportes', screen: 'History' },
  { id: 'alertas', icon: '🔔', label: 'Configurar alertas' },
  { id: 'zonas', icon: '🗺️', label: 'Mis zonas de interés' },
  { id: 'seguridad', icon: '🔒', label: 'Seguridad y contraseña' },
  { id: 'config', icon: '⚙️', label: 'Configuración' },
];

export default function ProfileScreen({ navigation, onLogout }) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 24 }}>🧑</Text>
        </View>
        <Text style={styles.name}>{currentUser.name}</Text>
        <Text style={styles.role}>👤 {currentUser.role} · {currentUser.municipio}</Text>
        <View style={styles.statsRow}>
          <Stat value={currentUser.stats.reportes} label="Reportes" />
          <View style={styles.statDivider} />
          <Stat value={currentUser.stats.validados} label="Validados" />
          <View style={styles.statDivider} />
          <Stat value={currentUser.stats.zonas} label="Zonas" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        {MENU.map((item) => (
          <Pressable
            key={item.id}
            style={styles.menuItem}
            onPress={() => item.screen && navigation.navigate(item.screen)}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.label}</Text>
            <Text style={styles.menuArrow}>›</Text>
          </Pressable>
        ))}

        <Pressable style={[styles.menuItem, { borderColor: 'rgba(239,68,68,0.35)' }]} onPress={onLogout}>
          <Text style={styles.menuIcon}>🚪</Text>
          <Text style={[styles.menuText, { color: colors.red }]}>Cerrar sesión</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function Stat({ value, label }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { backgroundColor: colors.greenMid, paddingVertical: 18, alignItems: 'center', gap: 6 },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.orangeLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  name: { fontSize: 15, fontWeight: '700', color: colors.text },
  role: { fontSize: 11, color: colors.greenSoft },
  statsRow: { flexDirection: 'row', gap: 16, marginTop: 8, alignItems: 'center' },
  statDivider: { width: 1, height: 24, backgroundColor: 'rgba(255,255,255,0.15)' },
  statValue: { fontSize: 15, fontWeight: '800', color: colors.greenPale },
  statLabel: { fontSize: 10, color: colors.greenSoft },

  menuList: { padding: 12, gap: 6 },
  menuItem: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuIcon: { fontSize: 15, width: 22, textAlign: 'center' },
  menuText: { fontSize: 13, fontWeight: '500', color: colors.text, flex: 1 },
  menuArrow: { fontSize: 15, color: colors.muted },
});
