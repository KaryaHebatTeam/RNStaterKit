import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Header from '../components/Header';

export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Todo List" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
