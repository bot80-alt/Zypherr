import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmationScreen() {
  const navigation = useNavigation();

  async function handleFinish() {
    const newOrder = {
      id: Date.now().toString(),
      item: 'Custom Order',
      amount: Math.floor(Math.random() * 1000),
      date: new Date().toISOString().split('T')[0],
    };

    const existing = await AsyncStorage.getItem('orders');
    const parsed = existing ? JSON.parse(existing) : [];
    parsed.push(newOrder);
    await AsyncStorage.setItem('orders', JSON.stringify(parsed));

    navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Tabnavigator' as never,
            state: {
              index: 0,
              routes: [{ name: 'Orders' as never }],
            },
          },
        ],
      });

  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your order is ready to be placed!</Text>
      <TouchableOpacity onPress={handleFinish} style={styles.button}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  message: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
