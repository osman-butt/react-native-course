import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRef } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMapPermission } from "../hooks/useMapPermission";

export default function Map({ handlePress, markers, onMarkerPress }) {
  const mapViewRef = useRef(null);
  const { region } = useMapPermission(mapViewRef);

  return (
    <>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={region}
        onLongPress={handlePress}
      >
        {markers &&
          markers.map(marker => (
            <Marker
              key={marker.id}
              title={marker.title}
              coordinate={marker.coordinates}
              onPress={() => onMarkerPress(marker)}
            >
              <MaterialCommunityIcons
                name="camera-marker"
                size={24}
                color="green"
              />
            </Marker>
          ))}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
