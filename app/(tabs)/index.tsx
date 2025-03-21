import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, TextInput, Button, View, Text, Platform, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../config';


const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        });

      if (response.status === 200 && response.data.access_token) {
        setError('');
        await AsyncStorage.setItem('access_token', response.data.access_token);
        await AsyncStorage.setItem('role', response.data.role);
        await AsyncStorage.setItem('username', response.data.username);

        if (response.data.role === 'admin') {
          console.log('AdminScreen')
          // navigation.navigate('AdminScreen');  
        } else if (response.data.role === 'user') {
          console.log('UserScreen')
        } else {
          setError('Invalid role');
        }

      }
    }
    catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

return (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>

    <View style={styles.formContainer}>
      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>

    <Text>
      Need an account? Please contact the administrator.
    </Text>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  formContainer: {
    marginBottom: 16,
    width: screenWidth < 600 ? '80%' : 400,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 8,
    color: 'black',
  },

});
