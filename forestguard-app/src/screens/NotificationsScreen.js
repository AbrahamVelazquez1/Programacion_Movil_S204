import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../theme/colors';
import { HeaderBar } from '../components/Card';
import { notifications } from '../data/mockData';

export default function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <HeaderBar title="Notificaciones" onBack={() => navigation.goBack()} bg={colors.white} color={colors.text} />

      <ScrollView contentContainerStyle={{ padding: 10, gap: 6 }}>
        {notifications.map((n) => (
          <View key={n.id} style={[styles.item, n.unread && styles.itemUnread]}>
            <Text style={{ fontSize: 18 }}>{n.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>
                {n.strongPrefix ? (
                  <>
                    <Text style={styles.strong}>{n.strongPrefix}</Text>
                    {n.text.slice(n.strongPrefix.length)}
                  </>
                ) : (
                  n.text
                )}
              </Text>
              <Text style={styles.time}>{n.time}</Text>
            </View>
            {n.unread && <View style={styles.dot} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  item: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 11,
    flexDirection: 'row',
    gap: 9,
    borderWidth: 1,
    borderColor: colors.border,
  },
  itemUnread: { backgroundColor: colors.badgeOrangeBg, borderColor: 'rgba(255,107,53,0.35)' },
  text: { fontSize: 12, color: colors.text, lineHeight: 17, flex: 1 },
  strong: { color: colors.orange, fontWeight: '700' },
  time: { fontSize: 10, color: colors.muted, marginTop: 2 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.orange, marginTop: 2 },
});
