import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MateriallconsIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ICON_COLOR, MONTHS} from '../../utility/ConstVaribales';

const HomeScreen = ({navigation}) => {
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
    menuArea: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.07,
    },
    paddinggHorizontal: {
      paddingHorizontal: SCREEN_WIDTH * 0.075,
    },

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  const day = currentDate
    .toLocaleDateString('en-US', {weekday: 'long'})
    .toUpperCase();
  const date = currentDate.getDate();
  const month = MONTHS[currentDate.getMonth()];

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
      <View
        style={[TM.w100, TM.h100, TM.bgMain, css.paddinggHorizontal, TM.pt1]}>
        <View style={[TM.flexDirRow, TM.justifySpaceBetween, TM.h7]}>
          <View style={[TM.flexDirCol]}>
            <View style={[]}>
              <Text style={[TM.fMain1, TM.txtAlignLeft]}>
                {day.split(',')[0]}, {date.toString().padStart(2, '0')}, {month}
              </Text>
            </View>
            <View style={[TM.mt2]}>
              <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
                Today
              </Text>
            </View>
          </View>
          <View style={[TM.flexDirCol]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Clinic')}
              style={[TM.flexDirRowReverse, TM.mt10, TM.p1]}>
              <FontAwesome5Icon name="bell" size={30} color={ICON_COLOR} />
              {/* <Text style={[TM.fRed, TM.f14, TM.fBold]}>1</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        {/* image */}
        <View style={[styles.shadow, TM.mt2]}>
          <ImageBackground
            source={require('../../assets/img/home.jpg')}
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
            <Text style={[TM.positionAbsolute, TM.fBold, TM.f27, styles.baby]}>
              Emma
            </Text>

            <Text
              style={[TM.positionAbsolute, TM.fBold, TM.f33, styles.yearNum]}>
              3
            </Text>
            <Text style={[TM.positionAbsolute, TM.fBold, TM.f22, styles.year]}>
              Years
            </Text>

            <Text
              style={[TM.positionAbsolute, TM.fBold, TM.f33, styles.monthNum]}>
              2
            </Text>
            <Text style={[TM.positionAbsolute, TM.fBold, TM.f22, styles.month]}>
              Months
            </Text>
          </ImageBackground>
        </View>

        <View
          style={[
            TM.mt5,
            TM.bgMain2,
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Clinic')}
            style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
            <View style={[TM.flexDirRow]}>
              <View style={[TM.justAlign, TM.ml3, TM.mr5]}>
                <AntDesign name="calendar" size={30} color={ICON_COLOR} />
              </View>

              <View style={[TM.justAlign, TM.ml3]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f18]}>Clinic</Text>
              </View>
            </View>
            <View style={[TM.justAlign, TM.ml3]}>
              <MateriallconsIcon
                name="arrow-forward-ios"
                size={30}
                color={ICON_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            TM.mt5,
            TM.bgMain2,
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Medical')}
            style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
            <View style={[TM.flexDirRow]}>
              <View style={[TM.justAlign, TM.ml3, TM.mr5]}>
                <FontAwesome5Icon
                  name="book-medical"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>

              <View style={[TM.justAlign, TM.ml3]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f18]}>Medical</Text>
              </View>
            </View>
            <View style={[TM.justAlign, TM.ml3]}>
              <MateriallconsIcon
                name="arrow-forward-ios"
                size={30}
                color={ICON_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            TM.mt5,
            TM.bgMain2,
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Vaccination')}
            style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
            <View style={[TM.flexDirRow]}>
              <View style={[TM.justAlign, TM.ml2, TM.mr5]}>
                <MateriallconsIcon
                  name="vaccines"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>

              <View style={[TM.justAlign]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f18]}>
                  Vaccination Record
                </Text>
              </View>
            </View>
            <View style={[TM.justAlign, TM.ml3]}>
              <MateriallconsIcon
                name="arrow-forward-ios"
                size={30}
                color={ICON_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            TM.mt5,
            TM.bgMain2,
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Clinic')}
            style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
            <View style={[TM.flexDirRow]}>
              <View style={[TM.justAlign, TM.ml3, TM.mr5]}>
                <AntDesign name="areachart" size={30} color={ICON_COLOR} />
              </View>

              <View style={[TM.justAlign, TM.ml3]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f18]}>Growth</Text>
              </View>
            </View>
            <View style={[TM.justAlign, TM.ml3]}>
              <MateriallconsIcon
                name="arrow-forward-ios"
                size={30}
                color={ICON_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
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
});

export default HomeScreen;
