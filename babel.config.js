module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['inline-dotenv'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
