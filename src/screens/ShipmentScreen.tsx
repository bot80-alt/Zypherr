import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/themecontext';

export default function ShipmentScreen() {
  const navigation = useNavigation();
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
        style={styles.input}
      />
      <TextInput
        placeholder="Drop Location"
        value={drop}
        onChangeText={setDrop}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Payment' as never)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    padding: 12,
    borderColor: '#888',
    color: '#000'
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
