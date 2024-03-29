module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  globals: {
    onMounted: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': 0,
    'vue/multi-word-component-names': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': 0,
    'object-curly-spacing': ['error', 'always']
  },
};