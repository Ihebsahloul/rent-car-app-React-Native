
import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import * as Font from 'expo-font';
import {Text,StyleSheet,Image} from 'react-native';

const BrandItem = ({result}) => {

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({

    

      });
    }
    loadFont()
  }, []);


    
  
    return (
      <View  style = {styles.backgroundStyle} >


<View  style = {styles.cardViewStyle} > 
        


          
  

        <View style={{
                  width: 80,
                  alignContent : 'center',
                  justifyContent : 'center',
                  height: 70,
                  
                
                  
                  
            
                 
                }} >
        
        <Image source={result.image}
                style={{
                  width: 80,
                  alignContent : 'center',
                  justifyContent : 'center',
                  height: 50,
                  marginTop : 30,
                  alignSelf : 'center',
                  resizeMode: 'contain',
                
               
            
                 
                }} ></Image>
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
      cardViewStyle: {
        borderRadius : 10,
        height : 100,
             borderRadius: 25,
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
      textSectionStyle: {
      
        flexDirection : 'column',
        resizeMode: 'stretch',
        height : '100%',
        width : '35%',
        marginStart : 25,
        marginTop : 30,
        paddingTop : 5,

      },
      titleStyle: {
        //color : '#555877',
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
        marginBottom : 30,
   
    
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
  export default BrandItem;