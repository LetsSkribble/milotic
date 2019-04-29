import "react-native";
import React from "react";
import Person from "../src/icons/Person";

import renderer from "react-test-renderer";

describe("Person", () => {
  it("renders correctly", () => {
    renderer.create(<Person />);
  });
});
