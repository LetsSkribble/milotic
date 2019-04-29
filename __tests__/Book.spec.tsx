import "react-native";
import React from "react";
import Book from "../src/icons/Book";

import renderer from "react-test-renderer";

describe("Book", () => {
  it("renders correctly", () => {
    renderer.create(<Book />);
  });
});
