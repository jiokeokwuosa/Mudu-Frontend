import React, { useState, useEffect, useRef } from 'react';
import { Alert, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './../../redux/actions/authActions';
import { clearErrors } from './../../redux/actions/errorActions'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const Register = ({ handleNav }) => {
  const mounted = useRef(); 
  const dispatch = useDispatch();
  const error = useSelector(state=>state.error)
  const isLoading = useSelector(state=>state.auth.isLoading)

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;      
    } else {
      if (error.id === 'REGISTER_FAILURE') {  
        const message =
          typeof error.msg === 'object' ? error.msg.join('<br/>') : error.msg;       
        Alert.alert(
          "Validation Error",
         message
        )      
        dispatch(clearErrors())      
      }else if(error.id === 'REGISTER_SUCCESS'){
        handleNav(3)
        dispatch(clearErrors())  
      } 
     }
  })
 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!fullName || !email || !password) {
      Alert.alert(
        "Validation Error",
        "Please fill all the empty fields"
      )
    } else {
      const data = {
        fullName,
        email,
        password
      }
      dispatch(registerUser(data))
    }
  }

  return (
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.text, styles.heading]}>Create Account</Text>
          <TextInput
            style={[styles.text, styles.textInput]}
            placeholder='Fullname'
            onChangeText={text => setFullName(text)}
            defaultValue={fullName}
          />
          <TextInput
            style={[styles.text, styles.textInput]}
            placeholder='Email'
            onChangeText={text => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            style={[styles.text, styles.textInput]}
            placeholder='Password'
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            secureTextEntry={true}
          />
          {isLoading?
          <ActivityIndicator size="large" />:
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleSignup}
          >
            <View style={styles.submitButton}>
              <Text style={[styles.text, styles.buttonText]}>Submit</Text>
            </View>
          </TouchableOpacity>}        
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNav(1)}
          >
            <View>
              <Text style={[styles.text, styles.text1]}>Click here to Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%'
  },
  heading: {
    fontSize: 20
  },
  textInput: {
    height: 40,
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    marginBottom: 10,
    fontSize: 14,
    marginTop: 10,
    width: '100%'
  },
  text: {
    fontFamily: 'monospace',
    color: '#20232a',
    fontSize: 18
  },
  text1: {
    fontSize: 13,
    marginTop: 10
  },
  submitButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 7,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15
  },
  buttonText: {
    color: 'white'
  },
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10
  },
  timeBoxText: {
    fontSize: 12
  }
});


export default Register;
