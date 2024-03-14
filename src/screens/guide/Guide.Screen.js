import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

import MateriallconsIcon from 'react-native-vector-icons/MaterialIcons';
import {ICON_COLOR} from '../../utility/ConstVaribales';

const GuideScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');
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
    cardInfo: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.35,
    },
    cardImmun: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.11,
    },
    cardHealth: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.22,
    },
    menuArea: {
      width: SCREEN_WIDTH * 0.85,
      height: SCREEN_HEIGHT * 0.07,
    },
    paddinggHorizontal: {
      paddingHorizontal: SCREEN_WIDTH * 0.075,
    },
    margineHorizontal: {
      marginHorizontal: SCREEN_WIDTH * 0.075,
    },
    paddingVertical: {marginVertical: SCREEN_HEIGHT * 0.01},

    marginBottom: {marginBottom: SCREEN_HEIGHT * 0.06},

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  const greetingHandler = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }
  };

  useEffect(() => {
    greetingHandler();
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateDate, 10 * 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={[TM.w98, TM.h100, TM.bgMain, TM.pt1]}>
        <View
          style={[
            TM.flexDirRow,
            TM.justifySpaceBetween,
            TM.h3,
            css.paddinggHorizontal,
          ]}>
          <View style={[TM.flexDirCol]}>
            <View style={[TM.mt2]}>
              <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
                Guide
              </Text>
            </View>
          </View>
        </View>

        {/* newborn */}
        <View
          style={[
            TM.mt5,
            TM.bgMain1,
            TM.p4,
            TM.justAlign,
            TM.borderRadius20,
            styles.shadow,
            css.margineHorizontal,
            css.cardInfo,
          ]}>
          <View style={[TM.h13]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              Newborn
            </Text>
          </View>
          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain2, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Baby Care Basics
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain2, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Caring of umbilical Code
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain2, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Bathing your newborn
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Immunization */}
        <View
          style={[
            TM.mt5,
            TM.bgMain1,
            TM.p4,
            TM.justAlign,
            TM.borderRadius20,
            styles.shadow,
            css.margineHorizontal,
            css.cardImmun,
          ]}>
          <View
            style={[TM.h100, TM.bgMain5, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Immunization
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mental health */}
        <View
          style={[
            TM.mt5,
            TM.bgMain1,
            TM.p4,
            TM.justAlign,
            TM.borderRadius20,
            styles.shadow,
            css.margineHorizontal,
            css.cardHealth,
          ]}>
          <View style={[TM.h15]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              Mental health
            </Text>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.h40, TM.bgMain6, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Postnatal depression
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.h40, TM.bgMain6, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Manage Stress
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Nutrition */}
        <View
          style={[
            TM.mt5,
            TM.bgMain1,
            TM.p4,
            TM.justAlign,
            TM.borderRadius20,
            styles.shadow,
            css.margineHorizontal,
            css.cardInfo,
            css.marginBottom,
          ]}>
          <View style={[TM.h13]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold, TM.txtAlignLeft]}>
              Nutrition
            </Text>
          </View>
          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain7, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Breast Feeding
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain7, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    6-12 Months Baby Feeding
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.h26, TM.bgMain7, TM.w95, TM.borderRadius15, TM.px3]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vaccination')}
              style={[TM.h100, TM.flexDirRow, TM.justifySpaceBetween, TM.w100]}>
              <View style={[TM.flexDirRow]}>
                <View style={[TM.justAlign]}>
                  <Text style={[TM.fBlack, TM.fBold, TM.f18, styles.pl]}>
                    Feeding Tips
                  </Text>
                </View>
              </View>
              <View style={[TM.justAlign, TM.ml3]}>
                <MateriallconsIcon
                  name="arrow-forward-ios"
                  size={30}
                  color={ICON_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  notification: {
    height: 30,
    width: 40,
  },
  greeting: {
    top: 16,
    left: 16,
    color: 'white',
  },
  baby: {
    top: 50,
    left: 16,
    color: 'white',
  },
  yearNum: {
    bottom: 50,
    left: 16,
    color: 'white',
  },
  year: {
    bottom: 20,
    left: 16,
    color: 'white',
  },
  monthNum: {
    bottom: 50,
    right: 16,
    color: 'white',
  },
  month: {
    bottom: 20,
    right: 16,
    color: 'white',
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  sendI: {width: 40, height: 25},
  pl: {paddingLeft: 10},
});

export default GuideScreen;
