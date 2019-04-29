import "react-native";
import React from "react";
import Feed from "../src/icons/Feed";

import renderer from "react-test-renderer";

describe("Feed", () => {
  it("renders correctly", () => {
    renderer.create(<Feed />);
  });
});
