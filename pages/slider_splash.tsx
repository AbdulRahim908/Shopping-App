import { StyleSheet, Text, View,ScrollView ,SafeAreaView,Dimensions,Image,} from 'react-native'
import React , {useState} from 'react'

const Slider_splash = () => {
    const { width, height } = Dimensions.get('window');
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const setSliderPage = (event:any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
          setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
          });
        }
      };
    
      const { currentPage: pageIndex } = sliderState;
  return (
    <SafeAreaView style={{ flex: 1 }}><ScrollView style={styles.scroll}
    horizontal={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}>
      <View style={{ width, height }}>
       <View style={styles.container}>
            <Image source={require('../assets/sales.png')}/>
            <Text style={styles.title}>Choose Products</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
          <View style={{ width, height }}>
          <View style={styles.container}>
          <Image source={require('../assets/fashion.png')}/>
          <Text style={styles.title}>Make Payment</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
          <View style={{ width, height }}>
          <View style={styles.container}>
          <Image  source={require('../assets/Shopping.png')}/>
          <Text style={styles.title}>Get Your Order</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
    </ScrollView>
    <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
    </SafeAreaView>
  )
}

export default Slider_splash

const styles = StyleSheet.create({
    scroll:{
        flex:1
    },
    container:{
        // marginTop:250,
        marginTop:180,
        justifyContent:'center',
        alignItems:'center',
        
    },
    // img:{marginTop:250,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     alignSelf:'center'
    // },
    title:{color:'black',
        fontSize:25,
        fontWeight:'bold'
    },
    content:{
        color:'black',
        fontSize:15
    }
    ,
  paginationWrapper: {
    position: 'relative',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
})