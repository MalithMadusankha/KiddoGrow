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

const BabyCareScreen = ({navigation}) => {
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
            source={require('../../assets/img/babyCare.jpg')}
            style={[css.logo]}
          />
        </View>
        <View style={[TM.px6, TM.mb10]}>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Baby Care Basics</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Caring for your newborn is wonderful, exhausting, and full of
              emotion. Here we'll give you tips on how to survive the first week
              and beyond as you make your way into motherhood.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Skin</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Your baby's skin is incredibly sensitive. The first weeks after
              birth you might notice baby ache and dry spots. Once a day inspect
              your baby from top to bottom. Check her neck folds, behind the
              ears and under the arms and the labia. Often some dirt or dead
              skin cells accumulate in skin folds, leading to candida if not
              cleaned.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Newborn genitals</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              You may notice that your newborn's genitals are swollen and red.
              There may be a clear, white, or slightly bloody discharge. All
              this is normal in the first few weeks as a result of exposure to
              hormones during pregnancy. If these symptoms don't clear up after
              the first six weeks, mention them to your healthcare provider at
              the next checkup.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>Vaginal area</Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              All a baby girl's vaginal area needs are a wipe with a moist,
              clean cloth during nappy changes and bathing. Take care to wipe
              from front to back to avoid transferring bacteria from your baby's
              bottom to her vagina.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BabyCareScreen;
