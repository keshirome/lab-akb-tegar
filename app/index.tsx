import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20, // jarak antar elemen
      }}
    >

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 60,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
        }}
      />

     
      <View
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text 
        style={{ 
          color: "white",
          fontSize: 20 }}>
          105841106622
          </Text>
      </View>

      
      <View
        style={{
          backgroundColor: "green",
          width: 200,
          paddingVertical: 15,
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Tegar surya prayoga
        </Text>
      </View>

      
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: "blue",
          borderRadius: 100,
        }}
      />
    </View>
  );
}



// TUGAS!!
// 1. tAMBAHKAN BENTUK SEGITIGA,  BENTUK PIL DAN PERSEGI PANJANG.
// 2. DIDALAM SEGI PANJANG. BERISI NAMA.
// 3. DIDALAM BENTUK PIL BERISI NIM.
// 4. TERSERAH MAU BUAT BER URUT ATAU TIDAK.