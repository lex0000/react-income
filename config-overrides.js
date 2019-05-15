const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy, useBabelRc} = require('customize-cra');
  module.exports = override(
  addDecoratorsLegacy()
);