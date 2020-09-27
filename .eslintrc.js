module.exports = {
	env: {
		browser: true,
		jest: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb-base',
		'prettier',
		'prettier/react',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/prop-types': 'off',
		camelcase: 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
	},
};
