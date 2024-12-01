import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function TaskItem({
  title,
  removeTasks,
  id,
}: {
  title: string;
  removeTasks: any;
  id: number;
}) {
  return (
    <TouchableOpacity style={styles.mainDiv}>
      <View style={styles.box}>
        <Text style={{ margin: 10, color: "white", fontSize: 20 }}>
          {title?.toLocaleUpperCase()}
        </Text>
        <Icon
          onPress={() => {
            removeTasks(id);
          }}
          name="minus"
          size={30}
          color="#900"
          style={{ marginRight: 20 }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#007BFF",
    height: "8%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  input: {
    width: 90,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    marginRight: 10,
  },
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
