// jest.config.js
export default {
  preset: 'react-scripts', // Adjust based on your project setup
  transformIgnorePatterns: [
    '/node_modules/(?!(<modules you want to transform>)/)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Ensure JSX and JS files are transformed
  },
  moduleNameMapper: {
    '^@mui/x-charts(.*)$': '<rootDir>/node_modules/@mui/x-charts$1',
    // Add any other mappings needed
  },
};
