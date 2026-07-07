import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

// Fondo degradado usado en las pantallas de autenticación (login/registro),
// replicando el linear-gradient(160deg, ...) del mockup original.
export function LinearGradientFallback({ children, style }) {
  return (
    <LinearGradient
      colors={[colors.authGradientTop, colors.authGradientMid, colors.authGradientBottom]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
