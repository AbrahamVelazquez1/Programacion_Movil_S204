import React from 'react';
import { Text } from 'react-native';

export default function TabIcon({ emoji, focused }) {
  return <Text style={{ fontSize: 18, opacity: focused ? 1 : 0.6 }}>{emoji}</Text>;
}
