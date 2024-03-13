// Checkout.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image ,Button} from 'react-native-elements';
const Checkout = ({ route }) => {
  const { product } = route.params;

  // State to store selected products
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to add product to the selected products list
  const handleAddToCart = () => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const handleRemoveFromCart = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  return (
    <SafeAreaView style={styles.container}>
      {product ? (
      <View style={{flexDirection:'row'}}>
      <Image style={styles.cartimage} source={product.imageUrl}/>
      <View  style={{flexDirection:'column',gap:10}}>
      <Text style={{ fontSize: 15, fontWeight: '300', color: 'black' }}>Selected Product: {product.name}</Text>
      <Text style={{ fontSize: 15, fontWeight: '300', color: 'black' }}>Price: Rs {product.discountPrice}</Text>
      <Button onPress={handleAddToCart} title='Add to Cart' buttonStyle={{backgroundColor:'green'}}/>
      </View>
      </View>
      ) : (
        <Text style={{fontSize:20,fontWeight:'200',color:'black'}}>No product selected fo to product page and select them</Text>
      )
      }
      <View style={{alignSelf:'flex-start',gap:5,}}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}>Your Cart</Text>
      
      <FlatList 
        data={selectedProducts}
        renderItem={({ item ,index}) => (
          <View style={{flexDirection:'row',gap:20,backgroundColor:'#dcdcdc',alignItems:'center',width:400}}>
            <Image style={styles.imageThumbnail} source={item.imageUrl}/>
            <View style={{flexDirection:'column',gap:5}}>
            <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>{item.name}</Text>
            <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>Price: Rs {item.discountPrice}</Text>
            <Button title="Remove" onPress={() => handleRemoveFromCart(index)}buttonStyle={styles.removebutton} />
            </View>
            
          </View>
          
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
 const styles= StyleSheet.create({
  container:{
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    gap:10

  },
  cartContainer:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf:'flex-start',
    
    gap:5
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    height: 60,
    alignSelf:'center',
    width:100,
 
  },
  removebutton:{
    backgroundColor:'red',
    marginLeft:5,
    width:80,
    height:40
  },
  cartimage:{
    height:100,width:200
  }
 })