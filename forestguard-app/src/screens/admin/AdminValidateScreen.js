import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { pendingReports } from '../../data/mockData';

export default function AdminValidateScreen({ route, navigation }) {
  const report = route?.params?.report || pendingReports[0];
  const [note, setNote] = useState('');

  const handleValidate = () => {
    Alert.alert('Reporte validado', 'Se notificará a la zona afectada.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleReject = () => {
    Alert.alert('Reporte rechazado', 'El reporte fue marcado como no válido.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleSendAlert = () => {
    Alert.alert('Alerta enviada', 'Se notificó a los ciudadanos de la zona.');
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </Pressable>
        <Text style={styles.title}>Validar Reporte #{report.id}</Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Text style={{ fontSize: 30 }}>🔥</Text>
          </View>
          <View style={{ padding: 12 }}>
            <Text style={styles.cardTitle}>{report.title}</Text>
            <Text style={styles.cardMeta}>📍 {report.loc}</Text>
            <Text style={styles.cardMeta}>🕐 {report.time}</Text>
            <Text style={styles.cardDesc}>{report.description}</Text>
            <View style={styles.tagsRow}>
              <Text style={[styles.tag, styles.tagAmber]}>{report.status}</Text>
              <Text style={[styles.tag, styles.tagRed]}>{report.type}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionSection}>
          <Text style={styles.actionLabel}>Acción</Text>
          <View style={styles.actionRow}>
            <Pressable style={[styles.actionBtn, { backgroundColor: colors.green }]} onPress={handleValidate}>
              <Text style={styles.actionBtnText}>✅ Validar</Text>
            </Pressable>
            <Pressable style={[styles.actionBtn, { backgroundColor: colors.red }]} onPress={handleReject}>
              <Text style={styles.actionBtnText}>❌ Rechazar</Text>
            </Pressable>
          </View>

          <TextInput
            style={styles.noteInput}
            placeholder="Notas para el ciudadano..."
            placeholderTextColor={colors.mutedLight}
            value={note}
            onChangeText={setNote}
            multiline
          />

          <Pressable style={styles.sendAlertBtn} onPress={handleSendAlert}>
            <Text style={styles.actionBtnText}>📢 Enviar alerta a zona</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface2 },
  header: { backgroundColor: colors.greenDark, paddingHorizontal: 14, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 10 },
  back: { fontSize: 16, color: colors.orange },
  title: { fontSize: 14, fontWeight: '700', color: colors.greenPale },

  card: { margin: 10, backgroundColor: colors.white, borderRadius: radius.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  cardImage: { height: 90, backgroundColor: colors.greenMid, alignItems: 'center', justifyContent: 'center' },
  cardTitle: { fontSize: 13, fontWeight: '700', color: colors.text },
  cardMeta: { fontSize: 11, color: colors.muted, marginTop: 2 },
  cardDesc: { fontSize: 11, color: colors.greenSoft, marginTop: 8, lineHeight: 16 },
  tagsRow: { flexDirection: 'row', gap: 6, marginTop: 8 },
  tag: { fontSize: 10, paddingVertical: 3, paddingHorizontal: 8, borderRadius: 5, fontWeight: '600', overflow: 'hidden' },
  tagAmber: { backgroundColor: colors.badgeAmberBg, color: colors.badgeAmberText },
  tagRed: { backgroundColor: colors.badgeRedBg, color: colors.badgeRedText },

  actionSection: { paddingHorizontal: 10, gap: 8 },
  actionLabel: { fontSize: 12, fontWeight: '700', color: colors.text },
  actionRow: { flexDirection: 'row', gap: 8 },
  actionBtn: { flex: 1, borderRadius: radius.md, paddingVertical: 11, alignItems: 'center' },
  actionBtnText: { color: colors.onAccent, fontSize: 12, fontWeight: '700' },

  noteInput: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 10,
    fontSize: 12,
    color: colors.text,
    minHeight: 44,
    textAlignVertical: 'top',
  },
  sendAlertBtn: { backgroundColor: colors.orange, borderRadius: radius.md, paddingVertical: 11, alignItems: 'center' },
});
