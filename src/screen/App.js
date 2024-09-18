// import { StyleSheet, Text, View, } from 'react-native'
// import React from 'react'
// import Beranda from './ruberi/Beranda'
// import Login from './login/Login'
// import Register from './register/Register'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native'

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator  
//       screenOptions={{ 
//           headerShown: false,
//           statusBarColor: 'transparent',
//           statusBarTranslucent: true,
//         }}>
//         <Stack.Screen name="Beranda" component={Beranda} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './homescreen/HomeScreen';
import DetailScreen from './homescreen/DetailScreen';



const Stack = createNativeStackNavigator();

function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
			<Stack.Screen name="Detail" component={DetailScreen} />
		</Stack.Navigator>
	</NavigationContainer>
  );
}

export default App;