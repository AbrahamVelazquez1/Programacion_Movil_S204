import React, { useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import AdminNavigator from './AdminNavigator';
import HistoryScreen from '../screens/HistoryScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bg,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.orange,
  },
};

// Estados posibles de sesión: 'guest' | 'citizen' | 'admin'
export default function RootNavigator() {
  const [session, setSession] = useState('guest');

  const handleLogin = (role) => setSession(role); // 'citizen' | 'admin'
  const handleLogout = () => setSession('guest');

  return (
    <NavigationContainer theme={AppTheme}>
      {session === 'guest' && <AuthNavigator onLogin={handleLogin} />}

      {session === 'citizen' && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs">
            {(props) => <MainTabNavigator {...props} onLogout={handleLogout} />}
          </Stack.Screen>
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      )}

      {session === 'admin' && <AdminNavigator onLogout={handleLogout} />}
    </NavigationContainer>
  );
}
