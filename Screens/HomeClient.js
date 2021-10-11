
import React, { useState,useEffect,useContext } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    FlatList
} from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../Components/SearchBar';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import CarItem from '../Components/CarItem';
import { logosData, mockCarsData } from '../utilities/AppUtils';
import BrandItem from '../Components/BrandItem';
import { Context } from '../Context/CarContext';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';



const HomeClient = ({ navigation }) => {

    const [term, searchTerm] = useState('');
    const [mockCars, setMockCars] = useState([]);
    const [mockLogos, setMockLogos] = useState([]);
    const {state,getCars } = useContext(Context);
    //const {state,setState } = useState([]);
    
    


    const readData = async () => {
        try {
          setMockCars(mockCarsData)
          setMockLogos (logosData)
          //setState(mockCarsData)
        } catch (e) {
          
        }
      }
      useEffect(() => {
        readData()
       // console.log(mockCars)
       // console.log(mockLogos)
        console.log("$$$$$$state$$$$$$$$$$$$"+state)
        console.log(state),getCars()
      }, [])

      console.log('the get cards is '+getCars())
      //forceUpdate();
      
    

    return (
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
       
          justifyContent: 'center',
          alignContent: 'center',
        }}>
             <StatusBar backgroundColor="#F4F7FB" barStyle="dark-content"  />
        <View style={styles.container}>
            {/* Header section */}
            <View style={styles.container}>
            <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backImageStyle}>
          <Image resizeMode='center' source={require('../assets/images/back_black_ic.png')} style ={{ height : 20, width :20, marginStart : 20}}></Image>
</TouchableOpacity>
<TouchableOpacity style={styles.filterImageStyle}>
          <Image resizeMode='contain' source={require('../assets/icons/filter_ic.png')} style ={{ height : 20, width :20}} ></Image>
</TouchableOpacity>

