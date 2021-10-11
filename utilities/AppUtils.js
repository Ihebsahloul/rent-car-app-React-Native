import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { images } from "../constants";

export const fuelData = [
  
    "E85"
  ,
  
     "Gasoline"
,
  
     "Diesel"
  
];

export const typeData = [
  
     "SEDAN"
  ,
  
     "COUPE"
  ,
  
     "SPORTS CAR"
  ,
  
   "STATION WAGON"
  
];
export const mockCarsData = [
  {
      name : 'Mercedes A Class',
      fuelType : 'Gazoline',
      price : '120',
      safety : 'Safe Vehicle',
      acceleration : '6.5s 0-100Km/h',
      range : '300 Km',
      seats : '5 Adults',
      booked : false ,
     image : images.car_example_image,
      id : '0'
  },
  {
    name : 'Bmw 4 Series',
    fuelType : 'Diesel',
    price : '160',
    safety : 'Safe Vehicle',
    acceleration : '5s 0-100Km/h',
    range : '340 Km',
    seats : '5 Adults',
    booked : false ,
   image : images.car_bmw,
    id : '1'
},
{
  name : 'Peugeot 2008',
  fuelType : 'Diesel',
  price : '130',
  safety : 'Safe Vehicle',
  acceleration : '10s 0-100Km/h',
  range : '300 Km',
  seats : '7 Adults',
  booked : false ,
  image : images.car_peugeot,
  id : '2'
},
{
  name : 'Hyundai I20 ',
  fuelType : 'Gazoline',
  price : '90',
  safety : 'Safe Vehicle',
  acceleration : '9s 0-100Km/h',
  range : '260 Km',
  seats : '5 Adults',
  booked : false ,
  image : images.car_hyundai,
  id : "3"
}
  


];
export const transmissionData = [
  
    "Manual"
  ,
  
     "Automatic"
  ,
  
    "Continuously variable transmission"
  
];

export const logosData = [
 { 
  image : images.tesla_logo_image,
  id:'0'
}
,
{image : images.mercdedes_logo_image,
  id:'1'}


,
{image : images.peugeot_logo_image,id:'2'},

{image : images.volk_logo_image,id:'3'},
{image : images.hyundai_logo_image,id:'4'},

{image : images.bmw_logo_image,id:'5'}

];

export const seatingData = [
  
    "1"
  ,
  
     "2"
  ,
  
     "3"
  ,
  
     "4"
  ,
  
    "5"
  ,
  
    "6"
  
];

export const commonNavigation = name => {
  return {
    title: name,
    headerStyle: {
      backgroundColor: "#56CCF2",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#ffffff"
    }
  };
};

export const isEmpty = values => {
  let isEmptys = false;
  Object.entries(values).map(([key, value]) => {
    if (key === "image" && value === null) {
      isEmptys = true;
    } else {
      if (value.length === 0) {
        isEmptys = true;
      }
    }
  });

  return isEmptys;
};

export const showAlert = name =>
  Alert.alert(
    "Error",
    name,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );

export const pickImages = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    multiple: true,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (!result.cancelled) {
    return result.uri;
  } else {
    return null;
  }
};

export const checkImageStatus = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};
