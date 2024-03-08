import { StyleSheet, Text, View, SafeAreaView, TextInput,Button,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';



const Login = ({navigation}) => {
  const[form,setForm]=useState({
    email:'',
    password:''
  });
  const handleLogin = () => {
    // Check if email and password match specific values
    if (form.email === 'abc@gmail.com' && form.password === '1234') {
      // Navigate to the 'Home' screen
      navigation.navigate('Home');
    } else {
      // Handle invalid login credentials
      alert('Invalid login credentials');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>Back!</Text>
      <View>
        <View style={styles.textinputs}>
        
          <TextInput placeholder='username or email' inlineImageLeft=''
          style={styles.input}
           value={form.email}
           onChangeText={email=> setForm({...form,email})} />
           <TextInput secureTextEntry
           placeholder='Password' style={styles.input}
           value={form.password}
           onChangeText={password=> setForm({...form,password})} />
           <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttontext}>Login</Text>
           </Pressable>
          
            

         
        </View>
      </View>
      </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
  container:{
    flex: 1,
        backgroundColor: 'white',
        

  },
  text:{fontSize:50,
    fontWeight:'700',
    color:'black',
    marginTop:6,
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
    borderWidth:1
  },
  textinputs:{
    marginTop:100,
    justifyContent:'center',
    alignItems:'center',
    gap:30
  },
  button:{
    height:50,width:200, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F83758',
  },
  buttontext:{
    color:'white',
    fontSize:15

  }
 
})