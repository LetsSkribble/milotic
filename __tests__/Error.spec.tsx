import "react-native";
import React from "react";
import Error from "../src/icons/Error";

import renderer from "react-test-renderer";

describe("Error", () => {
  it("renders correctly", () => {
    renderer.create(<Error />);
  });
});
