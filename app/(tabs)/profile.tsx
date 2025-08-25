import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>
        <Image source={require('../../assets/images/tegar.jpeg')} style={styles.image} />
      <View style={styles.infoBox}>
  <Text style={styles.label}>Nama Lengkap:</Text>
  <Text style={styles.value}>TEGAR SURYA PRAYOGA</Text>
  <Text style={styles.label}>NIM:</Text>
  <Text style={styles.value}>105841106222</Text>
  <Text style={styles.label}>Kelas:</Text>
  <Text style={styles.value}>VI B</Text>
        <Text style={styles.label}>Jurusan:</Text>
        <Text style={styles.value}>Teknik Informatika</Text>
        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.value}>Fakultas Teknik</Text>
      </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
  value: {
    fontSize: 15,
    marginBottom: 4,
  },
});
