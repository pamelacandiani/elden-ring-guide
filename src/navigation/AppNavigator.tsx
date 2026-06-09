import { createNativeStackNavigator }
from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import BossDetailsScreen from '../screens/BossDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Elden Ring Guide',
        }}
      />

      <Stack.Screen
        name="Details"
        component={BossDetailsScreen}
        options={{
          title: 'Detalhes',
        }}
      />

      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoritos',
        }}
      />
    </Stack.Navigator>
  );
}