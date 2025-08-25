import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { students, type Student } from '../../data/students';

export default function StudentsList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Daftar Mahasiswa</Text>
  {students.map((s: Student) => (
        <Link
          key={s.nim}
          href={{ pathname: '/(tabs)/students/[nim]', params: { nim: s.nim } }}
          asChild
        >
          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-circle" size={28} color="#2196F3" />
            <Text style={styles.name}>{s.name}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
});
