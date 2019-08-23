import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAweSome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "react-navigation-hooks";
import Swipe from "./Swipte";
import { timeFromNow } from "../../../../utils/dateTimeFormat";

const TodoItem = ({ item, tags, toggleTodo, deleteTodo }) => {
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
      <View
        style={[
          styles.container,
          { backgroundColor: item.isPinned ? "#f7e1e1" : "#fff" },
        ]}>
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
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {item.tags.map((t) => (
              <View
                key={t}
                style={{
                  width: 30,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: tags[t].color,
                  marginRight: 6,
                }}
              />
            ))}
          </View>
        </View>
        {item.isPinned && (
          <View style={{ width: 30, marginRight: 10 }}>
            <FontAweSome size={30} name="thumb-tack" color="#FF5A5F" />
          </View>
        )}
        <View style={{ width: 30 }}>
          <Ionicons size={30} name="ios-arrow-forward" color="#ccc" />
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
