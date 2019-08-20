import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

const About = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <View style={styles.icon}>
          <Text style={styles.title}>
            T<Text style={{ fontSize: 60, color: "#008489" }}>O</Text>DO
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text>ABOUT ME:</Text>
        <Text style={{ marginTop: 20 }}>luannguyenbkit@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  icon: {
    borderRadius: 120,
    height: 240,
    width: 240,
    borderWidth: 5,
    borderColor: "#fafafa",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 60,
    color: "#FF5A5F",
    textDecorationLine: "underline",
  },
});
