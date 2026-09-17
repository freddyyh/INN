import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from '../styles/stil';

const lokaler = [
  {
    id: '1',
    navn: 'Frederiksberg Forsamlingshus',
    adresse: 'Falkoner Allé 25, Frederiksberg',
    pris: '4.500 kr.',
    kapacitet: 100,
    type: 'Fødselsdage og familiefester',
    parkering: 'Gratis Parkering - 13 pladser',
    lejeperiode: '14:00 - 02:00', 
    rengoring: 'Rengøring kan ikke tilkøbes'
  },
  {
    id: '2',
    navn: 'Valby Festlokale',
    adresse: 'Valby Langgade 80, København',
    pris: '3.500 kr.',
    kapacitet: 70,
    type: 'Fødselsdage og konfirmationer',
    parkering: 'Gratis Parkering - 7 pladser',
    lejeperiode: '12:00 - 21:30', 
    rengoring: 'Rengøring kan tilkøbes for 750 kr'
  },
  {
    id: '3',
    navn: 'Østerbro Selskabslokaler',
    adresse: 'Østerbrogade 120, København',
    pris: '6.000 kr.',
    kapacitet: 150,
    type: 'Bryllupper og større fester',
    parkering: 'Ingen ledige parkeringspladser men nærliggende parkeringshus',
    lejeperiode: '09:00 - 23:00', 
    rengoring: 'Rengøring kan ikke tilkøbes'
  },
  {
    id: '4',
    navn: 'Nørrebro Kulturhus',
    adresse: 'Nørrebrogade 50, København',
    pris: '2.500 kr.',
    kapacitet: 50,
    type: 'Mindre fødselsdage og arrangementer',
    parkering: 'Gratis Parkering - 3 pladser',
    lejeperiode: '11:00 - 00:00', 
    rengoring: 'Rengøring kan tilkøbes for 750kr'
  },
  {
    id: '5',
    navn: 'Amager Selskabshus',
    adresse: 'Amagerbrogade 200, København',
    pris: '5.000 kr.',
    kapacitet: 120,
    type: 'Bryllupper og fester',
    parkering: 'Gratis Parkering - 5 pladser',
    lejeperiode: '10:00 - 02:00', 
    rengoring: 'Rengøring kan ikke tilkøbes'
  },
];

export default function ListScreen({ navigation }) {

  const renderLokale = ({ item }) => (
    <TouchableOpacity
      style={styles.locationCard}
      onPress={() => navigation.navigate('Details', { lokale: item })}
    >
      <Text style={styles.locationName}>{item.navn}</Text>

      <Text style={styles.locationAddress}>
        {item.adresse}
      </Text>

      <Text style={styles.locationInfo}>
        Op til {item.kapacitet} personer
      </Text>

      <Text style={styles.locationPrice}>
        Fra {item.pris}
      </Text>

      <Text style={styles.readMore}>
        Se detaljer →
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>
        Find dit lokale
      </Text>

      <Text style={styles.listSubtitle}>
        Tryk på et lokale for at se flere oplysninger.
      </Text>

      <FlatList
        data={lokaler}
        renderItem={renderLokale}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}