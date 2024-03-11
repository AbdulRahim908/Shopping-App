import { StyleSheet, Text, View,ScrollView ,SafeAreaView,Dimensions,Image, TouchableOpacity,} from 'react-native'
import React , {useState,useRef} from 'react'

const Slider_splash = ({navigation}:any) => {
    const { width, height } = Dimensions.get('window');
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const setSliderPage = (event:any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.round(x / width);
        if (indexOfNextScreen !== currentPage) {
          setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
          });
        }
      };
      const scrollViewRef = useRef<ScrollView>(null);
      const goToNextPage = () => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: (sliderState.currentPage + 1) * width });
        }
      };
    
      const goToPreviousPage = () => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: (sliderState.currentPage - 1) * width });
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
            <Image style={styles.image} source={require('../assets/sales.png')}/>
            <Text style={styles.title}>Choose Products</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
          <View style={{ width, height }}>
          <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/fashion.png')}/>
          <Text style={styles.title}>Make Payment</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
          <View style={{ width, height }}>
          <View style={styles.container}>
          <Image style={styles.image}  source={require('../assets/Shopping.png')}/>
          <Text style={styles.title}>Get Your Order</Text>
            <Text style={styles.content}>Amet minim mollit non deserunt ullamco  est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
          </View></View>
    </ScrollView>
    <View style={styles.paginationWrapper}>
    {/* <TouchableOpacity onPress={goToPreviousPage} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity> */}
          {Array.from(Array(3).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
          {/* <TouchableOpacity onPress={goToNextPage} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> */}
         
        </View>
        <View style={styles.next}>
        <TouchableOpacity onPress={()=>navigation.replace('Login')} >
                <Text style={styles.nextText}>Get Started</Text>
                </TouchableOpacity>
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
    next:{
      alignItems:'flex-end',
      justifyContent:'space-evenly'


    },
    nextText:{
      color:'#F83758',
      fontSize:20,
      fontWeight:'bold'

    },
    
    title:{color:'black',
        fontSize:25,
        fontWeight:'bold'
    },
    content:{
        color:'black',
        fontSize:15,
        gap:20
    }
    ,
  paginationWrapper: {
    
    position: 'absolute',
    bottom: 10,
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
    backgroundColor: '#F83758',
    marginLeft: 10
    // marginTop:100
  },
  bottom:{
    flexDirection:'row'
  },
  image:{
    width:300,height:300
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
})