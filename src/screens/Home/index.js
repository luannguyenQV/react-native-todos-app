import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddTodoButton from "./components/AddTodoButton";
import Filter from "./components/Filter";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search />
        <Filter />
        <TodoList />
        <AddTodoButton />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
