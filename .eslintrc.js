module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      // Disable "variable defined but never used" errors
      'no-unused-vars': 'off',
  
      // Disable missing alt text warnings
      'jsx-a11y/alt-text': 'off',
  
      // You can disable all warnings if you prefer
      'no-warning-comments': 'off',
    },
  };
  