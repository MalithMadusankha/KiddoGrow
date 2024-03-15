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

const BreastScreen = () => {
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
            source={require('../../assets/img/breast.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Breast Feeding</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Breastfeeding provides vital nutrients, antibodies, and bonding
              between mother and baby, reducing infection risks. Recommended by
              health authorities for optimal infant health up to 2 years.
            </Text>
          </View>

          <View>
            <Text style={[TM.fMain0, TM.fBold, TM.f15, TM.mt5]}>
              Tips for Breast Feeding
            </Text>
          </View>

          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.mt5]}>
              Positioning:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Ensure a comfortable position for both you and your baby. Cradle,
              cross-cradle, football hold, or lying down positions are common
              options.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Frequency: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Breastfeed your baby frequently, aiming for 8-12 feedings in a
              24-hour period. Follow your baby's hunger cues, such as rooting,
              sucking motions, or hand-to-mouth movements.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Emptying the Breast:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Allow your baby to feed from one breast until it feels soft before
              offering the other breast. This ensures they receive hindmilk,
              which is rich in fat and important for growth.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Comfort: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Use lanolin cream or breast milk to soothe sore nipples. Air-dry
              nipples after feeding and wear loose-fitting clothes to prevent
              irritation.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Hydration and Nutrition:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Stay hydrated by drinking plenty of fluids and maintaining a
              balanced diet rich in nutrients. Breastfeeding burns calories, so
              consume extra calories as needed.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BreastScreen;
