import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Button from '../components/button';
import { lokaler } from '../data/lokaler';
import { styles } from '../styles/stil';

export default function MapScreen({ navigation }) {
  // Husker det lokale, brugeren har trykket på.
  // Gemmer det valgte lokale i skærmens tilstand.
// Når værdien ændres, opdateres oplysningerne under kortet. 
  const [valgtLokale, setValgtLokale] = useState(null);

  return (
    <View style={styles.mapContainer}>
      <Text style={styles.mapIntro}>
       Tryk på en markør for at vælge et lokale.
      </Text>

      <MapView
       style={styles.map}
        initialRegion={{
          latitude: 55.681,
          longitude: 12.555,
          latitudeDelta: 0.095,
          longitudeDelta: 0.13,
        }}
      >
        {/* Opretter en markør for hvert lokale ud fra dets koordinater (latitude og longitude) */}
        {lokaler.map((lokale) => (
          <Marker
            key={lokale.id}
            coordinate={{
              latitude: lokale.latitude,
              longitude: lokale.longitude,
            }}
            title={lokale.navn}
            description={`Op til ${lokale.kapacitet} personer`}
            pinColor={
              valgtLokale?.id === lokale.id
                ? '#B56B35'
                : '#2F5D50'
            }
            onPress={() => setValgtLokale(lokale)}
          />
        ))}
      </MapView>

      <ScrollView
        style={styles.mapPanel}
        contentContainerStyle={styles.mapPanelContent}
      >
        {valgtLokale ? (
          <View>
            <Text style={styles.cardTitle}>
              {valgtLokale.navn}
            </Text>

            <Text style={styles.locationInfo}>
              Op til {valgtLokale.kapacitet} personer
            </Text>

            <Text style={styles.locationPrice}>
              Fra {valgtLokale.pris}
            </Text>

            <Button
              title="Se detaljer"
              onPress={() =>
                navigation.navigate('Details', {
                  lokale: valgtLokale,
                })
              }
            />
          </View>
        ) : (
          <Text style={styles.description}>
            Vælg et lokale på kortet for at se pris og kapacitet.
          </Text>
        )}

        <Text style={styles.mapDisclaimer}>
          Fiktive demolokaler med omtrentlige placeringer.
        </Text>
      </ScrollView>
    </View>
  );
}