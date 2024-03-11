import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Replace 'YourTargetScreen' with the name of the screen you want to navigate to
      navigation.replace('Slider_splash');
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Text>Splash Screen</Text> */}
      <Image style={styles.image} source={require('../assets/logo.png')}/>
      
    </View>
  );
};

export default SplashScreen;

const styles=StyleSheet.create({

    container:{
        // marginTop:250,
        marginTop:350,
        justifyContent:'center',
        alignItems:'center',
        
    },
    image:{
        
        height:80,
        width:220,
        alignSelf:'center'
    }
})