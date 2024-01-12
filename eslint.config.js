import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
  },
})
