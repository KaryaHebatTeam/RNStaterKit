import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
