const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@platzi-course-project-ui/icons': path.resolve(__dirname, './packages/icons/src'),
      '@platzi-course-project-ui/components': path.resolve(__dirname, './packages/components/src'),
    },
    extensions: ['.js'],x
  },
};