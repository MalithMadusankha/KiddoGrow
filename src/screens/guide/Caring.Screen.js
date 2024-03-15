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

const CaringScreen = ({navigation}) => {
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
            source={require('../../assets/img/caring.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Caring for your baby's umbilical cord stump
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              After your baby is born, her umbilical cord will be clamped and
              cut close to the body in a painless procedure, leaving an
              umbilical stump.
            </Text>
          </View>

          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Fold your baby's nappy below the stump so it's exposed to air and
              doesn't come in contact with urine. Avoid baths until the stump
              falls off.
            </Text>
          </View>

          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Keep the stump as clean and dry as possible for the time it takes
              to dry up and fall off - generally 10 to 21 days. It will leave a
              slightly raw belly button that may take a few more days to heal
              completely. (When the stump falls off, you may notice a little
              blood on the nappy, which is normal.)
            </Text>
          </View>

          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              In warm weather it's best to dress a newborn in just a nappy and
              loose T-shirt to let air circulate and aid the drying process.
              Avoid dressing your baby in bodysuit-style undershirts until the
              stump falls off.
            </Text>
          </View>

          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Ask your midwife or healthcare provider whether they recommend
              disinfecting the cord stump. Most no longer recommend this because
              research shows the stump heals faster without it. To keep the
              umbilical cord stump clean, simply give your baby a sponge bath.
            </Text>
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

export default CaringScreen;
