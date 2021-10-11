import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop :0,
    backgroundColor: "#fff"
  },
  addContainer: {
    flex: 1,
    padding: 20,
    marginTop :0,
    backgroundColor: "#F4F7FB"
  },
  titleText: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    marginTop :5,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#003e59",
    padding: 13,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 6
  },
  inputTextStyle: {
    color : 'black',
    fontSize : 15,
    flex :0.8,
    fontFamily : 'Roboto-Medium',
    justifyContent : 'flex-end'
  } ,
  inputStyle :{
    alignItems : 'center',
     borderRadius : 7,
     marginBottom : 10,
     marginTop :20,
     height : 60,
     padding :20,
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
  heading: {
    fontSize: 28,
    marginTop:20,
   // fontFamily: "sans-serif",
    fontWeight: "bold",
    fontFamily : 'Roboto-Bold',
    color: "#000000"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  upload: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginTop :20,
   

    backgroundColor : 'white',
  
  },
  imageUpload: {
    alignItems: "flex-start",
    justifyContent: 'flex-end',
    width: 200,
    height: 200,
  
  
    padding: 10,
    marginBottom: 10,
    borderColor: "#003e59"
  }
});
