import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image ,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkout = ({ route }) => {
  const { product } = route.params;
  const [isProductAdded, setIsProductAdded] = useState(false);

  // State to store selected products
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    setIsProductAdded(false); // Reset isProductAdded when product changes
  }, [product]);

  // Function to add product to the selected products list
  const handleAddToCart = () => {
    setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    setIsProductAdded(true);
    //reset
    // setTimeout(() => {
    //   setIsProductAdded(false);
    // }, 1000);

  };

  // Function to remove product from the selected products list
  const handleRemoveFromCart = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  // Function to increase quantity of a product in the cart
  const handleIncreaseQuantity = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity++;
    setSelectedProducts(updatedProducts);
  };

  // Function to decrease quantity of a product in the cart
  const handleDecreaseQuantity = (index) => {
    const updatedProducts = [...selectedProducts];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity--;
      setSelectedProducts(updatedProducts);
    }
  };

  // Calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + (item.discountPrice * item.quantity || 0), 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}>selected Product</Text></View>
      {product && !isProductAdded ? (
        <View style={{ flexDirection: 'row' ,gap:30}}>
          <Image style={styles.cartimage} source={product.imageUrl} />
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '300', color: 'black' }}> {product.name}</Text>
            <Text style={{ fontSize: 15, fontWeight: '300', color: 'black' }}>Price: Rs {product.discountPrice}</Text>
            <Button onPress={handleAddToCart} title='Add to Cart'  buttonStyle={{ backgroundColor: 'green' }} />
          </View>
        </View>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: '200', color: 'black' }}>No product selected </Text>
      )}
      <View style={{ alignSelf: 'flex-start', }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}>Your Cart</Text>
        <Text style={{color:'green',fontSize:20}}> Total price = Rs {calculateTotalPrice()}</Text>
        <FlatList
          data={selectedProducts}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', gap: 20, backgroundColor: '#dcdcdc', alignItems: 'center', width: 400 }}>
              <Image style={styles.imageThumbnail} source={item.imageUrl} />
              <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Button onPress={() => handleDecreaseQuantity(index)} title="-" buttonStyle={styles.quantitybutton}/>
                  <Text style={{ fontSize: 20, fontWeight: '300', color: 'black', marginHorizontal: 10 }}>{item.quantity}</Text>
                  <Button onPress={() => handleIncreaseQuantity(index)} title="+" buttonStyle={styles.quantitybutton} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: '300', color: 'black' }}>Price: Rs {item.discountPrice * item.quantity || 0}</Text>
                <Button onPress={() => handleRemoveFromCart(index)} buttonStyle={styles.removebutton} icon={
                  <Icon
                    name="trash"
                    size={15}
                    color="white"
                  />
                } />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        
        {/* <View style={{justifyContent:'space-evenly',flex:1,marginTop:10}}></View> */}
      </View>
      
    </SafeAreaView>
  );
};


export default Checkout;
 const styles= StyleSheet.create({
  container:{
   
    alignItems: '',
    flex:1,

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
    height: 100,
    alignSelf:'center',
    width:100,
 
  },
  removebutton:{
    backgroundColor:'red',
    marginLeft:5,
    width:40,
    height:40,
    borderRadius:20
  },
  quantitybutton:{
    backgroundColor:'black',
    marginLeft:5,
    width:40,
    height:40,
    borderRadius:20
  },
  cartimage:{
    height:100,width:200
  }
 })