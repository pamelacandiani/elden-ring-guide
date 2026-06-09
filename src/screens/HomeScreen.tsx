import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useEffect, useState } from 'react';

import BossCard from '../components/BossCard';
import { getBosses } from '../services/api';

export default function HomeScreen({ navigation }: any) {
  const [bosses, setBosses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadBosses() {
      try {
        const data = await getBosses();
        setBosses(data);
      } catch (err) {
        setError('Erro ao carregar bosses.');
      } finally {
        setLoading(false);
      }
    }

    loadBosses();
  }, []);

  const filteredBosses = bosses.filter((boss) =>
    boss.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#D4AF37"
        />

        <Text style={styles.loadingText}>
          Carregando chefes...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Elden Ring
      </Text>

      <Text style={styles.subtitle}>
        Guia dos Chefes
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar chefe..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.counter}>
        Chefes encontrados: {filteredBosses.length}
      </Text>

      <Text
        style={styles.favoritesButton}
        onPress={() =>
          navigation.navigate('Favorites')
        }
      >
        ⭐ Ver Favoritos
      </Text>

      <FlatList
        data={filteredBosses}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BossCard
            boss={item}
            onPress={() =>
              navigation.navigate('Details', {
                boss: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    padding: 20,
  },

  center: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#D4AF37',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },

  counter: {
    color: '#BDBDBD',
    fontSize: 14,
    marginBottom: 10,
  },

  favoritesButton: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  loadingText: {
    color: '#FFF',
    marginTop: 10,
  },

  errorText: {
    color: '#FF6B6B',
    fontSize: 16,
  },
});