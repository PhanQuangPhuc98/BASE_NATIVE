// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@navigation': './src/navigation',
                    '@redux': './src/redux',
                    '@screens': './src/screen',
                    '@utils': './src/utils',
                    '@interfaces': './src/interface',
                    '@constants': './src/constants'
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};