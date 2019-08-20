import React, { useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "react-navigation-hooks";
import AddTodo from "./AddTodo";

const AddTodoScreen = () => {
  const { pop, getParam } = useNavigation();

  const navigateToAddTodo = useCallback(() => {
    pop();
  }, [pop]);

  const item = getParam("item", null);

  return (
    <View style={{ flex: 1, paddingBottom: 50 }}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={navigateToAddTodo}>
            <Ionicons size={50} name="ios-arrow-round-back" color="#FF5A5F" />
          </TouchableOpacity>
        }
        centerComponent={<Text h4>ADD TODO</Text>}
      />
      <AddTodo item={item} />
    </View>
  );
};

export default AddTodoScreen;
