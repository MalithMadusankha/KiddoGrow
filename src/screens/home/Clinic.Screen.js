import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import TM from '../../assets/them/AxTheme';
import {COLOR_ARRAY} from '../../utility/ConstVaribales';

const ClinicScreen = ({navigation}) => {
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
      height: SCREEN_HEIGHT * 0.4,
    },
    menuArea: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.2,
    },
    paddinggHorizontal: {
      paddingHorizontal: SCREEN_WIDTH * 0.075,
    },

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={[TM.w100, TM.h100, TM.bgMain, css.paddinggHorizontal, TM.pt1]}>
        <View style={[TM.h5, TM.justifyCenter]}>
          <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
            Clinic
          </Text>
        </View>
        <View
          style={[
            TM.mt5,
            COLOR_ARRAY[0],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Appoinment ID</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01</Text>
          </View>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Time</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01.00 PM</Text>
          </View>
          <View style={TM.h10} />
          <View style={[TM.h30, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <TouchableOpacity
              style={[
                TM.bgGreen,
                TM.px6,
                TM.py2,
                TM.borderRadius10,
                TM.justAlign,
              ]}>
              <Text style={[TM.fBold, TM.fMain1, TM.f18, TM.fWhite]}>
                Approve
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                TM.bgRed1,
                TM.px6,
                TM.py2,
                TM.borderRadius10,
                TM.justAlign,
              ]}>
              <Text style={[TM.fBold, TM.fMain1, TM.f18, TM.fWhite]}>
                Dicline
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            TM.mt5,
            COLOR_ARRAY[1],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Appoinment ID</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01</Text>
          </View>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Time</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01.00 PM</Text>
          </View>
          <View style={TM.h10} />
          <View style={[TM.h30, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <TouchableOpacity
              style={[
                TM.bgGreen,
                TM.px6,
                TM.py2,
                TM.borderRadius10,
                TM.justAlign,
              ]}>
              <Text style={[TM.fBold, TM.fMain1, TM.f18, TM.fWhite]}>
                Approve
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                TM.bgRed1,
                TM.px6,
                TM.py2,
                TM.borderRadius10,
                TM.justAlign,
              ]}>
              <Text style={[TM.fBold, TM.fMain1, TM.f18, TM.fWhite]}>
                Dicline
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[TM.mb10]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClinicScreen;
