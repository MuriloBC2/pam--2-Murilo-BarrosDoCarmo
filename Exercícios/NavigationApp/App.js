import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/index';
import LoginScreen from './src/screens/Login/index';
import ThirdPage  from './assets/Screens/thirdPage';

export default function App() {
const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "First" screenOptions={{ headerShown: false}}>
        <Stack.Screen name = "home" component  = {HomeScreen} />
        <Stack.Screen name = "login" component  = {LoginScreen}/>
        <Stack.Screen name = "Third" component  = {ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
