import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const time = {
  nome: 'Flamengo',
  escudo: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
};

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
});

export default EscudoScreen;
