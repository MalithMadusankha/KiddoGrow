import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, SafeAreaView, ScrollView} from 'react-native';

import TM from '../../assets/them/AxTheme';
import {COLOR_ARRAY} from '../../utility/ConstVaribales';

const MedicalScreen = ({navigation}) => {
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
      height: SCREEN_HEIGHT * 0.3,
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
            Medical
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
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer ID
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01</Text>
          </View>
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h23, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer Name
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Samantha Weerakoon
            </Text>
          </View>
          <View style={[TM.h49, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Note</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Baby thriving, meeting milestones. Vaccines up-to-date. No issues
              observed.
            </Text>
          </View>
        </View>
        <View
          style={[
            TM.mt5,
            COLOR_ARRAY[2],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer ID
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01</Text>
          </View>
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h23, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer Name
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Samantha Weerakoon
            </Text>
          </View>
          <View style={[TM.h40, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Note</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Baby thriving, meeting milestones. Vaccines up-to-date. No issues
              observed.
            </Text>
          </View>
        </View>
        <View
          style={[
            TM.mt5,
            COLOR_ARRAY[5],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer ID
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01</Text>
          </View>
          <View style={[TM.h14, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h23, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Medical Officer Name
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Samantha Weerakoon
            </Text>
          </View>
          <View style={[TM.h40, TM.w95]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Note</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>
              Baby thriving, meeting milestones. Vaccines up-to-date. No issues
              observed.
            </Text>
          </View>
        </View>
        <View style={[TM.mb10]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalScreen;
