import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import About from './src/screens/About'
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './src/redux/store';
import OrderCompleted from './src/screens/OrderCompleted';

const store = configureStore()

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ReduxProvider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Completed' component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
