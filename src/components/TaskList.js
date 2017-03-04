import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Task from '../components/Task';
import tasks from '../data/tasks.json';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.tasks.map((task, index) => {
          return (<Task key={index} task={task.task} />)
        })} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
});
