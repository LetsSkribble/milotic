import "react-native";
import React from "react";
import EnvelopeAlt from "../src/icons/EnvelopeAlt";

import renderer from "react-test-renderer";

describe("EnvelopeAlt", () => {
  it("renders correctly", () => {
    renderer.create(<EnvelopeAlt />);
  });
});
