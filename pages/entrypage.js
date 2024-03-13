import { ImageBackground, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Entrypage = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/entry.png') }>
        <View >
          <Text>You want Authentic, here you go!</Text>
          <Text> Authentic,</Text>
          <Text>here you go!</Text>
             {/* <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
                <Text style={styles.text}>Get Started</Text>
                </TouchableOpacity> */}
                <Pressable style={styles.button} onPress={()=>navigation.replace('Home')}>
            <Text style={styles.buttontext}>Get started</Text>
           </Pressable>  
                
            
        </View>

    </ImageBackground>
  )
}

export default Entrypage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      } 
      ,button:{
        height:50,width:200, 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F83758',marginTop:600
      },
      buttontext:{
        color:'white',
        fontSize:15
      },
      text:{
        fontSize:20,
        color:'white'
        // fontWeight:'600'
        
      },
     


})