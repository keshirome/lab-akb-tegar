import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>Daftar 10 Ikon:</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <AntDesign name="stepforward" size={200} color="Blue" />
        <AntDesign name="stepbackward" size={200} color="Blue" />
        <Entypo name="infinity" size={200} color="Blue" />
        <Entypo name="aircraft" size={200} color="Blue" />
        <EvilIcons name="bell" size={200} color="Blue" />
        <EvilIcons name="calendar" size={200} color="Blue" />
        <Feather name="activity" size={200} color="Blue" />
        <Feather name="airplay" size={200} color="Blue" />
        <FontAwesome name="heart" size={200} color="Blue" />
        <FontAwesome name="star" size={200} color="Blue" />
      </View>
    </ScrollView>
  );
}
