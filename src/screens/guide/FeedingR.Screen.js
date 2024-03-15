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

const FeedingRScreen = () => {
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
            source={require('../../assets/img/responsive.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Responsive Feeding
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Pay attention to your baby's hunger and fullness cues. Feed them
              when they show signs of hunger and stop when they indicate they're
              full.
            </Text>
          </View>

          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.mt5]}>
              Positioning:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Hold your baby comfortably during feedings. Ensure their head is
              slightly elevated to prevent choking and allow for easy
              swallowing.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Latch: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              If breastfeeding, ensure a proper latch to prevent nipple pain and
              ensure effective milk transfer. If bottle-feeding, hold the bottle
              at a slight angle to prevent air ingestion.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Introduce Variety:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Offer a variety of flavors and textures as your baby grows. Start
              with single-ingredient purees and progress to mashed and finger
              foods.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Safety: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Always supervise your baby during feedings to prevent choking. Cut
              food into small, manageable pieces and avoid giving hard or small
              items.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Hydration: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Offer water in a sippy cup during meals, especially when
              introducing solid foods, to keep your baby hydrated.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Routine: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Establish a feeding routine but remain flexible to accommodate
              your baby's changing needs and preferences.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Consult Professionals:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              If you have concerns about your baby's feeding habits or
              nutrition, seek advice from a pediatrician or a lactation
              consultant.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedingRScreen;
