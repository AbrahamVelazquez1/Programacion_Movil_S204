import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradientFallback } from '../../components/LinearGradientFallback';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../theme/colors';

export default function LoginScreen({ navigation, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradientFallback style={styles.screen}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, width: '100%' }}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.logo}>🔥</Text>
          <Text style={styles.appName}>FireWatch</Text>
          <Text style={styles.tagline}>
            Monitoreo y prevención de{'\n'}incendios forestales
          </Text>

          <Input icon={<Text>✉️</Text>} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <View style={{ height: 10 }} />
          <Input icon={<Text>🔒</Text>} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
          <View style={{ height: 16 }} />

          <Button title="Iniciar Sesión" onPress={() => onLogin('citizen')} />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button variant="secondary" title="🔵  Continuar con Google" onPress={() => onLogin('citizen')} />

          <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 14 }}>
            <Text style={styles.link}>
              ¿No tienes cuenta? <Text style={styles.linkStrong}>Regístrate</Text>
            </Text>
          </Pressable>
          <Pressable style={{ marginTop: 8 }}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </Pressable>

          <Pressable onPress={() => onLogin('admin')} style={{ marginTop: 28 }}>
            <Text style={styles.adminLink}>🛡️ Acceder como Protección Civil (Admin)</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradientFallback>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
  logo: { fontSize: 48, marginBottom: 4 },
  appName: { fontSize: 24, fontWeight: '800', color: colors.greenPale, letterSpacing: -0.5 },
  tagline: { fontSize: 12, color: colors.greenSoft, textAlign: 'center', lineHeight: 18, marginTop: 6, marginBottom: 18 },
  divider: { flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%', marginVertical: 14 },
  dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.12)' },
  dividerText: { fontSize: 11, color: 'rgba(255,255,255,0.4)' },
  link: { fontSize: 12, color: colors.greenSoft, textAlign: 'center' },
  linkStrong: { fontWeight: '700' },
  adminLink: { fontSize: 11, color: 'rgba(255,255,255,0.55)', textAlign: 'center' },
});
