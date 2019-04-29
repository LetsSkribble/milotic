import "react-native";
import React from "react";
import Favourite from "../src/icons/Favourite";

import renderer from "react-test-renderer";

describe("Favourite", () => {
  it("renders correctly", () => {
    renderer.create(<Favourite />);
  });
});
