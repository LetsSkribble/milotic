import "react-native";
import React from "react";
import News from "../src/icons/News";

import renderer from "react-test-renderer";

describe("News", () => {
  it("renders correctly", () => {
    renderer.create(<News />);
  });
});
