import React, {useEffect, useState} from 'react';
import {Image, Text, StyleSheet, View, Dimensions} from 'react-native';
import TM from '../assets/them/AxTheme';

const WelcomeScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const [dimensions, setDimensions] = useState({width: 10, height: 15});
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDimensions({width: 50, height: 60});
    }, 400);
    setTimeout(() => {
      setDimensions({width: 70, height: 90});
    }, 600);
    setTimeout(() => {
      setDimensions({width: 90, height: 120});
    }, 800);
    setTimeout(() => {
      setDimensions({width: 100, height: 135});
    }, 900);
    setTimeout(() => {
      setDimensions({width: 110, height: 150});
    }, 1000);
    setTimeout(() => {
      setDimensions({width: 120, height: 165});
    }, 1100);
    setTimeout(() => {
      setDimensions({width: 130, height: 180});
    }, 1200);
    setTimeout(() => {
      setDimensions({width: 140, height: 205});
    }, 1300);
    setTimeout(() => {
      setDimensions({width: 145, height: 210});
    }, 1400);
    setTimeout(() => {
      setShowMsg(true);
    }, 2400);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3400);
  }, []); // eslint-disable-line

  return (
    <View style={[TM.container, TM.bgMain0, TM.w100, TM.h100]}>
      <Image source={require('../assets/img/logo.png')} style={dimensions} />
      {showMsg ? (
        <View
          style={[
            TM.mt10,
            TM.bgMain1,
            {width: SCREEN_WIDTH * 0.8},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <Text style={[TM.fBlack, TM.f18]}>KiddoGrow Welcome !!!</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  cardSpace: {
    height: 30,
  },
});

export default WelcomeScreen;
