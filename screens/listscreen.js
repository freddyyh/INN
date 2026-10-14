import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { lokaler } from '../data/lokaler';
import { styles } from '../styles/stil';


export default function ListScreen({ navigation }) {

  const renderLokale = ({ item }) => (
    /* Sender hele lokaleobjektet med, så detaljeskærmen viser det valgte lokale. */
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