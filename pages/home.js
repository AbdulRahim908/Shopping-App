import { StyleSheet, Text, TouchableOpacity, View ,StatusBar,ScrollView} from 'react-native'
import React from 'react'
import useNavigation from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import { Header,Avatar,SearchBar,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native';


const Home=()=> {
  const imageUrl = 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg';
  return (
    <View style={styles.container}>
      <Header backgroundColor='white'
      placement="center"
      leftComponent={{ icon: 'menu', color: 'black' }}
      centerComponent={{ text: 'Stylish', style: { color: 'black',fontSize:20,fontWeight:'bold' } }}
      rightComponent={
        <Avatar
          rounded
          source={{ uri: imageUrl }}
          size='small'
        />
      }
    />
    <SearchBar lightTheme
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
    <Button title=" filter" color="black" buttonStyle={styles.button}
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
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
<Avatar
size='medium'
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
<Avatar
size='medium'
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
<Avatar
size='medium'
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
<Avatar
size='medium'
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
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
    gap:10

  },
  button:{
    backgroundColor:'black'

  },
  circles:{
    gap:30,
    flexDirection:'row'

  }

})
export default Home