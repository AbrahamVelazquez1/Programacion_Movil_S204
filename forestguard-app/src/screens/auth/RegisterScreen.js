import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradientFallback } from '../../components/LinearGradientFallback';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../theme/colors';

export default function RegisterScreen({ navigation, onLogin }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '', municipio: '' });

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <LinearGradientFallback style={styles.screen}>
      <StatusBar style="light" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, width: '100%' }}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Volver</Text>
          </Pressable>
          <Text style={styles.title}>Crear cuenta</Text>
          <Text style={styles.subtitle}>Únete al monitoreo ciudadano</Text>

          <Input icon={<Text>👤</Text>} placeholder="Nombre completo" value={form.name} onChangeText={set('name')} />
          <View style={{ height: 10 }} />
          <Input icon={<Text>✉️</Text>} placeholder="Correo electrónico" value={form.email} onChangeText={set('email')} keyboardType="email-address" />
          <View style={{ height: 10 }} />
          <Input icon={<Text>📱</Text>} placeholder="Teléfono (opcional)" value={form.phone} onChangeText={set('phone')} keyboardType="phone-pad" />
          <View style={{ height: 10 }} />
          <Input icon={<Text>🔒</Text>} placeholder="Contraseña" value={form.password} onChangeText={set('password')} secureTextEntry />
          <View style={{ height: 10 }} />
          <Input icon={<Text>🔒</Text>} placeholder="Confirmar contraseña" value={form.confirm} onChangeText={set('confirm')} secureTextEntry />
          <View style={{ height: 10 }} />
          <Input icon={<Text>🏙️</Text>} placeholder="Municipio" value={form.municipio} onChangeText={set('municipio')} />
          <View style={{ height: 16 }} />

          <Button title="Crear cuenta" onPress={() => onLogin('citizen')} />
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradientFallback>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40, gap: 2 },
  back: { fontSize: 12, color: colors.greenSoft, marginBottom: 18 },
  title: { fontSize: 20, fontWeight: '800', color: colors.greenPale },
  subtitle: { fontSize: 12, color: colors.greenSoft, marginBottom: 16 },
});
