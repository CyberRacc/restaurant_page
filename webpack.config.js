// Import the path module from Node.js to handle file paths
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Export the configuration object for Webpack
module.exports = {
  plugins: [
    // Other plugins can be added here
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your source template
      favicon: './src/assets/icons/fat_cat_favicon.ico'
    }),
  ],

  // Set the mode to 'development'. Other common value is 'production'.
  // Development mode optimizes the build for speed and debugging.
  mode: 'development',

  // Entry point of your application. Webpack will start bundling from here.
  entry: './src/index.js',

  // Output configuration for the bundled file
  output: {
    // Name of the output bundle file
    filename: 'main.js',

    // Output directory for the bundled file. '__dirname' is the directory of the current module,
    // 'dist' is the directory where the output file will be placed.
    path: path.resolve(__dirname, 'dist'),
  },

  // Module configuration for how to treat different types of modules
  module: {

    // Rules for different modules
    rules: [
      {
        // A regex test for .css files. If a file matches, the specified loaders will be used.
        test:/\.css$/i,

        // Use these loaders for CSS files. 'style-loader' injects CSS into the DOM via a <style> tag.
        // 'css-loader' interprets @import and url() like import/require() and will resolve them.
        use: ['style-loader', 'css-loader'],
      },
      {
        // A regex test for image files. If a file matches, the specified loader will be used.
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        // This defines the type of asset module. 'asset/resource' sends a file to the output directory
        // and exports the URL. Previously achieved by using 'file-loader'.
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
