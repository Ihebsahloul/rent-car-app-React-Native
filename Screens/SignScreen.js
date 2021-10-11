
import React, {useState,useEffect, createRef,navigation} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from '../constants';

import { FONTS } from '../constants';

import queryString from 'query-string';

import * as Font from 'expo-font';

import Loader from '../Components/Loader';

import { LinearGradient } from 'expo-linear-gradient';

import * as Keychain from 'react-native-keychain';

import BouncyCheckbox from "react-native-bouncy-checkbox";

const SignInScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userReference, setUserReference] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [preLogTest, setPreLogTest] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  
 

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto_medium: require('../assets/fonts/Roboto-Medium.ttf'),
        Roboto: require('../assets/fonts/Roboto-Bold.ttf'),
        Roboto_semiBold: require('../assets/fonts/Roboto-Black.ttf')
    

      });
    }
  loadFont(),checkUserStatus()
  }, []);

  const saveCredentials = async (email,reference) => {
    // login api call here
    if(checkboxState)
    {
      await Keychain.setGenericPassword(email, reference);
      setIsLoggedIn(true);
      console.log(Keychain)
      setUserDetails({email, reference});
    } else {
      handleLogout()
    }
 
  };

  const checkUserStatus = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      console.log(credentials)
      if (credentials) {
        setIsLoggedIn(true);
        setUserDetails(credentials);
        setUserEmail(credentials.username)
     
        setUserReference(credentials.password)
      } else {
        console.log("No credentials stored");
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  }

  const handleLogout = async()=>{
    const logout = await Keychain.resetGenericPassword();
    console.log({logout});
    if(logout){
      setIsLoggedIn(false);
      setUserDetails({});
      setUserEmail('');
      setUserReference('');

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
      this.passwordInputRef.clear();
      this.emailInputRef.clear();
    }
  }

 

 

  const handleSubmitPress =  async() => {
    setLoading(true);
    if ( userEmail == 'admin@admin.com')
    {
      navigation.navigate("HomeAdmin") 
    } else if (userEmail == 'client@client.com')
    {
      navigation.navigate("HomeClient") 

    }
    setErrortext('');
    if (!userEmail) {
      alert('Veuillez saisir la référence du dossier');
      return;
    }
    if (!userReference
) {
      alert('Veuillez saisir votre Adresse mail');
      return;
    }
    setLoading(false);

   /*let dataToSend = {reference: userEmail, email: userReferenc};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    console.log(formBody)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    fetch('https://apimail.astel.coop/credit', {
      method: 'POST',
      body: formBody,
      timeout : 10000,
      headers: {
        //Header Definition
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log(responseJson)
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
       // console.log(responseJson)
        console.error(error);
      });*/

      

      /*let dataToSend = { email: userEmail,reference: userReference};
      
      //const {reference, email} = this.state;
    const payload = dataToSend
    console.log(payload);

    const onSuccessLogin = async({data}) => {
      // Set JSON Web Token on success
      setLoading(false)

      console.log(data)
      AsyncStorage.setItem('token', data.token)
     // await Keychain.setGenericPassword("TEST","pass")
     saveCredentials(payload.email,payload.reference)
      navigation.navigate('StepsList')
     // setClientToken(data.token);
      //this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = error => {
      setLoading(false);
      console.log(error && error);
      setErrortext('An error has occured');
     // this.setState({errors: error, isLoading: false});
    };
      APIKit.post('/logon', queryString.stringify({
        reference: userEmail,
        email: userReference
  
    }))
      .then(onSuccessLogin)
      .catch(onFailure);


  };*/

};

  return (



    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
      <View><StatusBar backgroundColor="white" barStyle="dark-content" /></View>
      
      <Loader loading={loading} />
      
        <View>
          <KeyboardAvoidingView enabled>
            <View >
            
            <Image
                source={require('../assets/images/car_men.jpg')}
                style={{
                  width: '100%',
                  alignContent : 'flex-start',
                  justifyContent : 'flex-start',
                  height: 190,
                  marginTop : 20,
                  marginBottom : 30,
                  resizeMode: 'contain',
                  marginEnd : 50,
            
                 
                }}
              />
               </View>
            <Text
              style={styles.titleTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
             Car Rental,
            </Text>
            <Text
              style={styles.subTitleTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              
Travel, love a car
            </Text>
           
           
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
             value ={ userEmail}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)}
                placeholder="Adresse mail" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
           
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                 value = {userReference}
                onChangeText={(userReference) =>
                  setUserReference(userReference)}
                placeholder="Mot de passe" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
               
                autoCapitalize ={'none'}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <LinearGradient
       colors={['#FB8D41','#FF4500','#CD458F', '#21C3C8','']}
    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={{ height: 53, width: '85%', alignItems: 'center',marginTop :50,marginStart : 30,marginBottom : 25,marginEnd :40, justifyContent: 'center',borderRadius : 8,padding :1}}>
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={() =>  handleSubmitPress()}>
            Login
        </Text>
    </TouchableOpacity>
            </LinearGradient>
           
            <View >
            
       <View style={styles.checkboxContainer}>
       <BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Se souvenir de moi"
  style= {styles.titleTextStyle}
  onPress={() => setCheckboxState(!checkboxState)}
  //onPress={(isChecked: boolean) => {}}
  
/>
        
      </View>
     
    </View>
    

           
           
           
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  mainBody: {
    marginTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight || 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#FF4500',
    borderWidth: 0,
    color: '#FFFFFF',
    justifyContent : 'center',
    borderColor: '#ffffff',
    height: 50,
    
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 40,
    marginBottom: 25,
    
      shadowColor: '#FF4500',
      shadowOffset: {
      width: 0
,
      height: 5,
          },
      shadowOpacity: 0.42,
      shadowRadius: 5,
      elevation: 10,
  },
  secondButtonStyle: {
    backgroundColor: '#BEB6F1',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    
      shadowColor: '#BEB6F1',
      shadowOffset: {
      width: 0
,
      height: 5,
          },
      shadowOpacity: 0.42,
      shadowRadius: 5,
      elevation: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    alignItems : 'center',
    alignSelf : 'center',
    flex : 1,
    fontWeight : '600',
    fontFamily : Platform.OS === 'android' ? 'Roboto_semiBold' : 'Test Calibre',
    fontSize: 20,
    paddingVertical : 10
    
  },
  inputStyle: {
    flex: 1,
    color: "black",
    backgroundColor : 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderColor : 'grey',
    borderWidth : 0.3,
    height : 50,
    borderRadius: 10,
    fontSize : 17,
    fontWeight : '400',
    fontFamily : Platform.OS === 'android' ? 'Roboto_medium' : 'Test Calibre',
    
  },
  registerTextStyle: {
    color: '#FF5A5E',
    textAlign: 'center',
    //fontWeight: 'bold',
    alignSelf : 'center',
    justifyContent : 'center',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  titleTextStyle: {
    color: '#000000',
    fontSize:  35,
    alignContent : 'flex-start',
    justifyContent : 'flex-start',
    marginStart: 40,
    fontWeight : '600',
   // fontFamily : 'Test Calibre',
    fontFamily : Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
    marginTop : 0,
    marginEnd : 50,
  },
  subTitleTextStyle: {
    color : '#A2A2A2',
    fontSize: 17,
    alignContent : 'flex-start',
    justifyContent : 'flex-start',
    marginStart: 40,
    marginEnd : 40,
    marginBottom : 30,
    fontWeight : '500',
    fontFamily : Platform.OS === 'android' ? 'Roboto-Medium' : 'Roboto-Medium',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    marginTop :20,
  fontFamily : 'TestSohne-Kraftig',
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius:8,
    backgroundColor: 'white',
    borderWidth :0,
  
    padding : 1,
},
buttonText: {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'white',
  padding: 12,
  fontSize : 22,
  
  fontFamily : 'Roboto-Medium',
  width: 198,
  
},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
   
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    flex : 0.1,
    height:20
    
  },
  label: {
    margin: 8,
    
  },
});