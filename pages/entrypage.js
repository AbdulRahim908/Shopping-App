import { ImageBackground, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Entrypage = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/entry.png') }>
        <View style={{alignItems:'center',alignSelf:'center',justifyContent:'center',marginTop:450,gap:5}}>
          <Text style={{fontSize:40,fontWeight:'700',color:'white'}}>You want </Text>
          <Text style={{fontSize:40,fontWeight:'700',color:'white'}}> Authentic,here</Text>
          <Text style={{fontSize:40,fontWeight:'700',color:'white'}}> you go!</Text>
          <Text style={{fontSize:20,fontWeight:'300',color:'white'}}>Find it now</Text>
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
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F83758',
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