</View>
          
          

            <Text
              style={styles.subTitleStyle}>
              Hello Jhon Doe!
            </Text>
            <Text
              style={styles.titleStyle} >
              Select your car !
            </Text>
            
            
            <SearchBar 
            
            term = {term}
           onTermChange = {searchTerm}
 >

        </SearchBar>
        {/* Available Cars */}
        <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Brands</Text>
        <FlatList
                    horizontal = {true}
                    showsHorizontalScrollIndicator={true}
                    data = {mockLogos}
                    keyExtractor={item => item.id}
                    renderItem ={({ item }) => {

                        return (
                          <TouchableOpacity   >
            
                          <BrandItem result = {item}/>  
                          </TouchableOpacity>
                          );}}
                />
                



          </View>
            

           

             {/* Available Cars */}
            <View style={{ flex: 2.5 }}>
          
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Available cars</Text>
              
                <FlatList
                    horizontal = {false}
                    showsHorizontalScrollIndicator={true}
                    data = {state}
                    keyExtractor={item => item.id}
                    renderItem ={({ item }) => {

                        return (
                          <TouchableOpacity  onPress = {()=> navigation.navigate('DestinationDetail', {
                            item: item,
                            otherParam: 'test data',
                          })} >
            
                          <CarItem result = {{item}}/>  
                          </TouchableOpacity>
                          );}}
                />
                <FlatList
                    horizontal = {false}
                    showsHorizontalScrollIndicator={true}
                    data = {mockCars}
                    keyExtractor={item => item.id}
                    renderItem ={({ item }) => {

                        return (
                          <TouchableOpacity  onPress = {()=> navigation.navigate('DestinationDetail', {
                            item: item,
                            otherParam: 'test data',
                          })} >
            
                          <CarItem result = {{item}}/>  
                          </TouchableOpacity>
                          );}}
                />
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.3,
        height : '100%',
        backgroundColor: COLORS.light_grey,
        marginTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight || 20
    },
    headerContainer: {
        flex: 2,
        width : '100%',
        
        marginBottom :15,
        height : 20,
        flexDirection : 'row',
        alignContent : 'space-between',
        backgroundColor: COLORS.light_grey
    },
    mainCardStyle: {
        borderRadius : 10,
         borderRadius: 25,
         marginTop : 20,
         marginStart :20,
         marginEnd :20,
         marginBottom : 30,
         backgroundColor : '#BEB6F1',
          marginTop : 15,
          flexDirection : 'row',
          justifyContent : 'flex-start',
           shadowColor : '#BEB6F1',
           shadowOffset: {
           width: 2
  ,
           height: 3,
               },
           shadowOpacity: 0.8,
           shadowRadius: 15,
           elevation: 5,
          
      },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },titleStyle: {
        color : 'black',
        fontSize : 28,
        marginStart : 20,
        marginBottom : 0,
        marginTop : Platform.OS === 'android' ? 0 : StatusBar.currentHeight || 10,
        textTransform: 'capitalize',
        fontWeight : '500',
        fontFamily : Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
       // fontFamily : 'Roboto',
        justifyContent : 'flex-start'
      },
      flatListStyle: {
           
         
        borderRadius : 10,
        borderRadius: 25,
  
           shadowColor: '#FF5A5E',
           shadowOffset: {
           width: 2
  ,
           height: 1,
               },
           shadowOpacity: 0.42,
           shadowRadius: 10,
           elevation: 5,
          
      },
      subTitleStyle: {
        color : '#A2A2A2',
        //color:'black',
         fontSize : 21,
         marginStart : 20,
         marginTop : 25,
         fontFamily : 'Roboto-Medium',
         justifyContent : 'flex-end'
       },
      cardViewStyle: {
        //height : CARD_HEIGHT,
        height : '100%',
         borderRadius : 10,
        
          borderRadius: 25,
           marginTop : 15,
           justifyContent : 'flex-start',
            shadowColor : '#A2A2A2',
            shadowOffset: {
            width: 2
   ,
            height: 3,
                },
            shadowOpacity: 0.42,
            shadowRadius: 15,
            elevation: 5,
           
       },
       chipsViewStyle: {
        flexDirection : 'column',
        marginTop : 10,
        marginBottom : 10
      },
      cardViewStyle: {
       //height : CARD_HEIGHT,
       height : '100%',
        borderRadius : 10,
       
         borderRadius: 25,
          marginTop : 15,
          justifyContent : 'flex-start',
           shadowColor : '#A2A2A2',
           shadowOffset: {
           width: 2
  ,
           height: 3,
               },
           shadowOpacity: 0.42,
           shadowRadius: 15,
           elevation: 5,
          
      },
      hintStyle: {

          //color : '#A2A2A2',
          color :'white',
        fontSize : 17,
        alignSelf : 'flex-start',
        marginTop : 20,
        marginEnd : 20,
        fontWeight : 'bold',
        width : '60%',
     
        fontWeight : '400',
        fontFamily : Platform.OS === 'android' ? 'Roboto_medium' : 'Test Calibre',
        justifyContent : 'flex-start'
      },
      imageStyle :{
        
        height : 150,
        width : 150,
        marginStart : 10,
        marginEnd : 10,
        alignSelf : 'flex-start',
        resizeMode : 'contain',
        justifyContent : 'center'
        

    },
    backImageStyle :{
        height : 20,
        width : 20,
        marginTop :20,
      flex : 4.5,
      

  },
  filterImageStyle :{
    marginTop :20,
    height : 20,
    width : 20,
    flex : 0.7,
    

},
      hintSecondStyle: {

        //color : '#A2A2A2',
        color :'white',
      fontSize : 20,
      alignSelf : 'flex-start',
      marginTop : 15,
      marginBottom : 10,
      marginEnd: 10,
      width : '60%',
      fontWeight : 'bold',
      fontFamily : 'Test Calibre',
      justifyContent : 'flex-start'
    }
});

export default HomeClient;
