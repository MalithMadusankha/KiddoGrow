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
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import TM from '../assets/them/AxTheme';
import {ICON_COLOR} from '../utility/ConstVaribales';

const ChatScreen = ({navigation}) => {
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
        style={[TM.w100, TM.h92, TM.bgMain, css.paddinggHorizontal, TM.pt1]}>
        <View style={[{flex: 1}, TM.h10, TM.justifyCenter]}>
          <Text style={[TM.fBlack, TM.txtAlignLeft, TM.fBold, TM.f18]}>
            Chat Bot
          </Text>
        </View>

        <View style={[TM.mt5, TM.alignItemCenter, TM.flexDirRow]}>
          <Image
            style={styles.logo}
            source={require('../assets/icons/bot.jpg')}
          />
          <View style={[TM.mx5, TM.bgMain1, styles.chatBot]}>
            <Text style={[TM.fBold, TM.fMain0, TM.f18]}>Hi..</Text>
          </View>
        </View>
        <View style={[TM.mt5, TM.alignItemCenter, TM.flexDirRowReverse]}>
          <Image
            style={styles.logo}
            source={require('../assets/icons/child.png')}
          />
          <View style={[TM.mx5, TM.bgMain1, styles.chatUser]}>
            <Text style={[TM.fBold, TM.fGreen, TM.f18]}>
              Can i know about vaccine ?
            </Text>
          </View>
        </View>
        <View style={[TM.mb10]} />
      </ScrollView>
      <KeyboardAvoidingView style={[TM.bgMain]} behavior="padding" enabled>
        <View
          style={[
            TM.w100,
            TM.h8,
            TM.flexDirRow,
            TM.justifySpaceAround,
            styles.px,
          ]}>
          <View style={[TM.w78, TM.pt1]}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Type your message..."
              style={styles.input}
            />
          </View>
          <View style={[TM.w15]}>
            <TouchableOpacity style={[TM.bgWhite, styles.icon, TM.justAlign]}>
              <FontAwesomeIcon size={25} color={ICON_COLOR} name="send" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  px: {
    paddingLeft: 7,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  icon: {width: 50, height: 50, borderRadius: 40},
  chatBot: {
    borderWidth: 1.5,
    borderColor: '#2DEBE0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  chatUser: {
    borderWidth: 1.5,
    borderColor: '#2DEB40',
    backgroundColor: '#3eec4f27',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  input: {
    backgroundColor: 'white', // Adjust background color
    color: 'black', // Adjust text color
    padding: 10, // Add padding
    borderRadius: 15, // Add border radius
    fontSize: 16, // Adjust font size
    minHeight: 40, // Set a minimum height
    paddingVertical: Platform.OS === 'android' ? 0 : undefined,
  },
});

export default ChatScreen;
