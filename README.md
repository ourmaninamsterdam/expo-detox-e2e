# Forked from https://github.com/yaron1m/expo-detox-typescript-example/issues/5

This is a fork of https://github.com/yaron1m/expo-detox-typescript-example/issues/5 that's been updated to fix an [issue](https://github.com/wix/Detox/issues/1422) using [this fix](https://stackoverflow.com/questions/63137314/error-running-tests-with-detox-in-expo-react-native-project/65201597#65201597) as well as upgrading to Expo SDK v40, Detox v17.

# expo-detox-typescript-example  

Sample React-Native application with e2e tests using:

* Expo SDK v40
* [detox](https://github.com/wix/detox) 17.14.6
* [detox-expo-helpers](https://github.com/ourmaninamsterdam/detox-expo-helpers)
* [expo-detox-hooks](https://github.com/expo/detox-tools)
* jest
* typescript

## Demo
<img src="https://raw.githubusercontent.com/yaron1m/expo-detox-typescript-example/master/example.gif"/>

## Installation instructions
1. Follow **Step 1** (install dependencies) from detox [Getting Started](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies) guide
2. Download Expo iOS client by running `npm run dl_expo_bins`
3. Install the project dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. In another terminal, run `npm run e2e` to run the tests.
