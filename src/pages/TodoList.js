import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

import Header from '../components/Header';
import TaskList from '../components/TaskList';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header title="Todo List" />
        <TextInput
          style={styles.input}
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <TaskList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  input: {

  },
});
