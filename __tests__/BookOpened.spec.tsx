import "react-native";
import React from "react";
import BookOpened from "../src/icons/BookOpened";

import renderer from "react-test-renderer";

describe("BookOpened", () => {
  it("renders correctly", () => {
    renderer.create(<BookOpened />);
  });
});
