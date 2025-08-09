import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

const useLocation = (): Coordinates | null => {
  const [coords, setCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    const requestLocation = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location.',
              buttonPositive: 'OK',
            }
          );

          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.warn('Location permission denied');
            return;
          }
        }

        // @ts-ignore: 'navigator' may not be defined in React Native, use global geolocation if available
        const geo = (navigator && navigator.geolocation) ? navigator.geolocation : (global as any).geolocation;
        if (!geo) {
          console.warn('Geolocation is not available on this platform.');
          return;
        }

        geo.getCurrentPosition(
          (position: { coords: { latitude: number; longitude: number; }; }) => {
            const { latitude, longitude } = position.coords;
            setCoords({ latitude, longitude });
          },
          (error: { message: any; }) => {
            console.error('Geolocation error:', error.message);
          },
          { enableHighAccuracy: true }
        );
      } catch (error) {
        console.error('Failed to request location:', error);
      }
    };

    requestLocation();
  }, []);

  return coords;
};

export default useLocation;
