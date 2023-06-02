import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, NativeModules } from 'react-native';
import MyButton, {SimpleButton} from './components/myButton'
import Signup from './sigunp';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
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

  return (
    <View style={{ flex: 1, backgroundColor: '#e1eef0' }}>
      <Text style={styles.textBox}> Login </Text>
      <View style={{ alignSelf: 'center' }}>
        <Text>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your Username"
          onChangeText={handleNameChange}
          value={username}
        />
         {!isValidName && <Text>Please enter a valid name</Text>}
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
            {!isValidPassword&&<Text>Please enter valid password</Text>}
        <MyButton title="Login" onPress={() => {}} />
        <View style={{marginLeft:'65%'}}>
        <SimpleButton title="Sign Up" onPress = {()=>props.navigation.navigate("Sign Up")} />
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
export default Login;
