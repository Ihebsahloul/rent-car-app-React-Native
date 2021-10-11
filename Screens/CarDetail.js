
import React, { useCallback, useMemo, useState,useRef,useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CalendarPicker from 'react-native-calendar-picker';
import Animated from 'react-native-reanimated';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import RBSheet from "react-native-raw-bottom-sheet";
import { render } from 'react-dom';
import { Context } from "../Context/CarContext";



const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar
   
 

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({ value, label }) => {
    return (
        <View style={styles.chipsStyle}>
           
            <Text style={{  color: COLORS.black, ...FONTS.h2 }}>{label}</Text>
            <Text style={{  color: COLORS.black, ...FONTS.h3 }}>{value}</Text>
        </View>
    )
}

const LocationLabel = ({ value, icon }) => {
    return (
        <View style={styles.chipsLocationStyle}>
           <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
            
            <Text style={{  color: COLORS.black, ...FONTS.h3, padding : 10 }}>{value}</Text>
        </View>
    )
}

const CarDetail = ({route,navigation}) => {

    const sheetRef = React.useRef(0);
    //const car = navigation.getParam('car');
    const { item, otherParam } = route.params;
    const refRBSheet = useRef();
    const bookingRBSheet = useRef();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const {state,editCar} =useContext(Context)
    
    const id=item.id
    console.log(id)
   // console.log(state)
    const car=state.find(car=>car.id===id)
    if( car != null)
    {
        console.log('the selected car is '+car.id)
        console.log('the selected car is '+car.booked)

    }


   // console.log(item)
   // console.log(otherParam)

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
          setSelectedEndDate(date);
        } else {
          setSelectedEndDate(null);
          setSelectedStartDate(date);
        }
      };

      const handleBookPress =  (id,booked) => {
        
       
        editCar(item.id,item.name,item.fuelType,item.price,item.acceleration,item.range,item.seats,true,item.transmission,item.type,images.car_example_image)
            console.log('item is : '+car.booked)
            bookingRBSheet.current.close()
            navigation.pop() 
    }


    const renderContent = () => (
        
        <View style={{  backgroundColor : '#F0F1F2'
          
            
        }}>
        <Text style={{ ...FONTS.h2, marginStart : 20 ,marginTop : 30,marginBottom : 20 }}>Payment Method</Text>
        <View style={styles.chipsLocationStyle}>
          
        <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> **** 3673</Text>
        <Image
           source={images.marstercard_image}
            resizeMode="contain"
            style={{
            width: 30,
            height: 30,
            flex :0.3
                    }}
          />

</View>
<View style={styles.chipsLocationStyle}>
          
          <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> Paypal Account</Text>
          <Image
             source={images.apple_pay_image}
              resizeMode="contain"
              style={{
              width: 30,
              height: 30,
              flex :0.3
                      }}
            />
  
  </View>
  <View style={styles.chipsLocationStyle}>
          
          <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> Apple Connect</Text>
          <Image
             source={images.paypal_image}
              resizeMode="contain"
              style={{
              width: 30,
              height: 30,
              flex :0.3
                      }}
            />
  
  </View>
    </View>
      );


    // Render

    return (
        <View style={styles.container}>

       <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height = {380}
        closeOnPressMask={false}
        renderContent = {renderContent}
        customStyles={{
            borderTopLeftRadius : 30,
            borderTopRightRadius : 30,
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000000"
          }
        }}
        
      >
           <View style={{  backgroundColor : '#F0F1F2',borderTopLeftRadius : 30,
            borderTopRightRadius : 30
          
            
        }}>
        <Text style={{ ...FONTS.h2, marginStart : 20 ,marginTop : 30,marginBottom : 20 }}>Payment Method</Text>
        <View style={styles.chipsLocationStyle}>
          
        <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> **** 3673</Text>
        <Image
           source={images.marstercard_image}
            resizeMode="contain"
            style={{
            width: 30,
            height: 30,
            flex :0.3
                    }}
          />

