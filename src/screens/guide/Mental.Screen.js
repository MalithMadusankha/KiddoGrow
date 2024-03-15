import React from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

const MentalScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    logo: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * 0.3,
    },
  };

  return (
    <SafeAreaView>
      <ScrollView style={[TM.w100, TM.h100, TM.bgWhite]}>
        <View style={[]}>
          <Image
            source={require('../../assets/img/mental.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Mental Health</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Postnatal depression (PND) is not the same as the 'baby blues'. It
              is a mental health condition that needs treatment, so it's
              important to ask for help.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>How common is it?</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Very common. More than 1 in every 10 new mothers experience
              postnatal depression within a year of giving birth. New fathers
              can get postnatal depression, too.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              What causes depression?
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Had mental health problems before, particularly depression.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Had mental health problems during your pregnancy.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              No close friends or family to support you a poor relationship with
              your partner.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Had a lot of stress in your life recently, such as a bereavement
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>had the baby blues.</Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              What are the symptoms of postnatal depression?
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              feelings of sadness and low mood that won't go away
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              lost interest in life and you're not enjoying the things you used
              to problems sleeping.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              difficulty concentrating and making decisions
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>poor appetite (not eating enough)</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              feeling very agitated or, alternatively, you can't be bothered
              with anything (apathy)
            </Text>
          </View>

          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>feelings of guilt and self-blame </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Had a lot of stress in your life recently, such as a bereavement
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>feelings of guilt and self-blame</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              thinking about, and even planning, suicide..
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MentalScreen;
