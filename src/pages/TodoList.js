import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

import Header from '../components/Header';
import TaskList from '../components/TaskList';
import dataTasks from '../data/tasks.json';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
      tasks: dataTasks,
    };

    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask() {
    let tasks = this.state.tasks;
    let id    = this.state.tasks.length + 1;

    tasks.push({
      id: id,
      task: this.state.newTask,
    });

    this.setState({
      tasks: tasks,
      newTask: ''
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header title="Todo List" />
        <View style={styles.form}>
          <TextInput
            onChangeText={(task) => this.setState({newTask: task})}
            value={this.state.newTask}
            style={styles.input}
          /> 
          <Button title="Add" style={styles.button} onPress={this.addNewTask}></Button>
        </View>
        <TaskList tasks={this.state.tasks} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  form: {
    flex: 1,
  },
});
