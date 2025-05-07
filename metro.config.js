const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const baseConfig = getDefaultConfig(__dirname);
const customConfig = {}; // Add any custom metro config here

const mergedConfig = mergeConfig(baseConfig, customConfig);

// Pass the final config to withNativeWind
module.exports = withNativeWind(mergedConfig, { input: './global.css' });