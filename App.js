import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [goalList, setGoalList] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoalList((currentGoalList) => {
      return goalList.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onEndGoal={endGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteGoal={deleteGoalHandler}
                text={itemData.item.text}
                goalId={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
