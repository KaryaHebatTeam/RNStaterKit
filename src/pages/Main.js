import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class Main extends Component {
  _goTodoList () {
    this.props.navigator.push({
      id: 'todo-list'
    })
  }

  render({ onPress } = this.props) {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button title="Explore" onPress={() => this._goTodoList()}></Button>
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
});
