import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import MyButton, { SimpleButton } from './muButton';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleNameChange = (text) =>{
    const namePattern = /^[a-zA-Z\s]+$/;
    setUsername(text);
    setIsValidName(namePattern.test(text));
  };

  const handlePasswordChange = (text) =>{
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    setPassword(text);
    setIsValidPassword(passwordPattern.test(text))
  };

const handlePhoneNumberChange = (text) =>{
    const phoneNumberPattern = /^\+[0-9]{1,3}-[0-9]{3,14}$/
    setPhoneNumber(text);
    setIsValidPhoneNumber(phoneNumberPattern.test(text))
};

const handlEmailChange = (text) =>{
    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(text);
    setIsValidEmail(emailPattern.test(text));
}
  return (
    <View style={{ flex: 1, backgroundColor: '#e1eef0' }}>
      <Text style={styles.textBox}> Sign Up </Text>
      <View style={{ alignSelf: 'center' }}>
      <Text> Email </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your E-mail"
          onChangeText={handlEmailChange}
          value={email}
        />
        {!isValidEmail && <Text>Please enter a valid e-mail</Text>}
        <Text> Phone Number </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your Ph. number"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
        {!isValidName && <Text>Please enter  valid Phone number</Text>}
        <Text>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your Username"
          onChangeText={handleNameChange}
          value={username}
        />
        {!isValidName&&<Text>Please neter valid Username</Text>}
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
        {!isValidPassword&&<Text>Please enter valid password</Text>}
        <MyButton title="Sign Up" onPress={() => {}} />
        <View style={{marginLeft:'65%'}}>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 35,
    margin: 25,
    padding: 10,
    fontSize: 20,
  },
  textInput: {
    fontSize: 15,
    color: '#747b82',
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#747b87',
  },
});
export default Signup;

