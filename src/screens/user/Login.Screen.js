import React, {useState} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TM from '../../assets/them/AxTheme';

import MateriallconsIcon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    google: {
      width: SCREEN_WIDTH * 0.35,
      height: '80%',
    },
    send: {width: 40, height: 25},
    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign, TM.bgMain0]}>
        <View style={[TM.h10]} />
        <View>
          <Image
            source={require('../../assets/img/logo.png')}
            style={styles.logo}
          />
        </View>
        <View
          style={[
            TM.mt10,
            TM.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.4},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h2]} />
          <View style={[TM.h15]}>
            <Text style={[TM.fBlack, TM.f18, TM.fBold]}>
              Welcome back to KiddoGrow
            </Text>
          </View>
          {/* email */}
          <View style={[TM.h15, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <MateriallconsIcon name="email" size={30} color="black" />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="Enter your email"
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={[TM.h7]} />
          {/* password */}
          <View style={[TM.h15, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <MateriallconsIcon name="lock" size={30} color="black" />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={[TM.h8]} />
          <View style={[TM.h15, TM.flexDirRow]}>
            <TouchableOpacity
              style={[
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}
              onPress={() => navigation.navigate('Register')}>
              <Text style={[TM.fMain0, TM.f16]}>Forget password</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.h15, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[
                TM.bgMain7,
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.f15]}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {width: 145, height: 210},
});

export default LoginScreen;
