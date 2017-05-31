var path = require('path');

var packageJson = require('./package.json');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        alias: {
            'my-loader': path.resolve(__dirname, './webpack/pkg_dist-loader.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: path.resolve(__dirname, 'src/pkg_dist.json'),
                use: [
                    {
                        loader: 'json-loader'
                    }, {
                        loader: 'my-loader',
                        options: {
                            name: packageJson.name,
                            version: packageJson.version,
                            date: new Date()
                        }
                    }
                ]
            }
        ]
    }
};