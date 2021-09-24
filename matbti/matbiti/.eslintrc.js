module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb', // 대표 컨벤션 eslint airbnb
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    /*
        state, 메소드 없으면 class 형 컴포넌트 만들지 말고 stateless 컴포넌트로
        JSX 코드는 .jsx 확장자
        JSX 안에서 한 줄에 하나만 표현한다

        ❗️error off : 0 , warning 1,❗️
        */
  },
};
