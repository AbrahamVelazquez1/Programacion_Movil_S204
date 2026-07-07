import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../../theme/colors';
import { TypeChip } from '../../components/Chip';
import { reportTypes } from '../../data/mockData';

export default function ReportScreen() {
  const [selectedType, setSelectedType] = useState('incendio');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    Alert.alert('Reporte enviado', 'Gracias por tu contribución al monitoreo ciudadano.');
    setDescription('');
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Nuevo Reporte</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Pressable style={styles.photoArea}>
          <Text style={{ fontSize: 26 }}>📷</Text>
          <Text style={styles.photoText}>Toca para adjuntar foto</Text>
        </Pressable>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Tipo de incendio</Text>
          <View style={styles.typeOptions}>
            {reportTypes.map((t) => (
              <TypeChip
                key={t.id}
                label={t.label}
                selected={selectedType === t.id}
                onPress={() => setSelectedType(t.id)}
              />
            ))}
          </View>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Descripción</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Describe lo que observas..."
            placeholderTextColor={colors.muted}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Ubicación GPS</Text>
          <View style={styles.gpsRow}>
            <Text style={{ fontSize: 14 }}>📍</Text>
            <Text style={styles.gpsCoords}>20.5878° N, 100.3899° W</Text>
          </View>
        </View>

        <Pressable style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>🚨 Enviar Reporte</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { backgroundColor: colors.orange, paddingHorizontal: 14, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 10 },
  back: { fontSize: 16, color: colors.text },
  title: { fontSize: 14, fontWeight: '700', color: colors.text },
  body: { padding: 14, gap: 14 },

  photoArea: {
    backgroundColor: colors.surface2,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.border,
    borderRadius: radius.lg,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  photoText: { fontSize: 11, color: colors.muted },

  fieldGroup: { gap: 6 },
  fieldLabel: { fontSize: 12, fontWeight: '600', color: colors.text },
  typeOptions: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },

  textInput: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 10,
    fontSize: 12,
    color: colors.text,
    minHeight: 60,
    textAlignVertical: 'top',
  },

  gpsRow: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  gpsCoords: { fontSize: 11, color: colors.muted, fontFamily: 'monospace' },

  submitBtn: { backgroundColor: colors.orange, borderRadius: radius.lg, paddingVertical: 13, alignItems: 'center' },
  submitText: { color: colors.onAccent, fontSize: 13, fontWeight: '700' },
});
