import "react-native";
import React from "react";
import Snow from "../src/icons/Snow";

import renderer from "react-test-renderer";

describe("Snow", () => {
  it("renders correctly", () => {
    renderer.create(<Snow />);
  });
});
