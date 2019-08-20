import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TodoItem from "../TodoItem";

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={(item) => `${item._id}`}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#f4f4f4",
          }}
        />
      )}
    />
  );
};

export default TodoList;
