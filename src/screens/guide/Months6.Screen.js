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

const Months6Screen = () => {
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
              6-12 Month Baby Feeding
            </Text>
          </View>
          <View>
            <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.mt5]}>
              6 Months:{' '}
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Introduce iron-fortified cereals mixed with breast milk, formula,
              or water. Begin pureed fruits and vegetables like applesauce,
              bananas, and sweet potatoes. Start with one meal per day,
              increasing gradually.
            </Text>
          </View>
          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>7-8 Months: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Continue offering iron-fortified cereals, pureed fruits, and
              vegetables. Introduce protein-rich foods like pureed meats,
              poultry, fish, tofu, beans, or lentils.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Begin offering soft finger foods or finely chopped foods that your
              baby can pick up and feed themselves, encouraging self-feeding
              skills.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>9-10 Months: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Expand your baby's diet to include a wider variety of fruits,
              vegetables, grains, and protein-rich foods.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Offer small, manageable pieces of food for self-feeding, and
              encourage your baby to explore different tastes and textures.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Increase the frequency of solid food meals to two or three times
              per day, alongside continued breastfeeding or formula feeding on
              demand.
            </Text>
          </View>

          <View style={[TM.mt5]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f15]}>11-12 Months: </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Continue offering a balanced diet that includes a variety of
              fruits, vegetables, grains, protein-rich foods, and dairy
              products.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Gradually transition to family foods by offering finely chopped or
              minced versions of the same foods that the rest of the family
              eats.
            </Text>
          </View>
          <View style={[TM.mt3]}>
            <Text style={[TM.fBlack]}>
              Encourage the use of a sippy cup for water during meals,
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Months6Screen;
