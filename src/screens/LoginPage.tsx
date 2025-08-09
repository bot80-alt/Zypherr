import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/themecontext';
import { fontSizes } from '../theme/theme';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email && password) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.reset({ index: 0, routes: [{ name: 'Tabnavigator' as never }] });
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>Zypher</Text>
      <Text style={styles.subHeader}>Fast • Secure • Simple</Text>
      <Text style={styles.subHeader}>Login to your Account</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Patient email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} activeOpacity={0.8} style={[styles.button, { backgroundColor: theme.theme.primary }]}>
        <Text style={styles.btnText}>Login</Text>

      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Tabnavigator' as never)}>
        <Text style={styles.linkText}>
          Don’t have an account? <Text style={{ fontWeight: '700',color: '#1800F0FF' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 32, fontWeight: 'bold', color: '#2B28FFFF', textAlign: 'center' },
  subHeader: { fontSize: 16, color: '#040404FF', textAlign: 'center', marginBottom: 40 },
  inputContainer: {
    fontSize: fontSizes.medium,
    marginBottom: 16,
    width: '100%',
  },
  icon: { marginRight: 8 },
  input: { fontSize: fontSizes.medium,
    marginBottom: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4, },
  button: {
    marginTop: 30,
    width: '100%',
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
  },
  btnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  linkText: { color: '#000', textAlign: 'center', fontSize: 14, marginTop: 10 }
});
