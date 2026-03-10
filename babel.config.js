module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          _assets: './src/assets/index',
          _navigation: './src/navigation/index',
          '_mock-data': './src/mock-data/index',
          _components: './src/components/index',
          _screens: './src/screens/index',
          _store: './src/store/index',
          _styles: './src/styles/index',
          _utils: './src/utils/index',
          _hooks: './src/hooks/index',
          _services: './src/services/index',
          _types: './src/types/index',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
