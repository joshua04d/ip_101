const { getDefaultConfig } = require('expo/metro-config');
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('sql');
module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [["inline-import", { "extensions": [".sql"] }]] // <-- add this
    };
  };