import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.subtitle}>Projek Expo Tegar</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deskripsi Aplikasi</Text>
        <Text style={styles.description}>
          Aplikasi ini adalah implementasi lengkap dari pembelajaran React Native menggunakan 
          framework Expo dengan TypeScript. Dikembangkan sebagai proyek tugas mata kuliah 
          Aplikasi Komputasi Bergerak, aplikasi ini mendemonstrasikan penggunaan tab navigation, 
          manajemen font yang konsisten, handling gambar yang optimal, dan interface yang 
          responsif untuk berbagai device mobile.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fitur-fitur Aplikasi:</Text>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>� Halaman Home</Text>
          <Text style={styles.featureDescription}>
            Menampilkan informasi lengkap tentang Universitas Muhammadiyah Makassar 
            dengan gambar kampus yang responsif, logo universitas, dan deskripsi institusi.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>👤 Profil Mahasiswa</Text>
          <Text style={styles.featureDescription}>
            Halaman profil personal yang menampilkan foto, data akademik (NIM, Program Studi), 
            informasi kontak, dan biodata lengkap mahasiswa dengan desain yang menarik.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>ℹ️ Tentang Aplikasi</Text>
          <Text style={styles.featureDescription}>
            Halaman informasi aplikasi yang berisi deskripsi, fitur-fitur, teknologi yang 
            digunakan, dan detail pengembangan aplikasi mobile dengan React Native.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🎨 Tipografi Konsisten</Text>
          <Text style={styles.featureDescription}>
            Implementasi font fontBas yang konsisten di seluruh aplikasi untuk 
            memberikan pengalaman visual yang seragam dan profesional.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>� Navigasi Tab</Text>
          <Text style={styles.featureDescription}>
            Sistem navigasi tab yang mudah digunakan dengan ikon intuitif (Home, About, Profile) 
            menggunakan expo-router dan @expo/vector-icons untuk navigasi yang smooth.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🖼️ Manajemen Gambar</Text>
          <Text style={styles.featureDescription}>
            Handling gambar yang optimal dengan error handling, loading state, dan 
            resize mode yang responsif untuk berbagai ukuran layar device.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>📚 Sistem Font Lengkap</Text>
          <Text style={styles.featureDescription}>
            Dukungan 12+ font custom termasuk static fonts, variable fonts, dan font khusus 
            dengan loading system yang efisien menggunakan expo-font.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🎯 Interface Responsif</Text>
          <Text style={styles.featureDescription}>
            Desain interface yang responsif dan adaptive terhadap berbagai ukuran layar 
            dengan styling yang konsisten menggunakan StyleSheet dan Flexbox.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Teknologi yang Digunakan:</Text>
        <View style={styles.techList}>
          <Text style={styles.techItem}>• React Native - Framework pengembangan mobile</Text>
          <Text style={styles.techItem}>• Expo SDK - Platform development dan deployment</Text>
          <Text style={styles.techItem}>• TypeScript - Type-safe JavaScript development</Text>
          <Text style={styles.techItem}>• Expo Router - File-based routing system</Text>
          <Text style={styles.techItem}>• Expo Font - Custom font management</Text>
          <Text style={styles.techItem}>• Expo Vector Icons - Icon library (Ionicons)</Text>
          <Text style={styles.techItem}>• React Navigation - Tab navigation system</Text>
          <Text style={styles.techItem}>• StyleSheet - React Native styling</Text>
          <Text style={styles.techItem}>• ScrollView - Scrollable content container</Text>
          <Text style={styles.techItem}>• Image Component - Asset rendering dan handling</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Dikembangkan oleh Baso Hamzah (NIM: 105841106922) sebagai bagian dari 
          pembelajaran mobile development di Universitas Muhammadiyah Makassar. 
          Aplikasi ini menunjukkan implementasi best practices dalam pengembangan 
          aplikasi mobile dengan React Native dan Expo.
        </Text>
        <Text style={styles.version}>Versi 2.0.0 - Tab Navigation Release</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'fontBas',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'fontBas',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    fontFamily: 'fontBas',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
    fontFamily: 'fontBas',
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  techList: {
    paddingLeft: 10,
  },
  techItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'SpaceMono-Regular',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'fontBas',
  },
  version: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
    fontFamily: 'fontBas',
  },
});
