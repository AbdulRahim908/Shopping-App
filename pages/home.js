import { StyleSheet, Text, TouchableOpacity, View ,StatusBar,ScrollView,Image,Pressable} from 'react-native'
import React from 'react'
import useNavigation from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import { Header,Avatar,SearchBar,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native';
import {Products} from '../data/constants'
import { useEffect, useState } from "react";
import {dataSource} from '../data/constants';
import {ProductDetail} from './productDetail'
const Home=({navigation})=> {
  const imageUrl = 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'
  const truncateText = (text, maxLines) => {
    const textArray = text.split('\n');
    if (textArray.length > maxLines) {
      return textArray.slice(0, maxLines).join('\n') + '…';
    } else {
      return text;
    }
  };
  return (
    <View style={styles.container}>
      <Header backgroundColor='white'
      placement="center"
      // leftComponent={{ icon: 'menu', color: 'black' }}
      centerComponent={{ text: 'Stylish', style: { color: 'black',fontSize:20,fontWeight:'bold' } }}
      rightComponent={
        <Avatar
          rounded
          source={{ uri: imageUrl }}
          size='small'
          onPress={()=>navigation.navigate('Settings')}
        />
      }
    />
    <SearchBar lightTheme
    platform='android'
    placeholder='Search Any product'
    placeholderTextColor='black'
    style={{backgroundColor:'white'}}
    />
    <View style={styles.featured}>
    <Text style={{color:'black',fontSize:25,fontWeight:'600'}}>All Featured</Text>
    <View style={{gap:10,alignItems:'center',flexDirection:'row',marginLeft:110}}>
    <Button title=" sort" color="black" buttonStyle={styles.button}
    icon={
      <Icon
        name="sort"
        size={15}
        color="white"
      />
    }
    
    />
    <Button title=" filter"  buttonStyle={styles.button}
    icon={
      <Icon
        name="filter"
        size={15}
        color="white"
      />
    }/>
    </View>
    </View>
     <View style={styles.circles}>
     <Avatar
     size='medium'
  rounded
  source={require('../assets/beauty.png')}
/>
<Avatar
size='medium'
  rounded
  source={require('../assets/fashionc.png')}
/>
<Avatar
size='medium'
  rounded
  source={require('../assets/kids.png')}
/>
<Avatar
size='medium'
  rounded
  source={require('../assets/mens.png')}
/>
<Avatar
size='medium'
  rounded
  source={require('../assets/womens.png')}
/>
     </View>
     <View style={styles.circlenames}>
      <Text style={{color:'black'}}>Beauty</Text>
      <Text  style={{color:'black'}}>Fashion</Text>
      <Text  style={{color:'black'}}>Kids</Text>
      <Text  style={{color:'black'}}>Mens</Text>
      <Text  style={{color:'black'}}>Womens</Text>
     </View >
     <View style={styles.cardContainer}>
     <FlatList
     data={dataSource}
     renderItem={({item}) => (
       <View
         style={{
           flex: 1,
           flexDirection: 'column',
           margin: 5,
           height:250,
          borderRadius:15,
          overflow: 'hidden',
          backgroundColor:'#dcdcdc',
          
          
          
         }}><Pressable onPress={()=>navigation.navigate('ProductDetail',{item})}>
         <Image
           style={styles.imageThumbnail}
           source={item.imageUrl}
         />
         
         <Text style={{fontSize:18,fontWeight:'900',color:'black'}}>{item.name}</Text>
         
         <Text style={{fontSize:12,fontWeight:'300',color:'black',lineHeight:20,maxHeight:40}}>{truncateText(item.details, 2)}</Text>
         <View style={{flexDirection:'row', gap:10, justifyContent:'space-between'}}>
         <Text style={{fontSize:18,fontWeight:'500',color:'black'}}>Rs {item.discountPrice}</Text>
         <Icon
        name="heart-o"
        size={18}
        color="black"
      />
         </View>
         <Text style={{fontSize:15,fontWeight:'300',color:'black'}}>{item.rating}</Text>
         </Pressable>
       </View>
     )}
     //Setting the number of column
     numColumns={2}
     keyExtractor={item=>item.id}/>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,gap:10
    // justifyContent:'center',
    // alignItems:'center'  
  },
  featured:{
    flexDirection:'row',
    gap:10,
    marginLeft:5

  },
  button:{
    backgroundColor:'black'

  },
  circles:{
    gap:30,
    flexDirection:'row',
    marginLeft:5

  },
  circlenames:{
    gap:38,
    flexDirection:'row',
    marginLeft:7
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    // borderColor:'black'
    
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    alignSelf:'center',
    width:200,
    borderRadius:20
    
    
  },

})
export default Home