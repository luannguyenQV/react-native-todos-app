import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ALL, ACTIVE, COMPLETED } from "../../../../configs/filterType";

const index = ({ filter, remainTask, toggleAll, setVisibilityFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
        <View style={styles.toggleIcon}>
          <TouchableOpacity onPress={toggleAll}>
            <Ionicons size={30} name="ios-done-all" color="#FF5A5F" />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text h4>{`Remain: ${remainTask}`}</Text>
        </View>
      </View>
      <View style={styles.rightComponent}>
        <TouchableOpacity onPress={() => setVisibilityFilter({ filter: ALL })}>
          <View style={[styles.filterItem, styles.filterBorderRight]}>
            <Text style={{ color: filter === ALL ? "#FF5A5F" : "#767676" }}>
              All
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibilityFilter({ filter: ACTIVE })}>
          <View style={[styles.filterItem, styles.filterBorderRight]}>
            <Text style={{ color: filter === ACTIVE ? "#FF5A5F" : "#767676" }}>
              Active
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibilityFilter({ filter: COMPLETED })}>
          <View style={styles.filterItem}>
            <Text
              style={{ color: filter === COMPLETED ? "#FF5A5F" : "#767676" }}>
              Completed
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftComponent: {
    flexDirection: "row",
  },
  rightComponent: {
    flexDirection: "row",
    height: 40,
  },
  toggleIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  title: {
    justifyContent: "center",
  },
  filterItem: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  filterBorderRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: "#767676",
  },
});
