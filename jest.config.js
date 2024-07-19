module.exports = {
    transform: {
      "^.+\\.jsx?$": "jest-esm-transformer",
      "^.+\\.tsx?$": "jest-esm-transformer"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@mui/x-charts)" // Add any other packages here that need to be transformed
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node']
  };
  