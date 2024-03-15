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

const ReduceStressScreen = () => {
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
            source={require('../../assets/img/reduce.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              6 ways to reduce your stress levels right now{' '}
            </Text>
          </View>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.mt5]}>
              Slow Down:
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Adjust your pace of life to reduce stress. Reassess your routine
              and prioritize tasks, allowing yourself and your baby more time
              and freedom.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Exercise: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Incorporate daily exercise, even if it's just a gentle walk.
              Exercise releases endorphins, lifting mood, and spending time
              outdoors can reduce stress. Bonus: fresh air may aid your baby's
              sleep.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>
              Write Things Down:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Acknowledge the challenges of caring for a baby by writing down
              worries. Create a daily gratitude list to focus on positives and
              boost confidence in parenting abilities.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Socialize: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Surround yourself with supportive friends and family who uplift
              your spirits and make you feel good about yourself.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Breathe: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Manage stress by practicing deep breathing exercises when feeling
              overwhelmed. Identify stress triggers and patterns to avoid
              reactions. Utilize meditation music for relaxation.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReduceStressScreen;
