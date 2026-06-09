import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function BossDetailsScreen({
  route,
}: any) {
  const { boss } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {boss.name}
      </Text>

      <Text style={styles.text}>
        Boss ID: {boss.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },
});