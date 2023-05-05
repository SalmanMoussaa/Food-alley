module.exports = function(api: { cache: (arg0: boolean) => void; }) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugins:['module:react-native-dotenv']
    

  };
};


export default {
  project: {
    ios: {},
    android: {},
  },
  presets: ['module:metro-react-native-babel-preset'],
  assets: ['./assets/fonts'],
};
