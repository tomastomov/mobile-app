import { StyleSheet, Text, View, ScrollView, Keyboard } from 'react-native';
import { useState } from 'react'
import TaskInputField from './TaskInputField'
import TaskItem from './TaskItem'

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) {
      return;
    }
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (taskIndex) => {
    if (taskIndex == null) {
      return;
    }

    setTasks(tasks.filter((value, index) => index != taskIndex))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO List</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
