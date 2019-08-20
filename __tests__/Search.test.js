import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Search from "../src/screens/Home/components/Search/Search";

it("renders correctly", () => {
  const tree = renderer
    .create(<Search search="" onSearch={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
