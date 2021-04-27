module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'rules': {
        'react/prop-types':'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
