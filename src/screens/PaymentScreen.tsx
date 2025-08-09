import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PaymentScreen() {
  const navigation = useNavigation();
  const [method, setMethod] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>
      <TouchableOpacity onPress={() => setMethod('UPI')} style={styles.option}>
        <Text style={styles.optionText}>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMethod('NetBanking')} style={styles.option}>
        <Text style={styles.optionText}>Net Banking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!method}
        onPress={() => navigation.navigate('Confirmation' as never)}
        style={[styles.button, { backgroundColor: method ? '#000' : '#aaa' }]}
      >
        <Text style={styles.buttonText}>Proceed to Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  option: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#888',
  },
  optionText: { fontSize: 16 },
  button: {
    marginTop: 30,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
