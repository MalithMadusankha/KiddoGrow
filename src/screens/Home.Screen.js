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
      <View style={[TM.w100, TM.h100, TM.bgMain3, css.paddinggHorizontal]}>
        <View style={[TM.h4, TM.justifyCenter]}>
          <Text style={[TM.fMain1, TM.txtAlignLeft]}>
            THURSADAY, 08, FEBRURAY
          </Text>
        </View>
        <View style={[TM.h3, TM.justifyCenter]}>
          <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
            Today
          </Text>
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
            <Text style={styles.textOnImage}>Good Morning</Text>
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
  textOnImage: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
