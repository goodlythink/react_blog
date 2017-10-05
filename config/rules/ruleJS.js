const paths = require('../paths')

const babelPresets = [
    [
        'env',
        {
            targets: {
                browsers: ['last 2 version', 'ie >= 10']
            },
            modules: false,
            useBuiltIns: false,
            loose: true,
            debug: true
        }
    ],
    'react',
    'stage-2'
]

const transformRuntime = [
    'transform-runtime',
    {
        helpers: true,
        polyfill: false,
        regenerator: true
    }
]
const dev = {
    test: /.js$/,
    include: paths.src,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: babelPresets.concat(['react-hmre']),
                plugins: [transformRuntime]
            }
        }
    ]
}

module.exports = {
    dev,
}