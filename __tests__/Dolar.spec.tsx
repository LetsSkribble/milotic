import "react-native";
import React from "react";
import Dolar from "../src/icons/Dolar";

import renderer from "react-test-renderer";

describe("Dolar", () => {
  it("renders correctly", () => {
    renderer.create(<Dolar />);
  });
});
