# milotic

An Icon Library for React Native.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/skribble-in/milotic.svg?branch=master)](https://travis-ci.org/skribble-in/milotic)
[![codecov](https://codecov.io/gh/skribble-in/milotic/branch/master/graph/badge.svg)](https://codecov.io/gh/skribble-in/milotic)
[![npm](https://img.shields.io/npm/v/@skribble/milotic.svg)](https://www.npmjs.com/package/@skribble/milotic)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<p align="center">
  <img alt="milotic" src="assets/milotic.png">
</p>

## Installation

```bash
yarn @skribble/milotic react react-native react-native-svg
```

## Dependencies

This package is has peer dependencies of [react](https://github.com/facebook/react), [react-native](https://github.com/facebook/react-native) and [react-native-svg](https://github.com/react-native-community/react-native-svg)

## Usage

```jsx
import { ThumbsUp } from "@skribble/milotic";

export default () => {
  return <ThumbsUp size={35} fill="blue" />;
};
```

## Props

Icons have the default SVG Props inherited from ["react-native-svg"](https://github.com/react-native-community/react-native-svg/blob/235ded3d09e1b0a05957d3ba8a42424916d34f38/index.d.ts#L313) and an additional **size** prop to set the height and width of the icon.
