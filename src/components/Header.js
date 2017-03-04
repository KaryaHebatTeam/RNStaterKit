import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#2980b9'
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  }
});