</View>
<View style={styles.chipsLocationStyle}>
          
          <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> Paypal Account</Text>
          <Image
             source={images.paypal_image}
              resizeMode="contain"
              style={{
              width: 30,
              height: 30,
              flex :0.3
                      }}
            />
  
  </View>
  <View style={styles.chipsLocationStyle}>
          
          <Text style={{  color: COLORS.black, ...FONTS.h1, paddingVertical : 15 ,flex :0.7 }}> Apple Connect</Text>
          <Image
             source={images.apple_pay_image}
              resizeMode="contain"
              style={{
              width: 30,
              height: 30,
              flex :0.3
                      }}
            />
  
  </View>
    </View>
       
      </RBSheet>
      <RBSheet
        ref={bookingRBSheet}
        closeOnDragDown={true}
        height = {530}
        closeOnPressMask={false}
        renderContent = {renderContent}
        customStyles={{
            borderTopLeftRadius : 30,
            borderTopRightRadius : 30,
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000000"
          }
        }}
        
      >
           <View style={{  backgroundColor : '#F0F1F2',borderTopLeftRadius : 30,
            borderTopRightRadius : 30, padding :30
          
            
        }}>
             <Text style={{  color: COLORS.black, ...FONTS.h2, marginVertical : 20}}>Select a reservation period :</Text>
              <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
         
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
        />
       

          <LinearGradient
       colors={['#FB8D41','#FF4500','#CD458F', '#21C3C8','']}
    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={{ height: 53, width: '100%', alignItems: 'center', justifyContent: 'center',borderRadius : 8,padding :1,marginTop :20}}
>
    <TouchableOpacity style={styles.buttonContainer} onPress ={() => {handleBookPress(car.id,true)
    console.log(item.booked)} }>
        <Text style={styles.buttonText}>
            Confirm
        </Text>
    </TouchableOpacity>
</LinearGradient>
        
    </View>
       
      </RBSheet>
       
             <StatusBar backgroundColor="#ffffff" barStyle="dark-content"  />
             <ScrollView
        nestedScrollEnabled = {true}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
        contentContainerStyle={{
      
          justifyContent: 'center',
          alignContent: 'center',
        }}>
            {/* Header */}
            <View 
                 style ={{backgroundColor : 'white'}}>
               
                <View style ={{backgroundColor : 'white'}}>
                    <View style={{ flexDirection: 'row'  }}>
                        <View style={styles.shadow}>
                            
                        </View>
                        <View  style = {styles.backgroundStyle} >


<View  style = {styles.cardViewStyle} > 
        


          
  

