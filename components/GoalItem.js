import { View, Text, Pressable, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalContainer}>
      <Pressable
        style={({ pressed }) => pressed && pressed.StyleSheet}
        onPress={props.onDeleteGoal.bind(this, props.goalId)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    borderRadius: 6,
    backgroundColor: "green",
    margin: 8,
    padding: 8,
  },
  goalText: {
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
});
