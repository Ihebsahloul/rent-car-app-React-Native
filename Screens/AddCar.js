import React, { useState, useEffect,useContext } from "react";
import { SliderPicker } from "react-native-slider-picker";
import { globalStyles } from "../styles/global";
import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import ImagePickerComp from "../utilities/ImagePicker";
import { useForm } from "../Hooks/useForm";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { createCarList } from "../actions/rentCarList";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import {
  fuelData,
  typeData,
  seatingData,
  transmissionData,
  commonNavigation,
  showAlert,
  pickImages,
  isEmpty,
  checkImageStatus
} from "../utilities/AppUtils";
import {
  TextInput,
  View,
  Text,
  YellowBox,
  LogBox,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { Context } from "../Context/CarContext";
import { FONTS, images, SIZES } from "../constants";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const IconLabel = () => {
  return (
<SimpleLineIcons name="arrow-down" size={20}  color="black" />
  )
}


const AddCar = ({props}) => {
  const [name,setName] = useState('');
  const [fuelType,setFuelType] = useState('');
  const [price,setPrice] = useState('');
  const [type,setType] = useState('');
  const [acceleration,setAcceleration] = useState('');
  const [range,setRange] = useState('');
  const [seats,setSeats] = useState('');
  const [image,setImage] = useState('');
  const [booked,setBooked] = useState('');
  const [transmission,setTransmission] = useState('');

 
  const [rate, setRate] = useState(25);
  const [Loading, isLoading] = useState(false);
  const {addCarDetail}= useContext(Context);
  //const [image, setImage] = useState(null);


  const [values, handleChange] = useForm({
    
    fuelType: "",
    price: "",
    safety: "",
    acceleration: "",
    range: "",

  });


  

      

   
    

  const handleSubmit = e => {
    const object = {
      ...values,
      rate
    };
    if (!name ||  !acceleration || !range || !price || !seats  ) {
     showAlert("Kindly fill all the fields");
    } else {
      isLoading(true);
      addCarDetail(name,fuelType,price,acceleration,range,seats,false,transmission,type,images.car_example_image)
      setTimeout(() => {
        //props.navigation.goBack();
        Toast.show({
          text1: "Congrats",
          text2: "Car added succesfully 👋"
        });
        isLoading(false);
      }, 3000);
      
      
    }
  };

  useEffect(() => {
    //YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    checkImageStatus();
  }, []);

  return (
    <View style={globalStyles.addContainer}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      {Loading ? (
        <AnimatedCircularProgress
          style={styles.animatedCircular}
          size={50}
          width={10}
          fill={100}
          duration={2000}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
          <Image
                    source={images.vehicle_icon}
                    resizeMode="contain"
                    style={{
                        width: 50,
                        height: 50,
                        marginTop :10
                    }}
                /> 
            <Text style={globalStyles.heading}>Car Information</Text>
                     
            <Text style={styles.subTitleStyle}>Insert a new car !</Text>

            <Text style={{ marginTop: SIZES.base,  ...FONTS.h1 }}>Car Name</Text>
            <TextInput
              placeholder="Car name"
              style={globalStyles.inputStyle}
              onChangeText={name => setName(name)}
              value={name}
            />
           
            
                 <Text style={{ marginTop: SIZES.base,  ...FONTS.h1 }}>Car Acceleration</Text>
            <TextInput
              placeholder="Car Acceleration"
              style={globalStyles.inputStyle}
              onChangeText={acceleration => setAcceleration(acceleration)}
              value={acceleration}
            />

<Text style={{ marginTop: SIZES.base,  ...FONTS.h1 }}>Car Range</Text>
            <TextInput
              placeholder="Car Range"
              style={globalStyles.inputStyle}
              onChangeText={range => setRange(range)}
              value={range}
            />
            <View style={styles.container1}>
              <View style={styles.inputs}>
              <Text style={{ marginTop: SIZES.base,  ...FONTS.h1 }}>Fuel Type</Text>
              <SelectDropdown
                  /*value={values.type}
                  label="Car type"
                  data={typeData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  useNativeDriver={true}
                  onChangeText={txt => handleChange("type", txt)}*/

                  data={fuelData}
                  buttonStyle = {styles.buttonStyle}
                  buttonTextStyle = {styles.buttonTextStyle}
                  renderDropdownIcon = {IconLabel}
            
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    setFuelType(selectedItem)
	}}

 
  style = {{borderBottomColor: "transparent"}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
                />
     <Text style={{ marginTop: SIZES.base,  ...FONTS.h1 }}>Type</Text>
              <SelectDropdown
                  /*value={values.type}
                  label="Car type"
                  data={typeData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  useNativeDriver={true}
                  onChangeText={txt => handleChange("type", txt)}*/

                  data={typeData}
                  buttonStyle = {styles.buttonStyle}
                  buttonTextStyle = {styles.buttonTextStyle}
                  renderDropdownIcon = {IconLabel}
            
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    setType(selectedItem)
	}}

 
  style = {{borderBottomColor: "transparent"}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
                />
                
              </View>
              <View style={styles.inputs}>
              <Text style={{ ...FONTS.h1 }}>Seats</Text>
              <SelectDropdown
                  /*value={values.type}
                  label="Car type"
                  data={typeData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  useNativeDriver={true}
                  onChangeText={txt => handleChange("type", txt)}*/

                  data={seatingData}
                  buttonStyle = {styles.buttonStyle}
                  renderDropdownIcon = {IconLabel}
                  buttonTextStyle = {styles.buttonTextStyle}
            
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    setSeats(selectedItem)
	}}

 
  style = {{borderBottomColor: "transparent"}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
                />
                
              </View>
              <View style={styles.inputs}>
              <Text style={{ ...FONTS.h1 }}>Transmission Mode</Text>
              <SelectDropdown
                  /*value={values.type}
                  label="Car type"
                  data={typeData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  useNativeDriver={true}
                  onChangeText={txt => handleChange("type", txt)}*/

                  data={transmissionData}
                  buttonStyle = {styles.buttonStyle}
                  renderDropdownIcon = {IconLabel}
                  buttonTextStyle = {styles.buttonTextStyle}
            
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    setTransmission(selectedItem)
	}}

 
  style = {{borderBottomColor: "transparent"}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
                />
                
              </View>
          
            </View>
            <Text style={{  ...FONTS.h1 }}>Rate</Text>
            
            <SliderPicker
            style = {styles.container}
              backgroundColor = {'black'}
              callback={position => {
                setPrice(position);
              }}
              defaultValue={100}
              maxValue={1000}
              minLabel={'0 $'}
              width  ={'100%'}
              maxLabel={'1000 $'}
              showNumberScale={true}
              showSeparatorScale={true}
              labelFontColor={"#FF5A5E"}
              fillColor={"#FF5A5E"}
              labelFontWeight={"300"}
              heightPercentage={1}
              widthPercentage={50}
            
            />
            <Text>{values.rate}</Text>
            <Text style={{  ...FONTS.h1 }}>Address</Text>
            <TextInput
              placeholder="Address"
              style={globalStyles.inputStyle}
              onChangeText={txt => handleChange("address", txt)}
              value={values.address}
            />
          
            <ImagePickerComp
              image={image}
              pickImage={async () => setImage(await pickImages())}
            />
               <View style={{ height : 100}}>
               <LinearGradient
       colors={['#FB8D41','#FF4500','#CD458F', '#21C3C8','']}
    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={{ height: 53, width: '100%', alignItems: 'center', justifyContent: 'center',marginTop : 25,borderRadius : 8,padding :1}}
>
    <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
        Submit
        </Text>
    </TouchableOpacity>
</LinearGradient>
           
                        </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

//AddCar.navigationOptions = commonNavigation("AddCar");

/*const mapStateToProps = state => ({
  status: state.my_car.status
});*/

const styles = StyleSheet.create({
  container: {

    justifyContent: "flex-start",
    marginTop : 20
  },
  container1: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  containerSub: {
    flexDirection: "row",
    alignItems: "baseline"
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
  subTitleStyle: {
    color : '#A2A2A2',
    //color:'black',
     fontSize : 21,
     marginTop:5,
     marginBottom : 20,
     fontFamily : 'Roboto-Medium',
     justifyContent : 'flex-end'
   },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 2,
    fontSize: 18,
    borderRadius: 6
  },
  inputs: {
    flexBasis: "48%",
    marginBottom: 10,
    marginTop: 10,

    fontSize: 18,
    borderRadius: 6
  },
  buttonStyle: {
    
    color: 'black',
    height: 50,
    width : '100%',
    borderColor :'black',
    backgroundColor : '#ffffff',

    alignItems: 'center',
    borderRadius: 10,
 
    marginTop: 10,
    marginBottom: 5,
    
      shadowColor: '#FF5A5E',
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
    color: 'grey',
    alignItems : 'center',
    alignSelf : 'center',
    flex : 1,
    fontWeight : '500',
    fontFamily : Platform.OS === 'android' ? 'Roboto-Medium' : 'Roboto-Medium',
    fontSize: 18,
    paddingVertical : 10
    
  },
  animatedCircular: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default (AddCar);
