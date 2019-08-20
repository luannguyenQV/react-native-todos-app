import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const THEME = {
  ORANGE: "ORANGE",
};

const primaryColor = "#FF5A5F";

const subPrimaryColor = "#008489";

const textColor = "#484848";

const subTextColor = "#767676";

const themeConfig = {
  colors: {
    primaryColor,
    secondaryColor: subPrimaryColor,
    titleColor: textColor,
    textColor: subTextColor,
  },
  sizes: {
    defaultPadding: 20,
  },
  Button: {
    buttonStyle: {
      borderRadius: 25,
      height: 50,
    },
    titleStyle: {
      color: "#fff",
      fontSize: 18,
      fontFamily: "AirbnbCerealApp-Medium",
    },
  },
  Input: {
    inputStyle: {
      borderWidth: 1,
      height: 50,
      borderRadius: 25,
      borderColor: "#f1f1f1",
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: "#f4f4f4",
      color: subTextColor,
      fontFamily: "AirbnbCerealApp-Medium",
    },
    containerStyle: {
      paddingHorizontal: 0,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
  },
  Text: {
    style: {
      color: subTextColor,
      fontSize: 14,
      fontFamily: "AirbnbCerealApp-Medium",
    },
    h1Style: {
      fontSize: 34, // 22 26 30 34
      color: primaryColor,
      fontFamily: "AirbnbCerealApp-Medium",
      paddingBottom: 20,
    },
    h4Style: {
      fontSize: 18, //22 26 30 34
      color: textColor,
      fontFamily: "AirbnbCerealApp-Medium",
    },
  },
  Header: {
    containerStyle: {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
    },
    leftContainerStyle: { paddingLeft: 10 },
  },
  CheckBox: {
    containerStyle: {
      borderWidth: 0,
      backgroundColor: "#fff",
      padding: 0,
      margin: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingHorizontal: 0,
    },
    textStyle: {
      color: subTextColor,
      fontSize: 14,
      fontFamily: "AirbnbCerealApp-Medium",
    },
    checkedIcon: (
      <Ionicons size={25} name="ios-checkbox" color={primaryColor} />
    ),
    uncheckedIcon: (
      <Ionicons size={30} name="ios-square-outline" color={primaryColor} />
    ),
  },
  SearchBar: {
    containerStyle: {
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      borderTopWidth: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    inputContainerStyle: {
      backgroundColor: "#f4f4f4",
      borderRadius: 30,
      paddingLeft: 10,
      paddingRight: 10,
    },
    inputStyle: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
};

export { THEME, themeConfig };
