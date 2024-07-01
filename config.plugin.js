module.exports = function (api) {
    api.cache(true);
    return {
      plugins: [
        [
          'react-native-onyx',
          {
            ios: {
              podspec: {
                dependencies: {
                  'quick-sqlite': '^4.0.0',
                },
              },
            },
            android: {
              dependencies: {
                'quick-sqlite': '^4.0.0',
              },
            },
          },
        ],
      ],
    };
  };
  