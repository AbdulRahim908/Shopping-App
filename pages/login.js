import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';



const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      navigation.replace('Entrypage');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid login credentials');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>Back!</Text>
      <View>
        <View style={styles.textinputs}>
        
          <TextInput placeholder='username or email' 
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)} />
           <TextInput secureTextEntry
           placeholder='Password' style={styles.input}
           value={password}
        onChangeText={(text) => setPassword(text)} />
           <Pressable style={styles.button} onPress={(handleLogin)}>
            <Text style={styles.buttontext}>Login</Text>
           </Pressable>
           <View style={styles.row}>
          <Text style={styles.extratext}>Create An Account </Text>
          <TouchableOpacity  onPress={()=>  navigation.navigate('Signup')}><Text style={styles.touchable}>SignUp</Text></TouchableOpacity></View>
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
  },
    row:{
      flexDirection:'row',
      alignSelf:'center',
      marginRight:10
    },
    touchable:{
      color:'#F83758',
      fontSize:15

    }, extratext:{
      color:'black',
      fontSize:15
    },
  }
 
)