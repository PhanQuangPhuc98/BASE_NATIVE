/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {AppNavigator} from '@navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
