
import React, { useState, useEffect } from 'react';
import   {AppLoading,Font } from 'expo';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

    
const SearchBar  = ({ term, onTermChange,onTermSubmit })=> {

  
  
    return (
    <View style = {styles.viewStyle} >
        <Image resizeMode='contain' source =  {require('../assets/icons/search_ic.png')} style = {styles.imageStyle}  ></Image>
 
       

        <TextInput style = {styles.textStyle} 
                  placeholder="Type a car name"
                  placeholderTextColor="#A2A2A2" 
                  value ={term}
                  onChangeText ={newTerm => onTermChange(newTerm)}
                  autoCapitalize = "none"
                  onEndEditing = {()=>onTermSubmit()}
                  autoCorrect={false} />

        </View>
        );
     
} ;

const styles = StyleSheet.create({
    textOneStyle: {
        borderWidth : 1,
        borderColor : 'red',
        height :100 ,
        borderRadius : 5,
        fontFamily : 'Roboto',
        position : 'absolute'
      },
      textTwoStyle: {
        borderWidth : 1,
        borderColor : 'red',
        borderRadius : 5,
        flex :3,
        height : 100,
        alignSelf : 'flex-end',
        position : 'absolute'
      },
      textThreeStyle: {
        borderWidth : 1,
        borderColor : 'red',
        
        height : 100,
        borderRadius : 5,
        position :'relative',
        top : 100 ,
        alignSelf : 'center'
        
  
      },
      textStyle: {
        color : 'black',
        fontSize : 15,
        flex :0.8,
        fontFamily : 'Roboto-Medium',
        justifyContent : 'flex-end'
      } ,
      viewStyle :{
         alignItems : 'center',
          borderRadius : 7,
          margin : 20,
          height : 50,
          backgroundColor: '#ffffff',
          flexDirection : 'row',
          shadowColor : '#A2A2A2',
               shadowOffset: {
               width: 1
      ,
               height: 1,
                   },
               shadowOpacity: 0.1,
               shadowRadius: 15,
               elevation: 2,
  
      },
       fullViewStyle :{
        height : '0%',
        resizeMode: 'stretch',
        backgroundColor: '#FFFFFF'

    } ,
      imageStyle :{
        height :20,
        width : 20,
        marginTop : 0,
        flex : 0.2 , 
        alignSelf : 'center',
        alignContent : 'flex-start'

    } ,
    
      buttonStyle :{
        fontSize : 30 ,
        marginVertical : 20
      } , 
      textInputStyle :{
          marginVertical : 20 ,
          fontSize : 15 ,
          borderWidth : 2,
          borderRadius : 4,

          borderColor : 'grey'
      }
});

export default SearchBar ; 