import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { radius } from '../theme/colors';

export default function Input({ icon, placeholder, secureTextEntry, value, onChangeText, keyboardType, dark = true }) {
  return (
    <View style={[styles.wrap, dark ? styles.dark : styles.light]}>
      {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={dark ? 'rgba(255,255,255,0.5)' : '#94a3b8'}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={[styles.input, { color: dark ? '#fff' : '#0f172a' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: radius.lg,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
  },
  dark: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.15)',
  },
  light: {
    backgroundColor: '#fff',
    borderColor: '#e2e8f0',
  },
  iconWrap: { width: 18, alignItems: 'center' },
  input: { flex: 1, fontSize: 13, paddingVertical: 10 },
});
