import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/button';
import { lokaler } from '../data/lokaler';
import { useFavorites } from '../context/favorit';
import { styles } from '../styles/stil';

export default function FavoritesScreen({ navigation }) {
  const {
    favoritter,
    indlaeser,
    fejl,
    hentFavoritter,
  } = useFavorites();

  // Find de lokaleobjekter, som matcher de gemte ID'er.
  const favoritLokaler = lokaler.filter((lokale) =>
    favoritter.includes(lokale.id)
  );

  if (indlaeser) {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.description}>
          Henter dine favoritter...
        </Text>
      </View>
    );
  }

  if (fejl) {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.description}>{fejl}</Text>
        <Button title="Prøv igen" onPress={hentFavoritter} />
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Mine favoritter</Text>

      <Text style={styles.listSubtitle}>
        Dine gemte lokaler samlet ét sted.
      </Text>

      <FlatList
        data={favoritLokaler}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.description}>
            Du har ingen favoritter endnu. Åbn et lokale,
            og tryk på "Gem som favorit".
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.locationCard}
            onPress={() =>
              navigation.navigate('Details', { lokale: item })
            }
          >
            <Text style={styles.locationName}>
              {item.navn}
            </Text>

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
        )}
      />

      <Button
        title="Find flere lokaler"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}