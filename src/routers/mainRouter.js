/**
 * @flow
 */
import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import SCREENS from "./screens";
import * as Screens from "../screens";

const HomeStack = createStackNavigator(
  {
    [SCREENS.HOME_SCREEN]: { screen: Screens.HomeScreen },
    [SCREENS.FILTER_SCREEN]: { screen: Screens.FilterScreen },
    [SCREENS.ADD_TODO_SCREEN]: {
      screen: Screens.AddTodoScreen,
    },
  },
  {
    headerMode: "none",
    mode: "modal",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
    gesturesEnabled: false,
  };
};

const AboutStack = createStackNavigator(
  {
    [SCREENS.ABOUT_SCREEN]: { screen: Screens.AboutScreen },
  },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

const MainStack = createBottomTabNavigator(
  {
    HOME: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          // console.warn("props:", props);
          return <Icon name="ios-cube" size={25} color={tintColor} />;
        },
      },
    },
    ABOUT: {
      screen: AboutStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-information-circle" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#F15B5D",
      labelStyle: {
        fontSize: 12,
      },
      style: {},
    },
  }
);
export default MainStack;
