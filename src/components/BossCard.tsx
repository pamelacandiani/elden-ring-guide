import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

type Props = {
  boss: any;
  onPress: () => void;
};

export default function BossCard({
  boss,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      {boss.image ? (
        <Image
          source={{ uri: boss.image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Sem imagem
          </Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.name}>
          {boss.name}
        </Text>

        <Text style={styles.region}>
          📍 {boss.region}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D4AF37',
  },

  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },

  placeholder: {
    width: '100%',
    height: 220,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    color: '#FFF',
  },

  info: {
    padding: 12,
  },

  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  region: {
    color: '#BDBDBD',
    marginTop: 5,
  },
});