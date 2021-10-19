import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationUtil} from '@navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppEndUser from './stack/AppEndUser';
const Tab = createBottomTabNavigator();
function ButtonBar() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      children={Object.keys(AppEndUser).map((elem, index) => {
        return (
          <Tab.Screen key={index} name={elem} component={AppEndUser[elem]} />
        );
      })}
    />
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={ref => {
        NavigationUtil.setTopLevelNavigator(ref);
      }}>
      <ButtonBar />
    </NavigationContainer>
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
