import "react-native";
import React from "react";
import { File } from "../src";

import renderer from "react-test-renderer";

describe("File", () => {
  it("renders correctly", () => {
    renderer.create(<File />);
  });
});