<View style = {styles.textSectionStyle} >
        <Text style = {styles.ratingTextStyle}>{item.name}</Text>
        <Text style = {styles.titleStyle}>{item.fuelType}</Text>
       
        <Text style = {styles.subTitleStyle}>{item.type}</Text>
        
        </View>
        <View style={{
                  width: '70%',
                  alignContent : 'flex-end',
                  justifyContent : 'flex-end',
                  height: 200,
                  marginTop : 20,
            
                  marginBottom : 30,
               
                  resizeMode: 'center',
                  
            
                 
                }} >
        
        <Image source={item.image}
                style={{
                  width: '100%',
                  alignContent : 'flex-end',
                  justifyContent : 'flex-end',
                  height: 250,
                  resizeMode: 'contain',
               
            
                 
                }} ></Image>
                </View>

                </View>
      </View>
      
                       
                    </View>

                    
                </View>

                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.pop() }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style = {{backgroundColor : 'white'}}>
                {/* Icons */}
                <Text style={{ ...FONTS.h2, marginStart : 20,marginTop : 30 }}>Specs</Text>
                <View style={{ flexDirection: 'row', width : '100%'}}>
                    <IconLabel
                        icon={icons.villa}
                        label="Acceleration"
                        value = {item.acceleration}
                    />

                    <IconLabel
                        icon={icons.parking}
                        label="Range"
                        value = {item.range}
                    />

                    <IconLabel
                        icon={icons.wind}
                        label="Seats"
                        value = {item.seats}
                    />
                </View>

                <Text style={{ ...FONTS.h2, marginStart : 20 ,marginTop : 20}}>Location</Text>
                <View style={{ flexDirection: 'column', marginTop: SIZES.base,width : '100%', justifyContent: 'space-between' }}>
                    <LocationLabel
                        style = {{flex : 1}}
                        icon={images.pin_image}
                        value={item.transmission}
                    />

                   
                </View>


                {/* About */}
                <TouchableOpacity   onPress={() => refRBSheet.current.open()}>
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2, marginStart : 20 ,marginTop : 10,marginBottom :10 }}>Payment Method</Text>
                    <View style={styles.chipsLocationStyle}>
                      
                    <Text style={{  color: COLORS.black, ...FONTS.h2, paddingVertical : 15 ,flex :0.7 }}> **** 3673</Text>
                    <Image
                       source={images.marstercard_image}
                        resizeMode="contain"
                        style={{
                        width: 30,
                        height: 30,
                        flex :0.3
                                }}
                      />
            
        </View>
                </View>
                </TouchableOpacity>
            </View>
        

            {/* Footer */}
            <View style={{  paddingHorizontal: SIZES.padding , marginTop  :80 ,marginBottom : 20}}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={['#F6F4F2', '#F6F4F2']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.h2 }}>{item.price} $</Text>
                            <Text style={{ ...FONTS.h3 }}>per Day</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => bookingRBSheet.current.open()}
                        >
                            <LinearGradient
                                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={['#FF5A5E', '#B45C9F']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Book now</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
           
    
    </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
          
        height : '100%',
        resizeMode: 'stretch',
        flexDirection : 'column',
        backgroundColor : '#F6F4F2',
        borderBottomEndRadius  :30,
        borderBottomStartRadius :30
        
          
            },
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius : 35,
        borderTopRightRadius :35,
        marginTop :30,
        marginTop: Platform.OS === 'android' ? -10 : StatusBar.currentHeight || 0
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
    },cardViewStyle: {
             height : 200,
             width : '98%',
             backgroundColor : '#ffffff',
              marginTop : 100,
              backgroundColor : '#F6F4F2',
              flexDirection : 'row',
              justifyContent : 'flex-start',
              borderBottomStartRadius : 35,
              borderBottomEndRadius :35
        
   
               
              
           
       },
      textSectionStyle: {
      
        flexDirection : 'column',
        resizeMode: 'stretch',
        height : '100%',
        width : '30%',

        marginStart : 20,
        marginTop : 30,
        paddingTop : 5,

      },
      buttonContainer: {
        width: '100%',
        alignItems: 'center',

        borderRadius:8,
        backgroundColor: '#F4F7FB',
        borderWidth :0,
        padding : 1,
    },
    buttonText: {
      textAlign: 'center',
      color: 'black',
      backgroundColor: '#F4F7FB',
      padding: 12,
      marginLeft: 1,
      marginRight: 1,
      fontSize : 22,
      fontFamily : 'Roboto-Bold',
      width: 198,
      
    },
      titleStyle: {
        //color : '#555877',
        color :'black',
        fontSize : 17,
        width : 130,
        paddingVertical : 10,
       
        alignItems: 'baseline',
      
       
       textAlignVertical : 'center',
        fontWeight : '500',
        fontWeight : '600',
        fontFamily : Platform.OS === 'android' ? 'Roboto_semiBold' : 'Test Calibre',
      },
      subTitleStyle: {
        color : 'black',
        fontSize : 15,
        marginTop : 5,
        marginBottom : 30,
   
    
        fontWeight : '600',
        fontFamily : Platform.OS === 'android' ? 'Roboto_semiBold' : 'Test Calibre',
        justifyContent : 'flex-end'
      },
      ratingTextStyle: {
        color : 'black',
        fontSize : 23,
        fontFamily : 'Roboto-Bold',
        marginStart : 0,
        justifyContent : 'flex-start',
        alignSelf : 'flex-start'
      }  ,
      chipsViewStyle: {
        flexDirection : 'row',
        justifyContent : 'center',
        flex :1,
        marginTop : 10,
        marginBottom : 10,
        backgroundColor: '#FFFFFF'
      },
      chipsStyle: {
        color : '#b7183e',
        padding : 8,
        backgroundColor : '#FFFFFF',
        borderColor :COLORS.gray,
        fontSize : 13,
        marginStart : 20,
        marginTop : 10,
        paddingHorizontal : 20,
        borderRadius : 10,
        borderWidth : 0.3,
       
        alignItems : 'center',
        fontFamily : 'Roboto_medium',
       
      }  ,
      chipsLocationStyle: {
        color : '#b7183e',
    
        backgroundColor : '#FFFFFF',
        borderColor :COLORS.gray,
        fontSize : 13,
        flexDirection : 'row',
        marginStart : 20,
        marginEnd : 20,
       marginBottom : 20,
        paddingHorizontal : 20,
        borderRadius : 10,
        borderWidth : 0.3,
       
        alignItems : 'center',
        fontFamily : 'Roboto_medium',
       
      }  
    ,
      textStyle: {
        color : '#A2A2A2',
        fontSize : 20,
        marginTop : 10,
        width : 100,
        height : '20%',
        fontWeight : '600',
        fontFamily : Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
      
      }  
      ,
      imageStyle :{
 
        height :120,
        width : 250,
        borderRadius : 7,
        marginStart :20,
        flex : 1 , 
        alignSelf : 'auto'

    }
    
});

export default CarDetail;
