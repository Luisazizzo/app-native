import { defaults as tsjPreset } from "ts-jest/presets";
import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  verbose: true,
  testEnvironment: "jsdom",
  preset: "react-native",

  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.env.js"],
  //setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: ["node_modules/(?!@react-native|react-native)"],
};
export default jestConfig;
