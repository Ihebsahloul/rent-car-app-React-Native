
import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, COLORS, FONTS, SIZES } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const Onboarding = ({ navigation }) => {

    // Render

    return (
        
        <SafeAreaView style={styles.container}>
                <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
       
                <Image
                    source={images.homeBanner}
                    resizeMode="center"
                    style={{
                     
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={styles.titleTextStyle}>Rent a perfect car for any occasion</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, marginHorizontal : 20, textAlign: 'center', ...FONTS.body3 }}>It is never been easier to rent a car using an app. Low rates and quality services.</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '85%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("SignInScreen")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#FB8D41','#FF4500','#CD458F', '#21C3C8','']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Start !</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
            </View>
         </ScrollView>
        </SafeAreaView>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    titleTextStyle: {
        color: '#000000',
        fontSize:  35,
        alignContent : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems :'center',
        textAlign : 'center',
        textAlignVertical :'center',
        marginStart: 10,
        fontWeight : '600',
       // fontFamily : 'Test Calibre',
        fontFamily : Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
        marginTop : 0,
      
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
    }
});

export default Onboarding;
