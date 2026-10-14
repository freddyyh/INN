# Lokale Lokaler

Lokale Lokaler er en mobilapplikation udviklet i React Native og Expo.
Appen giver et samlet overblik over mindre lokaler til fødselsdage,
familiefester og andre private arrangementer.

Projektet er videreudviklet fra godkendelsesopgave 1.

## Nye funktioner i godkendelsesopgave 2

- Kortvisning med markører for lokalernes placering.
- Mulighed for at vælge et lokale på kortet og åbne dets detaljer.
- Mulighed for at gemme og fjerne favoritlokaler.
- En favoritskærm med brugerens gemte lokaler.
- Lokal lagring med AsyncStorage, så favoritter huskes efter genstart.

## Skærme

### HomeScreen
Forside med navigation til lokalelisten, kortet og favoritter.

### ListScreen
Viser alle demolokaler. Tryk på et lokale for at åbne dets detaljer.

### DetailScreen
Viser adresse, pris, kapacitet, anvendelse, parkering, lejeperiode
og rengøring. Her kan brugeren gemme eller fjerne en favorit.

### MapScreen
Viser lokalernes placering på et kort. Brugeren kan vælge en markør
og navigere til lokalets detaljer.

### FavoritesScreen
Viser de lokaler, brugeren har gemt som favoritter.

## Data og lagring

Lokaleoplysningerne findes i `data/lokaler.js` og er fiktive
demonstrationsdata, ikke faktiske udlejningstilbud.

AsyncStorage gemmer brugerens favorit-ID'er lokalt på enheden.
Ved appstart hentes ID'erne igen og bruges til at udvælge de
lokaler, der skal vises på favoritskærmen.

React Context deler favoritlisten mellem skærmene.

Prototypen indeholder ikke booking, betaling eller en kalender
med ledighed. Kortet viser placeringer, ikke ledige datoer.

## Teknologier

- React Native
- Expo
- JavaScript
- React Navigation – native stack-navigation
- react-native-maps
- AsyncStorage
- React Context

Styling er samlet i `styles/stil.js`.
Appen anvender en genbrugelig Button-komponent.

## Kør projektet

Installer afhængigheder fra projektets rod:

npm install

Start Expo:

npx expo start

Scan QR-koden med Expo Go på mobilen.
Kortvisningen er beregnet til iOS og Android.

## Afprøvning af favoritter

1. Åbn et lokale og tryk på "Gem som favorit".
2. Kontroller, at lokalet vises under "Mine favoritter".
3. Luk appen helt og åbn den igen.
4. Kontroller, at favoritten stadig er gemt.
5. Fjern favoritten og kontroller, at den forsvinder fra listen.

## Udvikling og kodebidrag

Projektet er udarbejdet individuelt af Frederik Anderson.

Koden er udviklet med hjælp fra ChatGPT til kodeforslag,
forklaringer og fejlfinding.

## Ny Demovideo - godkendelsesopgave 2

[Se demovideo af den opdaterede app](INDSÆT-LINK-TIL-NY-DEMOVIDEO)

Videoen demonstrerer navigation, kortvisning samt lagring
og fjernelse af favoritter.

## Demovideo fra godkendelsesopgave 1

[Se/download demovideoen](./DEMO/INN-DEMO-vid.mp4)

Hvis videoen ikke kan forhåndsvises på GitHub, vælg "View raw" for at åbne/download den.

