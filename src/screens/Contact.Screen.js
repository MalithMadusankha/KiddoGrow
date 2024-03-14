import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import TM from '../assets/them/AxTheme';

import MateriallconsIcon from 'react-native-vector-icons/MaterialIcons';

const ContactScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    logo: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.4,
    },
    cardInfo: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.2,
    },
    cardForm: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.35,
      marginBottom: SCREEN_HEIGHT * 0.05,
    },
    menuArea: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.07,
    },
    paddinggHorizontal: {
      paddingHorizontal: SCREEN_WIDTH * 0.075,
    },
    margineHorizontal: {
      marginHorizontal: SCREEN_WIDTH * 0.075,
    },
    paddingVertical: {marginVertical: SCREEN_HEIGHT * 0.01},

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  const greetingHandler = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }
  };

  useEffect(() => {
    greetingHandler();
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateDate, 10 * 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={[TM.w98, TM.h100, TM.bgMain, TM.pt1]}>
        <View
          style={[
            TM.flexDirRow,
            TM.justifySpaceBetween,
            TM.h5,
            css.paddinggHorizontal,
          ]}>
          <View style={[TM.flexDirCol]}>
            <View style={[TM.mt2]}>
              <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
                Contact
              </Text>
            </View>
          </View>
        </View>
        {/* image */}
        <View style={[styles.shadow, css.paddinggHorizontal]}>
          <ImageBackground
            source={require('../assets/img/home.jpg')}
            style={[
              css.logo,
              TM.borderRadius20,
              TM.overflowHidden,
              styles.shadow,
            ]}>
            <Text
              style={[TM.positionAbsolute, TM.fBold, TM.f18, styles.greeting]}>
              {greeting}
            </Text>
          </ImageBackground>
        </View>
        {/* Contact Info */}
        <View
          style={[
            TM.mt5,
            TM.bgWhite,
            TM.p4,
            TM.borderRadius20,
            styles.shadow,
            css.margineHorizontal,
            css.cardInfo,
          ]}>
          <View style={[TM.h1]} />

          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              KiddoGrow (pvt) Ltd
            </Text>
          </View>
          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              No 245
            </Text>
          </View>
          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              Kaduwela Road
            </Text>
          </View>
          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              Malabe
            </Text>
          </View>
          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              0777456789
            </Text>
          </View>
          <View style={[TM.h16]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              contact@kiddogrow.lk
            </Text>
          </View>
        </View>

        {/* Contact form */}
        <View
          style={[
            TM.mt5,
            TM.bgMain0,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
            styles.shadow,
            css.margineHorizontal,
            css.cardForm,
          ]}>
          <View style={[TM.h2]} />
          <View style={[TM.h15]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold]}>Contact Us</Text>
          </View>
          {/* email */}
          <View style={[TM.h15, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <MateriallconsIcon name="email" size={30} color="black" />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="Enter your email"
              // onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={[TM.h7]} />
          {/* message */}
          <View style={[TM.h30, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <MateriallconsIcon name="description" size={30} color="black" />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="Type your message"
              multiline={true}
              numberOfLines={4}
              // onChangeText={text => setMessage(text)}
            />
          </View>
          <View style={[TM.h10]} />

          <View style={[TM.h15, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[
                TM.bgMain7,
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.f15]}> Send Email </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  notification: {
    height: 30,
    width: 40,
  },
  greeting: {
    top: 16,
    left: 16,
    color: 'white',
  },
  baby: {
    top: 50,
    left: 16,
    color: 'white',
  },
  yearNum: {
    bottom: 50,
    left: 16,
    color: 'white',
  },
  year: {
    bottom: 20,
    left: 16,
    color: 'white',
  },
  monthNum: {
    bottom: 50,
    right: 16,
    color: 'white',
  },
  month: {
    bottom: 20,
    right: 16,
    color: 'white',
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  sendI: {width: 40, height: 25},
});

export default ContactScreen;
