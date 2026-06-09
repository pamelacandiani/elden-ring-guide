import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import { useContext } from 'react';

import {
  FavoritesContext,
} from '../context/FavoritesContext';

export default function BossDetailsScreen({
  route,
}: any) {
  const { boss } = route.params;

  const { favorites, dispatch } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some(
    (item: any) => item.id === boss.id
  );

  function toggleFavorite() {
    if (isFavorite) {
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: boss.id,
      });
    } else {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: boss,
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      {boss.image ? (
        <Image
          source={{ uri: boss.image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Sem imagem disponível
          </Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>
          {boss.name}
        </Text>

        <Text
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          {isFavorite
            ? '❤️ Remover dos Favoritos'
            : '🤍 Adicionar aos Favoritos'}
        </Text>

        <Text style={styles.region}>
          📍 {boss.region}
        </Text>

        <Text style={styles.sectionTitle}>
          Descrição
        </Text>

        <Text style={styles.description}>
          {boss.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  placeholder: {
    height: 300,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    color: '#FFF',
  },

  content: {
    padding: 20,
  },

  title: {
    color: '#D4AF37',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  favoriteButton: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  region: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 25,
  },

  sectionTitle: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    color: '#E0E0E0',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },
});