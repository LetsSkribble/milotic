module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!(react-native)/)"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  modulePaths: ["<rootDir>"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/setupTests.ts",
    "!src/components/**/index.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/*.style.ts",
    "!src/styles/**/*"
  ],
  coverageDirectory: "./coverage/",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
