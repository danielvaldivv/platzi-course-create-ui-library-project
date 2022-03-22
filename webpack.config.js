const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@platzi-course-project-ui': path.resolve(__dirname, './src'),
    },
    extensions: ['.js'],
  },
};