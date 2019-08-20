import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

const index = ({ totalTodos }) => {
  return (
    <View>
      <Text>{`Total: ${totalTodos}`}</Text>
    </View>
  );
};

export default index;
