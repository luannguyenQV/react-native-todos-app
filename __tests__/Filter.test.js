import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Filter from "../src/screens/Home/components/Filter/Filter";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Filter
        filter="ALL"
        remainTask="5"
        toggleAll={() => {}}
        setVisibilityFilter={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
