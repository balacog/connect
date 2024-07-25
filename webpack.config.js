const path = require('path');

module.exports = {
  entry: './app.ts', // Entry point of your application
  target: 'node', // Specify the environment
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'connectapi_v1.js', // Output file name
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply loader on .ts files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
};
