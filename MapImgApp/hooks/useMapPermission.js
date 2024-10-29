import { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";

export function useMapPermission(mapViewRef) {
  const [region, setRegion] = useState({});
  const locationSubscription = useRef(null);

  useEffect(() => {
    async function startListening() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      locationSubscription.current = await Location.watchPositionAsync(
        {
          distanceInterval: 100,
          accuracy: Location.Accuracy.Highest,
        },
        location => {
          const newRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          };
          console.log(mapViewRef.current);

          setRegion(newRegion);
          if (mapViewRef.current) {
            mapViewRef.current.animateToRegion(newRegion, 1000);
          }
        }
      );
    }
    startListening();

    return () => {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

  return { region, mapView: mapViewRef };
}
