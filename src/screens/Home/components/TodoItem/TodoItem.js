import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "react-navigation-hooks";
import Swipe from "./Swipte";
import { timeFromNow } from "../../../../utils/dateTimeFormat";

const TodoItem = ({ item, toggleTodo, deleteTodo }) => {
  const { navigate } = useNavigation();

  const onDeleteItem = useCallback(() => {
    deleteTodo({ id: item._id });
  }, [deleteTodo, item]);

  const onEditItem = useCallback(() => {
    navigate("ADD_TODO_SCREEN", { item });
  }, [navigate, item]);

  const onToggleTodo = useCallback(() => {
    toggleTodo({ id: item._id });
  }, [toggleTodo, item]);

  return (
    <Swipe onDeleteItem={onDeleteItem} onEditItem={onEditItem}>
      <View style={styles.container}>
        <View style={styles.deleteContainer}>
          <TouchableOpacity onPress={onToggleTodo}>
            <Ionicons
              size={30}
              name={
                item.isComplete
                  ? "ios-checkmark-circle"
                  : "ios-radio-button-off"
              }
              color="#FF5A5F"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={onToggleTodo}>
            <Text
              h4
              style={[
                item.isComplete && { textDecorationLine: "line-through" },
              ]}>
              {item.title}
            </Text>
            <Text style={{ color: "#767676" }}>
              {timeFromNow(item.updatedAt)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipe>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    position: "relative",
  },
  deleteContainer: {
    width: 40,
    justifyContent: "center",
  },
  actionContainer: {
    position: "absolute",
    bottom: 2,
    right: 0,
    flexDirection: "row",
  },
  actionItem: {
    width: 30,
    height: 30,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginLeft: 10,
  },
});
