import "react-native";
import React from "react";
import Location from "../src/icons/Location";

import renderer from "react-test-renderer";

describe("Location", () => {
  it("renders correctly", () => {
    renderer.create(<Location />);
  });
});
