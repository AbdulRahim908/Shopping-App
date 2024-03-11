import { StyleSheet, Text, View, SafeAreaView, TextInput,Button,Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Signup=({navigation})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
  
    const createAccount = async () => {
      try {
        if (password === confirmPassword) {
          const userCredential = await auth().createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
          console.log('Account created:', user);
  
          // Reset fields on successful account creation
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }else {
          setError("Passwords don't match");
        }
      } catch (e) {
        setError('There was a problem creating your account');
        
      }
    };
  
    return (
      <View style={styles.outer}>
        <View >
        <Text style={styles.text}>Create</Text>
      <Text style={styles.text}>an account</Text>
  
          {error && <Text style={styles.error}>{error}</Text>}

         <View style={styles.input}>
          <TextInput 
          placeholder='username or email' 
          inlineImageLeft=''
          style={styles.input}
          value={email}
          onChangeText={setEmail} />
           <TextInput 
           secureTextEntry
           placeholder='Password' style={styles.input}
           value={password}
        onChangeText={setPassword} />
        <TextInput
            
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirm password"
            autoCapitalize="none"
            style={styles.input}
          />
           <Button 
           
            color='#F83758'
            title="Create Account"
            onPress={createAccount}
            disabled={!email || !password || !confirmPassword}
          />
          <View style={styles.row}>
          <Text style={styles.extratext}>I already have an account </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={styles.touchable}>Login</Text></TouchableOpacity></View>
          </View>
          
        </View>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    outer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:250
    },
    // inner: {
    //   width: 240,
      
    // },
    text:{fontSize:50,
      fontWeight:'700',
      color:'black',
    },
    input:{
      backgroundColor:'lightgrey',
      color:'black',
      borderRadius:12,
      borderColor:'black',
      fontSize:15,
      fontWeight:'400',
      width:350,
      height:60,
      alignSelf:'center',
      borderWidth:1,
      gap:20
    },
    textinputs:{
      marginTop:100,
      justifyContent:'center',
      alignItems:'center',
      gap:10
    },
    error: {
      marginBottom: 20,
      color: 'red',
    },
    extratext:{
      color:'black',
      fontSize:15
    },
    row:{
      flexDirection:'row',
      alignSelf:'flex-end',
    },
    touchable:{
      color:'#F83758',
      fontSize:15

    }

  });
  export default Signup;