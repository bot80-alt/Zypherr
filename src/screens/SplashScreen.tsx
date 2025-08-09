import React, { useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
export default function SplashScreen () {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLogin = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      setTimeout(() => {
        if (isLoggedIn === 'true') {
          navigation.reset({ index: 0, routes: [{ name: 'Tabnavigator' as never }] });
        } else {
          navigation.reset({ index: 0, routes: [{ name: 'Registration' as never }] });
        }
      }, 2000);
    };
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.splash}>Zypher</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  splash: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue'
  },
});
