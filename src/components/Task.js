import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.task}>{this.props.task}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    borderRadius: 5,
  },
  task: {
    color: '#333',
    fontSize: 14,
  }
});
