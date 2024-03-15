import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

import MateriallconsIcon from 'react-native-vector-icons/MaterialIcons';
import {ICON_COLOR} from '../../utility/ConstVaribales';

const BathingScreen = ({navigation}) => {
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
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * 0.3,
    },
    cardInfo: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.35,
    },
    cardImmun: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.11,
    },
    cardHealth: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.22,
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

    marginBottom: {marginBottom: SCREEN_HEIGHT * 0.06},

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
      <ScrollView style={[TM.w100, TM.h100, TM.bgWhite]}>
        <View style={[]}>
          <Image
            source={require('../../assets/img/bathing.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Bathing your Newborn
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Gather Supplies:</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Towel, baby soap, washcloth, clean diaper, and clothes.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Prepare Bath Area:
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Warm room, baby tub or sink with warm water.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Undress Baby: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>Keep covered for warmth.</Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Prepare Bath Area:
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Warm room, baby tub or sink with warm water.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Support Baby: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>Always support head and neck.</Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Wash: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Use mild soap and washcloth, start with face, then body.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Dry: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Pat dry with towel, paying attention to creases.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Diaper and Dress:</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>Lay down, diaper, and dress. </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Clean Up: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>Empty bath, clean supplies. </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Bond: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>Cuddle and comfort your baby. </Text>
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
  pl: {paddingLeft: 10},
});

export default BathingScreen;
