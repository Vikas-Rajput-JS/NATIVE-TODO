import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TaskItem from "./tasks";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const addTask = (values: string) => {
    if (values == "") {
      return;
    }
    let arr: any = [...tasks];
    arr.push({ title: values });
    setTasks(arr);
    setInputVal("");
  };

  const removeTasks = (index: number) => {
    let items = [...tasks];
    items.splice(index, 1);
    setTasks(items);
  };

  return (
    <View style={styles.container}>
      <View
        style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
      >
        <Text style={styles.mainText}>Sociality - Native TODO App</Text>
      </View>

      {tasks &&
        tasks?.map((item: any, index: number) => {
          return (
            <TaskItem
              removeTasks={removeTasks}
              key={index}
              id={index}
              title={item?.title}
            />
          );
        })}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TextInput
          placeholder="Enter Task Here"
          onChangeText={setInputVal}
          value={inputVal}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            addTask(inputVal);
          }}
        >
          <View
            style={{
              width: 30,
              marginRight: 10,
              backgroundColor: "yellow",
              display: "flex",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="plus" size={30} color="#900" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  mainText: {
    color: "red",
    fontSize: 24,
    fontFamily: "serif",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#007BFF",
    height: "8%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    marginRight: 1,
    marginLeft: 10,
  },
});
