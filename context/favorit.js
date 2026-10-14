import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext(null);

// Nøglen fortæller AsyncStorage, hvor vores favoritter ligger.
const STORAGE_KEY = 'lokaleLokaler.favoritter';

export function FavoritesProvider({ children }) {
  const [favoritter, setFavoritter] = useState([]);
  const [indlaeser, setIndlaeser] = useState(true);
  const [gemmer, setGemmer] = useState(false);
  const [fejl, setFejl] = useState(null);

  // Forhindrer flere samtidige ændringer ved hurtige tryk.
  const optaget = useRef(false);

  async function hentFavoritter() {
    if (optaget.current) return;

    optaget.current = true;
    setIndlaeser(true);
    setFejl(null);

    try {
        // Henter tidligere gemte favorit-ID'er fra telefonens lokale lager.
      const gemteData = await AsyncStorage.getItem(STORAGE_KEY);

      // Første gang appen åbnes, er der ingen gemte favoritter.
      const ids = gemteData === null ? [] : JSON.parse(gemteData);

      if (
        !Array.isArray(ids) ||
        !ids.every((id) => typeof id === 'string')
      ) {
        throw new Error('Ugyldige favoritdata');
      }

      setFavoritter([...new Set(ids)]);
    } catch {
      setFejl('Favoritter kunne ikke hentes. Prøv igen.');
    } finally {
      setIndlaeser(false);
      optaget.current = false;
    }
  }

  // Henter de gemte favoritter én gang, når appen starter.
  useEffect(() => {
    hentFavoritter();
  }, []);

  async function skiftFavorit(id) {
    if (optaget.current || indlaeser || fejl) return;

    optaget.current = true;
    setGemmer(true);

    // Fjern ID'et, hvis det findes. Ellers tilføjes det.
    
    const nyeFavoritter = favoritter.includes(id)
      ? favoritter.filter((favoritId) => favoritId !== id)
      : [...favoritter, id];

    try {
      // AsyncStorage gemmer tekst, så arrayet omdannes til JSON.
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(nyeFavoritter)
      );

      // Opdater skærmene, når lagringen er lykkedes.
      setFavoritter(nyeFavoritter);
    } finally {
      optaget.current = false;
      setGemmer(false);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritter,
        indlaeser,
        gemmer,
        fejl,
        hentFavoritter,
        skiftFavorit,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}