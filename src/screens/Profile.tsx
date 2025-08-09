import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('Madan Poornima');
  const [email] = useState('madan@honeymoon.com');
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState('');
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const loadData = async () => {
      const storedName = await AsyncStorage.getItem('user_name');
      const storedLang = await AsyncStorage.getItem('app_language');
      if (storedName) setName(storedName);
      if (storedLang) setLanguage(storedLang);
    };
    loadData();
  }, []);

  const handleSaveName = async () => {
    if (!tempName.trim()) {
      Alert.alert('Invalid Name', 'Name cannot be empty');
      return;
    }
    setName(tempName);
    await AsyncStorage.setItem('user_name', tempName);
    setIsEditing(false);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Logged Out', 'You have been logged out successfully.');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    } catch (e) {
      Alert.alert('Error', 'Something went wrong while logging out.');
    }
  };

  const chooseLanguage = () => {
    const languages = [
      'English',
      'Hindi',
      'Tamil',
      'Telugu',
      'Kannada',
      'Malayalam',
      'Gujarati',
      'Bengali'
    ];

    Alert.alert(
      'Choose Language',
      'Select your preferred language',
      languages.map((lang) => ({
        text: lang,
        onPress: async () => {
          setLanguage(lang);
          await AsyncStorage.setItem('app_language', lang);
          Alert.alert('Language Changed', `App language set to ${lang}`);
        }
      }))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={tempName}
              onChangeText={setTempName}
              placeholder="Enter name"
            />
          ) : (
            <Text style={styles.name}>{name}</Text>
          )}
          <Text style={styles.email}>{email}</Text>
        </View>

        {isEditing ? (
          <TouchableOpacity onPress={handleSaveName}>
            <Text style={styles.edit}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setTempName(name);
              setIsEditing(true);
            }}
          >
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Support & Legal */}
      <Text style={styles.sectionTitle}>Support & Legal</Text>
      <View style={styles.sectionBox}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.sectionBox}>
        <TouchableOpacity style={styles.row} onPress={chooseLanguage}>
          <Text style={styles.rowText}>Choose Language ({language})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={handleLogout}>
          <Text style={[styles.rowText, { color: '#de3163' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: { fontSize: 20, fontWeight: '600', color: '#111' },
  email: { fontSize: 14, color: '#555', marginTop: 2 },
  edit: { color: '#678FFFFF', fontSize: 14, fontWeight: '500' },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    color: '#999',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionBox: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  rowText: { fontSize: 16, color: '#111', fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    width: 200,
  },
});
