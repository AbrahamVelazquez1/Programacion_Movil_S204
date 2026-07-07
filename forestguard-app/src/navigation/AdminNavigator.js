import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import AdminValidateScreen from '../screens/admin/AdminValidateScreen';

const Stack = createNativeStackNavigator();

export default function AdminNavigator({ onLogout }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminDashboard">
        {(props) => <AdminDashboardScreen {...props} onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="AdminValidate" component={AdminValidateScreen} />
    </Stack.Navigator>
  );
}
