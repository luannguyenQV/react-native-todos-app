import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "react-navigation-hooks";

const TodoItem = () => {
  const { navigate } = useNavigation();

  const navigateToAddTodo = useCallback(() => {
    navigate("ADD_TODO_SCREEN");
  }, [navigate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToAddTodo}>
        <Ionicons size={50} name="ios-add-circle" color="#FF5A5F" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
  },
});
