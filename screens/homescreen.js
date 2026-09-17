import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Button from '../components/button';
import { styles } from '../styles/stil';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.hero}>
        <Text style={styles.title}>Lokale Lokaler</Text>

        <Text style={styles.subtitle}>
          Find det perfekte lokale til din næste fest
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Skal du holde fest?</Text>

        <Text style={styles.description}>
          Lokale Lokaler giver dig et nemt overblik over
          forsamlingshuse og festlokaler i dit område.
        </Text>

        <Text style={styles.description}>
          Find lokaler til blandt andet fødselsdage,
          bryllupper, konfirmationer og andre arrangementer.
        </Text>
      </View>

      <Button
        title="Se alle lokaler"
        onPress={() => navigation.navigate('List')}
      />

    </ScrollView>
  );
}