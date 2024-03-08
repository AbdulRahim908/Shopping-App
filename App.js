import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image, Platform
} from 'react-native';
import Home from './pages/home';
import Entrypage from './pages/entrypage';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Slider_splash from './pages/slider_splash';

const Stack=createNativeStackNavigator();
const LogoTitle=()=> {
  return (
    <View style={styles.rowContainer}>
    <Image
      style={{ width: 30, height: 20 }}
      source={require('./assets/Group.png')}
    />
    <Text style={styles.text}>Stylish</Text> 
    {/* <View style={styles.user}><Image  source={require('./assets/user.png')}/></View> */}
    </View>
  );
}
const App=()=>{
  

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Slider_splash' screenOptions={{
        headerTitle: (props) => <LogoTitle {...props} />,
          // title: 'My home',
          headerTitleAlign:'center',
          
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}>
            <Stack.Screen name='Slider_splash'
        component={Slider_splash}
        options={{headerShown:false}}
        />
      <Stack.Screen name='Entrypage'
        component={Entrypage}
        options={{headerShown:false}}
        />
        <Stack.Screen name='Home'
        component={Home}
        />
        <Stack.Screen name='Checkout'
        component={Checkout}/>
        <Stack.Screen name='Login'
        component={Login}
        options={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  text:{
    color:'#4392F9',
    fontSize:20,
    fontWeight:'bold',
  },
  user:{
   
  }

});


export default App;
