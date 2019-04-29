import "react-native";
import React from "react";
import ContactBook from "../src/icons/ContactBook";

import renderer from "react-test-renderer";

describe("ContactBook", () => {
  it("renders correctly", () => {
    renderer.create(<ContactBook />);
  });
});
