/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Spin from './src/Spin';
import MoveText from './src/MoveText';
import MoveTextWithPanResponder from './src/MoveTextWithPanResponder';

AppRegistry.registerComponent('animations', () =>  MoveText );
