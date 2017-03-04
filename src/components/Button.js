import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <Button onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2980b9',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 12,
  },
  text: {
    color: '#FFFFFF',
  }
});
