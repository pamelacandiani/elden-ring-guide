import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import BossDetailsScreen from '../screens/BossDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Elden Ring Boss Guide',
          }}
        />

        <Stack.Screen
          name="Details"
          component={BossDetailsScreen}
          options={{
            title: 'Boss Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}