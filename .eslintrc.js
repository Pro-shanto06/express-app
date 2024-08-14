module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb-typescript/base',
      'plugin:import/recommended',
      'plugin:import/typescript'
    ],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
      'import/extensions': ['error', 'ignorePackages', {
        'ts': 'never',
        'tsx': 'never',
      }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      }],
    },
  };
  