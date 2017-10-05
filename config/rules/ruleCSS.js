const paths = require('../paths')

// any.scss (dev)
const globalDev = {
    test: /\.s?css$/,
    use: [
        'style-loader',
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins: loader => [require('autoprefixer')()]
            }
        },
        {
            loader: 'sass-loader',
            options: {
                includePaths: [paths.src]
            }
        }
    ],
}

module.exports = {
    global: {
        dev: globalDev,
    }
}