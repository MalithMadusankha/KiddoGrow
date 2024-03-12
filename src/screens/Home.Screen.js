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
} from 'react-native';
import TM from '../assets/them/AxTheme';

const HomeScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    logo: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.45,
    },
    paddinggHorizontal: {
      paddingHorizontal: SCREEN_WIDTH * 0.075,
    },

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  return (
    <SafeAreaView>
      <View
        style={[TM.w100, TM.h100, TM.bgMain3, css.paddinggHorizontal, TM.pt1]}>
        <View style={[TM.flexDirRow, TM.justifySpaceBetween, TM.alignCenter]}>
          <View style={[TM.flexDirCol]}>
            <View style={[]}>
              <Text style={[TM.fMain1, TM.txtAlignLeft]}>
                THURSDAY, 08, FEBRUARY
              </Text>
            </View>
            <View style={[]}>
              <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
                Today
              </Text>
            </View>
          </View>
          <View style={[TM.flexDirCol]}>
            <TouchableOpacity style={[TM.flexDirRowReverse, TM.mt5]}>
              <Image
                source={require('../assets/icons/notification.png')}
                style={[styles.notification]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.shadow, TM.mt2]}>
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
              Good Morning
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
});

export default HomeScreen;
