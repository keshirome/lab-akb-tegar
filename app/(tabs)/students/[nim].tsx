import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { students, type Student } from '../../data/students';

export default function StudentDetail() {
  const { nim } = useLocalSearchParams();
  const student = students.find((s: Student) => s.nim === nim);

  if (!student) {
    return (
      <View style={styles.center}>
        <Text>Mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: student.photo }} style={styles.photo} />
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <Text style={styles.value}>{student.name}</Text>
        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>{student.nim}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 16,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});
