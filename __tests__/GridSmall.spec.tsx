import "react-native";
import React from "react";
import { GridSmall } from "../src";

import renderer from "react-test-renderer";

describe("GridSmall", () => {
  it("renders correctly", () => {
    renderer.create(<GridSmall />);
  });
});
