import { StyleSheet, Text, View,Pressable } from 'react-native';
import React from 'react';
import {dataSource} from '../data/constants';
import { Image ,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductDetail = ({route,navigation}) => {
  const {item} =route.params;
  const product = dataSource.find((product) => product.id === item.id);
  const handleCheckout = () => {

    navigation.navigate('Checkout', { product });
  };
  return (
    <View style={styles.container}>
      
    <Image style={styles.imageThumbnail} source={product.imageUrl} />
    <Text style={{ fontSize: 25, fontWeight: '900', color: 'black' }}>{product.name}</Text>
    <Text style={{color:'black',fontSize:18,fontWeight:'400'}}>Product Details</Text>
    <Text style={{ fontSize: 12, fontWeight: '300', color: 'black' }}>{product.details}</Text>
    <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>Rs {product.discountPrice}</Text>
    <Text style={{ fontSize: 15, fontWeight: '300', color: 'black' }}>Rating {product.rating}</Text>
    <Button title=" Go to cart"  buttonStyle={styles.button} onPress={handleCheckout}
    icon={
      <Icon
        name="shopping-cart"
        size={15}
        color="white"
      />
    }
    />
  </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:1,
    gap:5,width:400

  },
  imageThumbnail: {
    alignSelf:'center',
    height: 200,
    alignItems:'center',
    width:400,
    resizeMode:'cover',
    borderRadius:0,
    resizeMode:'contain',
    
    
  },
  button:{
    backgroundColor:'green',
    marginLeft:5
  },
 
})