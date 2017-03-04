/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import TodoList from './src/pages/TodoList';
import Main from './src/pages/Main';

var _navigator;

export default class RNStarterKit extends Component {
  _renderScene (route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'main':
        return (
          <Main navigator={navigator}/>
        );
      case 'todo-list':
        return (
          <TodoList navigator={navigator} />
        );
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ id: 'todo-list' }}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
      />
    );
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('RNStarterKit', () => RNStarterKit);
