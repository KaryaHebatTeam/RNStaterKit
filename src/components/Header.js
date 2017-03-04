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
    height: 48,
    backgroundColor: '#2980b9',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  }
});
