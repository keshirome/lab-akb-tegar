import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dibuat untuk keperluan tugas mata kuliah. Aplikasi ini memiliki tiga halaman utama:
      </Text>
      <Text style={styles.list}>• Home: Menampilkan informasi tentang Unismuh Makassar beserta gambar pendukung.</Text>
      <Text style={styles.list}>• About: Menjelaskan tujuan aplikasi dan fungsi dari setiap halaman.</Text>
      <Text style={styles.list}>• Profil: Menampilkan data diri pribadi dan foto profil.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 8,
  },
});
