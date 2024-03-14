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

const VaccinationScreen = ({navigation}) => {
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
      height: SCREEN_HEIGHT * 0.26,
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
        <View style={[TM.h10, TM.justifyCenter]}>
          <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
            Vaccination Card
          </Text>
        </View>
        <View
          style={[
            TM.mt5,
            COLOR_ARRAY[6],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Age</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>At Birth</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Type of Vaccine</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>B.C.G</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Batch No.</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>BN0458</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Adverse effect of immunization
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>No</Text>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
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
            COLOR_ARRAY[4],
            css.menuArea,
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Age</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>At Birth</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Type of Vaccine</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>B.C.G</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Date</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>01/02/2024</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>Batch No.</Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>BN0458</Text>
          </View>
          <View style={[TM.h15, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
            <Text style={[TM.fBold, TM.fMain1, TM.f18]}>
              Adverse effect of immunization
            </Text>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>No</Text>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.h20, TM.w95, TM.flexDirRow, TM.justifySpaceBetween]}>
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

export default VaccinationScreen;
