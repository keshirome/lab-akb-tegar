import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Text style={styles.subtitle}>Lokasi: Makassar, Sulawesi Selatan</Text>
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta terbesar di Indonesia Timur. Unismuh Makassar berkomitmen untuk menciptakan lulusan yang unggul, berkarakter, dan berwawasan global.
      </Text>
      <Image source={require('../../assets/images/unismuh1.png')} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginTop: 8,
  },
});
