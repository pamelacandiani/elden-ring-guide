import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useContext } from 'react';

import {
  FavoritesContext,
} from '../context/FavoritesContext';

import BossCard from '../components/BossCard';

export default function FavoritesScreen({
  navigation,
}: any) {
  const { favorites } =
    useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ⭐ Favoritos
      </Text>

      <Text style={styles.subtitle}>
        Chefes salvos: {favorites.length}
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
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
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              Nenhum favorito encontrado
            </Text>

            <Text style={styles.emptyText}>
              Abra um chefe e clique em
              "Adicionar aos Favoritos".
            </Text>
          </View>
        }
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

  title: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitle: {
    color: '#AAA',
    marginBottom: 20,
  },

  emptyContainer: {
    marginTop: 50,
    alignItems: 'center',
  },

  emptyTitle: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  emptyText: {
    color: '#AAA',
    textAlign: 'center',
  },
});