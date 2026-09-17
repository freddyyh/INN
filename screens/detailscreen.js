import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Button from '../components/button';
import { styles } from '../styles/stil';

export default function DetailScreen({ route, navigation }) {

  const { lokale } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>

    <View style={styles.detailHeader}>
  <Text style={styles.detailTitle}>
    {lokale.navn}
  </Text>

  <View style={styles.contactInfo}>
    <Text style={styles.contactTitle}>Kontakt os her</Text>
    <Text style={styles.contactText}>+45 12 34 56 78</Text>
    <Text style={styles.contactText}>kontakt@lokalelokaler.dk</Text>
  </View>
</View>

      <View style={styles.detailCard}>

        <Text style={styles.detailLabel}>
          Adresse
        </Text>

        <Text style={styles.detailValue}>
          {lokale.adresse}
        </Text>

        <Text style={styles.detailLabel}>
          Pris
        </Text>

        <Text style={styles.detailValue}>
          {lokale.pris}
        </Text>

        <Text style={styles.detailLabel}>
          Kapacitet
        </Text>

        <Text style={styles.detailValue}>
          {lokale.kapacitet} personer
        </Text>

        <Text style={styles.detailLabel}>
          Velegnet til
        </Text>

        <Text style={styles.detailValue}>
          {lokale.type}
        </Text>

        <Text style={styles.detailLabel}>
          Parkeringsmulighed
        </Text>

        <Text style={styles.detailValue}>
          {lokale.parkering}
        </Text>

         <Text style={styles.detailLabel}>
          Lejeperiode
        </Text>

        <Text style={styles.detailValue}>
          {lokale.lejeperiode}
        </Text>

         <Text style={styles.detailLabel}>
          Rengøring
        </Text>

        <Text style={styles.detailValue}>
          {lokale.rengoring}
        </Text>


      </View>

      <Button
        title="Tilbage til alle lokaler"
        onPress={() => navigation.navigate('List')}
      />

    </ScrollView>
  );
}