import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

const bosses = [
  {
    id: '1',
    name: 'Malenia',
  },
  {
    id: '2',
    name: 'Radahn',
  },
  {
    id: '3',
    name: 'Godrick',
  },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Main Bosses
      </Text>

      <FlatList
        data={bosses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('Details', {
                boss: item,
              })
            }
          >
            <Text style={styles.name}>
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
  },

  title: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },

  name: {
    color: '#fff',
    fontSize: 18,
  },
});