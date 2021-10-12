
import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import * as Font from 'expo-font';
import {Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CarItem = ({result}) => {

  console.log(result)
  
  const [image,setImage] = useState('');
  const [bookedText,setBookedText] = useState('');
  const [name,setName] = useState('');
  console.log(image)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({

    

      });
    }
    loadFont(), setImage(result.item.image),setName(result.item.name),updateBookedText(result.item.booked)
    
  }, []);

  const updateBookedText = (booked) => {
    //function to handle the booking state change
    if (booked ===  false ) {
      setBookedText('available');
    } else {
      setBookedText('Not available');
    }
  };


  console.log(image);
  console.log(name);
  console.log()


    
  
    return (
      
      <View  style = {styles.backgroundStyle} >

 

<View  style = {styles.cardViewStyle} > 
        
<View  style ={{flexDirection : 'row'}} >

          
  

<View style = {styles.textSectionStyle} >
        <Text style = {styles.ratingTextStyle}>{result.item.name}</Text>
        <Text style = {styles.titleStyle}>{result.item.fuelType}</Text>
        <Text style = {styles.textStyle}>{result.item.price} $</Text>
        <Text style = {styles.subTitleStyle}>{result.item.type}</Text>

        <Text style = {styles.bookedStyle}>{bookedText}</Text>
        
        </View>
        <View style={{
                  width: '60%',
                  alignContent : 'flex-end',
                  justifyContent : 'flex-end',
                  height: 170,
                  marginTop : 40,
                  marginBottom : 20,
                  paddingEnd :20,
                  resizeMode: 'center',
                  marginEnd : 50,
            
                 
                }} >
        
        <Image source = {result.item.image}
                style={{
                  width: '100%',
                  alignContent : 'flex-end',
                  justifyContent : 'flex-end',
                  height: 170,
                  resizeMode: 'contain',
               
            
                 
                }} ></Image>
                 <TouchableOpacity
                            style={styles.arrowStyle}
                            
                        >
                           <AntDesign name="arrowright" size={24} color='#FF5A5E' style ={{marginTop :7}} />
                        </TouchableOpacity>
                </View>

                </View>
                

                </View>
      </View>
      
    )
  }

  const styles = StyleSheet.create({
    
      backgroundStyle: {
      
        flexDirection : 'column',
  
        
        
        
        paddingTop : 5,

      },
      itemStyle: {
      
        flexDirection : 'column',
  
        
        
        
        paddingTop : 5,

      },
      cardViewStyle: {
        borderRadius : 15,
        height : 220,
          
             marginTop : 20,
             marginStart :20,
             marginBottom :25,
             marginEnd :20,
             backgroundColor : '#ffffff',
              marginTop : 15,
              flexDirection : 'row',
              justifyContent : 'flex-start',
              shadowColor : '#A2A2A2',
               shadowOffset: {
               width: 2
      ,
               height: 1,
                   },
               shadowOpacity: 0.29,
               shadowRadius: 15,
               elevation: 2,
               
           
       },
       arrowStyle: {
        borderRadius : 10,
 
           
             
             backgroundColor : '#f0dcd8',
              marginBottom :5,
              height :40,
              width : 50,
              marginStart :  Platform.OS === 'android' ? 130 : 150,
              flexDirection : 'row',
              justifyContent : 'center',
              shadowColor : '#f0dcd8',
               shadowOffset: {
               width: 2
      ,
               height: 1,
                   },
               shadowOpacity: 0.4,
               shadowRadius: 15,
               elevation: 2,
               
           
       },
      textSectionStyle: {
      
        flexDirection : 'column',
        resizeMode: 'stretch',
        height : '100%',
        width : '28%',
        marginStart : 25,
        marginTop : 20,
        paddingTop : 5,

      },
      titleStyle: {
        color :'grey',
        fontSize : 17,
        width : 130,
        paddingVertical : 10,
       
        alignItems: 'baseline',
      
       
       textAlignVertical : 'center',
        fontWeight : '500',
        fontWeight : '600',
        fontFamily : 'Roboto-Regular'
      },
      subTitleStyle: {
        color : '#0E58D1',
        fontSize : 13,
        marginTop : 5,
        marginBottom : 12,
   
    
        fontWeight : '600',
        fontFamily : 'Roboto-Regular',
        justifyContent : 'flex-end'
      },
      textStyle: {
        color : '#FF5A5E',
        fontSize : 20,
        marginEnd : 10,
        marginBottom : 10,
        fontFamily : 'Roboto-Bold',
        justifyContent : 'flex-end'
      } ,
      bookedStyle: {
        color : '#21C3C8',
        fontSize : 17,
   
        
        fontFamily : 'Roboto-Bold',
        marginBottom : Platform.OS === 'android' ? 20  : 10,
        justifyContent : 'flex-end'
      } ,
      ratingTextStyle: {
        color : 'black',
        fontSize : 22,
        fontFamily : 'Roboto-Bold',
        marginStart : 0,
        justifyContent : 'flex-start',
        alignSelf : 'flex-start'
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
  export default CarItem;