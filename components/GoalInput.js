import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [val, setVal] = useState("");

  function goalInputHandler(enteredText) {
    setVal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(val);
    setVal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={val}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onEndGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    padding: 16,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
