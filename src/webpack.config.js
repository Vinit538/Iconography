const path = require('path');

module.exports = {
  entry: {
    'index': './index.js', // Change the entry point to your main JavaScript file
    'report-web-vitals': './reportWebVitals.js', // Change the path if needed
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // Change the output path if needed
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Limit file size to 8KB, change as needed
              name: 'images/[name].[hash:8].[ext]', // Output path and filename format
            },
          },
        ],
      },
    ],
  },
  
};
