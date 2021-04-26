module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      [
          'module-resolver',
          {
              root: ['./'],
              alias: {
                '@src/*': './src/*',
                '@components/*': ['./src/features/components/*'],
                '@reducers/*': ['./src/reducers/*'],
                '@utils/*': ['./src/utils/*'],
                '@types/*': ['./src/types/*'],
                '@features/*': ['./src/features/*'],
              },
          },
      ],
  ],
};
