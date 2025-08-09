import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme/themecontext';
import { fontSizes } from '../theme/theme';
import { Picker } from '@react-native-picker/picker';

const countries = {
  IN: { code: '+91', flag: '🇮🇳', regex: /^[0-9]{10}$/ },
  USA: { code: '+1', flag: '🇺🇸', regex: /^[0-9]{10}$/ },
};

export default function  RegisterPage () {
  const theme = useTheme();
  const navigation = useNavigation();
  const [country, setCountry] = useState<'IN' | 'USA'>('IN');
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');

  const currentCountry = countries[country];

  function isValidMobile(number: string): boolean {
    return currentCountry.regex.test(number);
  }

  function isValidEmail(address: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(address);
  }

  function handleLogin() {
    if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    navigation.reset({
      routes: [{ name: 'Login' as never }],
    });
  }

  function handleRegister() {
    let hasError = false;

    if (!mobileNumber) {
      setMobileError('Mobile number is required');
      Alert.alert('Error', 'Mobile number is required');
      hasError = true;
    } else if (!isValidMobile(mobileNumber)) {
      setMobileError('Invalid mobile number');
      Alert.alert('Error', `Please enter a valid mobile number for ${country}`);
      hasError = true;
    } else {
      setMobileError('');
    }

    if (!email) {
      setEmailError('Email is required');
      Alert.alert('Error', 'Email is required');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      Alert.alert('Error', 'Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (hasError) return;

    navigation.reset({
      routes: [{ name: 'OtpVerification' as never }],
    });
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.theme.background }]}>
      <KeyboardAwareScrollView
        contentContainerStyle={[{ flexGrow: 1, backgroundColor: theme.theme.background }]}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.innerContainer, { paddingTop: insets.top + 40, backgroundColor: theme.theme.background }]}>
          <Text style={[styles.logo, { color: theme.theme.primary }]}>Zypher</Text>
          <Text style={[styles.subText, { color: '#444' }]}>
            Enter your valid details and{'\n'} get started with Zypher!
          </Text>
          <TextInput
            placeholder=' Patient Name'
            style={styles.input}
          />
          <View style={styles.inputRow}>

            <Picker
              selectedValue={country}
              onValueChange={(itemValue) => setCountry(itemValue)}
              style={[styles.countryPicker]}
              mode='dropdown'
              dropdownIconColor={theme.theme.text}
            >
              <Picker.Item label="Male" value="M" />
              <Picker.Item label="Female" value="F" />
              <Picker.Item label="Other" value="O" />
            </Picker>
          </View>


          <View style={[styles.inputRow, { flexDirection: 'row', alignItems: 'center' }]}>

            <Text style={{ fontSize: 16, marginRight: 8 }}>
              {currentCountry.flag} {currentCountry.code}
            </Text>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#999"
              style={[
                styles.input,
                {
                  flex: 1,
                  color: theme.theme.text,
                  borderColor: mobileError ? 'red' : '#000',
                  borderWidth: 0,
                  marginBottom: 0,
                }
              ]}
              keyboardType="number-pad"
              maxLength={10}
              value={mobileNumber}
              onChangeText={text => {
                setMobileNumber(text);
                if (text === '' || isValidMobile(text)) {
                  setMobileError('');
                } else {
                  setMobileError('Invalid mobile number');
                }
              }}
            />
          </View>
          {mobileError ? (
            <Text style={{ color: 'red', alignSelf: 'flex-start' }}>
              {mobileError}
            </Text>
          ) : null}

          
          <TextInput
            placeholder=" Email"
            placeholderTextColor="#999"
            style={[
              styles.input,
              { color: theme.theme.text, borderColor: emailError ? 'red' : '#000' }
            ]}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => {
              setEmail(text);
              if (text === '' || isValidEmail(text)) {
                setEmailError('');
              } else {
                setEmailError('Invalid email format');
              }
            }}
          />
          {emailError ? (
            <Text style={{ color: 'red', alignSelf: 'flex-start', marginBottom: 8 }}>
              {emailError}
            </Text>
          ) : null}
          <TextInput
            placeholder=' DD/MM/YYYY'
            style={styles.input}
          /><TextInput
            placeholder=' Other details'
            style={styles.input}
          />
          <TouchableOpacity
            style={[styles.registerButton, { backgroundColor: theme.theme.primary }]}
            onPress={handleRegister}
          >
            <Text style={[styles.loginText, { color: theme.theme.background }]}>Register</Text>
          </TouchableOpacity>

          {/* OR & Login */}
          <Text style={[styles.loginText, { color: theme.theme.text }]}>OR</Text>
          <Text style={[styles.welcomeText, { color: theme.theme.text }]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: theme.theme.text }]}
            onPress={handleLogin}
          >
            <Text style={[styles.loginText, { color: theme.theme.background }]}>Login</Text>
          </TouchableOpacity>

          {/* Terms */}
          <Text style={[styles.termsText, { color: theme.theme.text }]}>
            By clicking on register you agree to the{' '}
            <Text style={styles.linkText}>terms of service</Text> and{' '}
            <Text style={styles.linkText}>privacy policy</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: fontSizes.medium,
    fontStyle: 'italic',
    marginTop: 5,
  },
  subText: {
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  inputRow: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  countryPicker: {
    marginRight: 5,
    color: '#999',
  },
  callingCode: {
    marginRight: 8,
    fontSize: fontSizes.medium,
  },
  input: {
    fontSize: fontSizes.medium,
    marginBottom: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
  },
  registerButton: {
    marginTop: 30,
    width: '100%',
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  loginText: {
    fontSize: fontSizes.medium,
    fontWeight: '600',
  },
  termsText: {
    marginTop: 10,
    fontSize: fontSizes.small,
    textAlign: 'center',
  },
  linkText: {
    color: '#D2042D',
  },
});
