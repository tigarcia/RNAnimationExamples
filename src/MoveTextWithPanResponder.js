import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Image,
  Easing
} from 'react-native';

export default class MoveTextWithPanResponder extends Component {
  constructor(props) {
    super(props);
    this._pos = new Animated.ValueXY();
    this._pan = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this._pos.setValue({x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        console.warn("RELEASE");
      }
    });
    // Animated.timing(this._pos, {
    //   toValue: {x: 100, y: 250},
    //   duration: 3000,
    //   ease: Easing.linear
    // }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Animated.View
          {...this._pan.panHandlers}
          style={this._pos.getLayout()}>
          <Text style={styles.instructions}>
            To get started, EDIT index.android.js
          </Text>
        </Animated.View>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
