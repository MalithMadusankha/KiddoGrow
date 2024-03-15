import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

const ImmunizationScreen = ({navigation}) => {
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
            source={require('../../assets/img/immunization.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Immunization</Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>At Birth:</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              BCG Vaccine: Protects against tuberculosis.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>2 Months Complete</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Hepatitis B Vaccine -1: Protects against hepatitis B virus.
            </Text>
            <Text style={[TM.fBlack]}>
              Polio Vaccine (OPV/IPV) -1: Protects against poliovirus.
            </Text>
            <Text style={[TM.fBlack]}>
              Pentavalent Vaccine (DTP-Hib-HepB) -1: Protects against
              diphtheria, tetanus, pertussis (whooping cough), Haemophilus
              influenzae type b (Hib), and hepatitis B.{' '}
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>4 Months Complete</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Hepatitis B Vaccine -2: Protects against hepatitis B virus.
            </Text>
            <Text style={[TM.fBlack]}>
              Polio Vaccine (OPV/IPV) -2: Protects against poliovirus.
            </Text>
            <Text style={[TM.fBlack]}>
              Pentavalent Vaccine (DTP-Hib-HepB)-2: Protects against diphtheria,
              tetanus, pertussis (whooping cough), Haemophilus influenzae type b
              (Hib), and hepatitis B.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>6 Months Complete</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Hepatitis B Vaccine -3: Protects against hepatitis B virus.
            </Text>
            <Text style={[TM.fBlack]}>
              Polio Vaccine (OPV/IPV) -3: Protects against poliovirus.
            </Text>
            <Text style={[TM.fBlack]}>
              Pentavalent Vaccine (DTP-Hib-HepB) -3: Protects against
              diphtheria, tetanus, pertussis (whooping cough), Haemophilus
              influenzae type b (Hib), and hepatitis B.{' '}
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>9 Months Complete</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Measles, Mumps, and Rubella (MMR) Vaccine: Protects against
              measles, mumps, and rubella (German measles).
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              18 Months Complete
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Polio Vaccine (OPV/IPV) -2: Protects against poliovirus.
            </Text>
            <Text style={[TM.fBlack]}>
              Pentavalent Vaccine (DTP-Hib-HepB) -2: Protects against
              diphtheria, tetanus, pertussis (whooping cough), Haemophilus
              influenzae type b (Hib), and hepatitis B.{' '}
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>3 Years Complete</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Measles, Mumps, and Rubella (MMR) Vaccine: Protects against
              measles, mumps, and rubella (German measles).
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>5 Years Complete </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Polio Vaccine (OPV/IPV) -2: Protects against poliovirus.
            </Text>
            <Text style={[TM.fBlack]}>D.T. - Diphtheria and tetanus. </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              14 Years Complete{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Rubella vaccine: The rubella vaccine protects against rubella.
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

export default ImmunizationScreen;
