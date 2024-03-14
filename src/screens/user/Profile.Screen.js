import React, {useEffect, useState} from 'react';
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

const ProfileScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    gender: {
      width: SCREEN_WIDTH * 0.35,
    },
    profile: {
      width: SCREEN_WIDTH * 0.35,
      height: SCREEN_WIDTH * 0.35,
    },
    name: {width: 30, height: 30},
    birth: {width: 30, height: 30},
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(1);

  return (
    <SafeAreaView>
      <View style={[TM.w100, TM.h100, TM.justAlign, TM.bgMain]}>
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
            styles.backBtn,
          ]}>
          <View style={[TM.flexDirRow]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ආපසු</Text>
            <Image
              style={[styles.next]}
              source={require('../../assets/icons/back-ic.png')}
            />
          </View>
        </TouchableOpacity>

        <View
          style={[
            TM.mt10,
            TM.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.7},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h5]}>
            <Text style={[TM.fBlack, TM.f18]}>දරුවාගේ තොරතුරු</Text>
          </View>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={css.profile}
          />
          {/* name */}
          <View style={[TM.h10, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <Image
                style={[css.name]}
                source={require('../../assets/icons/profile-ic.png')}
              />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="නම"
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={[TM.h5]} />
          {/* birthday */}
          <View style={[TM.h10, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <Image
                style={[css.birth]}
                source={require('../../assets/icons/birthth-date-ic.png')}
              />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="උපන් දිනය"
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View style={[TM.h5]} />
          {/* age */}
          <View style={[TM.h10, TM.flexDirRow]}>
            <View
              style={[
                TM.justifyCenter,
                TM.px3,
                TM.bgWhite,
                TM.borderRadiusStart15,
              ]}>
              <Image
                style={[css.birth]}
                source={require('../../assets/icons/age-ic.png')}
              />
            </View>
            <TextInput
              style={[TM.bgWhite, TM.fBlack, css.input, TM.borderRadiusEnd15]}
              placeholderTextColor="black"
              placeholder="වයස"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={[TM.h5]} />
          {/* age */}
          <View style={[TM.h10, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => setGender(1)}
              style={[
                gender === 1 ? TM.bgLogin : TM.bgWhite,
                TM.fBlack,
                css.gender,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mr2,
              ]}>
              <Text style={[TM.fBlack, TM.f15]}> පිරිමි </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender(0)}
              style={[
                gender === 0 ? TM.bgLogin : TM.bgWhite,
                TM.fBlack,
                css.gender,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,

                TM.ml2,
              ]}>
              <Text style={[TM.fBlack, TM.f15]}> ගැහැණු </Text>
            </TouchableOpacity>
          </View>

          <View style={[TM.h5]} />
          {/* submit */}
          <View style={[TM.h10, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[
                TM.bgGreen,
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.f15]}> ඇතුල් වන්න </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  next: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default ProfileScreen;
