module.exports = {
    'extends': [
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    'plugins': [
        'react',
        'react-hooks',
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'react/self-closing-comp': 2,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [ 2, 4, {
            'SwitchCase': 1
        } ],
        'max-len': [2, {
            ignoreComments: true,
            code: 120
        }],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'no-trailing-spaces': 2,
        'comma-spacing': 2,
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'react-hooks/exhaustive-deps': 0
    }
}