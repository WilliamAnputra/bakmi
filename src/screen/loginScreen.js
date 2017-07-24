import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class loginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Image
          source={require('../images/SplashScreen.png')}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={{ marginTop: 180 }}
          >
            <TextInput
              underlineColorAndroid={'transparent'}
              placeholderTextColor="#fff"
              placeholder="Nama Anda"
              style={styles.textInput}
            />
            <TextInput
              underlineColorAndroid={'transparent'}
              placeholder="No.HP Anda"
              placeholderTextColor="#fff"
              style={styles.textInput}
            />
            <Button
              buttonStyle={styles.button}
              textStyle={{ textAlign: 'center' }}
              title={'Lanjut ke menu'}
              onPress={() => {
                this.props.navigation.navigate('main');
              }}
            />
          </KeyboardAvoidingView>
        </Image>
      </View>
    );
  }
}

loginScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = {
  image: {
    width,
    height,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#bc2c39',
    borderRadius: 10,
    width: width / 2,
    alignSelf: 'center',
    marginTop: 30
  },
  textInput: {
    width: width / 1.3,
    fontSize: 14,
    alignSelf: 'center',
    paddingLeft: 5,
    marginTop: 10,
    color: '#fff',
    height: 50,
    backgroundColor: '#d8d8d8',
    borderRadius: 8
  }
};
