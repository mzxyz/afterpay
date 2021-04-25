# create project
npx react-native init afterpay --template react-native-template-typescript

# add TypeScript and types for RN and jest
yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer

# add tools
yarn add @react-navigation/bottom-tabs @react-navigation/native @react-navigation/stack lodash ramda react-native-gesture-handler react-native-tab-view react-native-vector-icons react-navigation react-redux redux redux-observable rxjs styled-components @reduxjs/toolkit

# add eslint tools
yarn add -D eslint-plugin-simple-import-sort babel-plugin-module-resolver eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

# add dev types
yarn add -D @types/lodash @types/react-native-vector-icons @types/react-redux @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser redux-devtools-extension

# create project structure
mkdir src && cd src && mkdir epics images mobile reducers utils && cd mobile && mkdir components navigators pages && cd pages && mkdir shop orders in-store profile