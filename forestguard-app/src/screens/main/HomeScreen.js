import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { currentUser, recentAlerts, mapFires } from '../../data/mockData';

const DOT_COLORS = { red: colors.red, amber: colors.amber, green: colors.green };

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.greeting}>Buen día,</Text>
              <Text style={styles.userName}>{currentUser.firstName} 👋</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Notifications')} style={styles.bellWrap}>
              <Text style={{ fontSize: 22 }}>🔔</Text>
              <View style={styles.bellDot} />
            </Pressable>
          </View>
        </View>

        <View style={styles.alertBanner}>
          <Text style={styles.alertIcon}>⚠️</Text>
          <Text style={styles.alertText}>
            <Text style={styles.alertTextStrong}>Incendio activo a 4.2 km{'\n'}</Text>
            Cerro de la Silla — Zona norte
          </Text>
        </View>

        <Pressable style={styles.mapPreview} onPress={() => navigation.navigate('Mapa')}>
          {mapFires.map((f) => (
            <Text key={f.id} style={[styles.firePin, { top: f.top, left: f.left }]}>
              {f.icon}
            </Text>
          ))}
          <Text style={styles.mapZoneLabel}>Tu zona • {currentUser.municipio}</Text>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Alertas recientes</Text>
          <Pressable onPress={() => navigation.navigate('Alertas')}>
            <Text style={styles.sectionLink}>Ver todas →</Text>
          </Pressable>
        </View>

        <View style={{ paddingHorizontal: 12, gap: 6, paddingBottom: 20 }}>
          {recentAlerts.map((a) => (
            <View key={a.id} style={styles.alertItem}>
              <View style={[styles.alertDot, { backgroundColor: DOT_COLORS[a.dot] }]} />
              <Text style={styles.alertItemText} numberOfLines={1}>
                <Text style={{ fontWeight: '700' }}>{a.title}</Text>
                {a.subtitle ? ` — ${a.subtitle}` : ''}
              </Text>
              <Text style={styles.alertItemTime}>{a.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { backgroundColor: colors.greenMid, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 12, color: colors.greenSoft },
  userName: { fontSize: 18, fontWeight: '700', color: colors.text },
  bellWrap: { position: 'relative' },
  bellDot: { position: 'absolute', top: -1, right: -1, width: 8, height: 8, borderRadius: 4, backgroundColor: '#ef4444', borderWidth: 1.5, borderColor: colors.greenMid },

  alertBanner: {
    backgroundColor: '#7f1d1d',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: radius.lg,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(252,165,165,0.2)',
  },
  alertIcon: { fontSize: 20 },
  alertText: { fontSize: 11, color: '#fca5a5', lineHeight: 16, flex: 1 },
  alertTextStrong: { color: '#fecaca', fontSize: 12, fontWeight: '700' },

  mapPreview: {
    margin: 10,
    height: 130,
    borderRadius: radius.lg,
    backgroundColor: colors.greenMid,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  firePin: { position: 'absolute', fontSize: 20 },
  mapZoneLabel: { position: 'absolute', bottom: 8, left: 10, fontSize: 11, color: colors.greenSoft, fontFamily: 'monospace' },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14, paddingTop: 6, paddingBottom: 4 },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: colors.text },
  sectionLink: { fontSize: 11, color: colors.orange },

  alertItem: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  alertDot: { width: 8, height: 8, borderRadius: 4 },
  alertItemText: { fontSize: 12, color: colors.text, flex: 1 },
  alertItemTime: { fontSize: 10, color: colors.muted },
});
