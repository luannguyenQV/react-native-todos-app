import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";

export default class Swipe extends Component {
  renderRightAction = (iconName, color, x, progress, onPress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      onPress();
      this.close();
    };
    return (
      <Animated.View
        style={{ flex: 1, marginLeft: 2, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Ionicons size={30} name={iconName} color="#FF5A5F" />
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress) => {
    const { onDeleteItem, onEditItem } = this.props;

    return (
      <View style={{ width: 160, flexDirection: "row" }}>
        {this.renderRightAction(
          "ios-create",
          "#fafafa",
          160,
          progress,
          onEditItem
        )}
        {this.renderRightAction(
          "ios-trash",
          "#fafafa",
          80,
          progress,
          onDeleteItem
        )}
      </View>
    );
  };

  updateRef = (ref) => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#497AFC",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
