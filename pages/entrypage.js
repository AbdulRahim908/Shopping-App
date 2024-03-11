import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Entrypage = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/entry.png') }>
        <View style={styles.buttonview}>
             <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
                <Text style={styles.text}>Get Started</Text>
                </TouchableOpacity>  
                
            
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
      },
      buttonview:{
        marginBottom:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        flexGrow:0,
        position:'absolute',
        bottom:0,
        width:200,
        height:50,backgroundColor:'F83758',borderColor:'white'
        
      },
      text:{
        fontSize:20,
        color:'white'
        // fontWeight:'600'
        
      },
      button:{
        
      }


})