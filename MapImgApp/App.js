import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Map from "./components/Map";

// Firebase Utils
import { saveLocation, fetchImages } from "./utils/firebaseUtils";
import { useMarkers } from "./hooks/useMarkers";

// UI Components
import AddLocationModal from "./ui/AddLocationModal";
import LocationDetailsModal from "./ui/LocationDetailsModal";

export default function App() {
  const markers = useMarkers(); // Custom hook to fetch markers from firestore

  // Modal state
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  // Current marker state
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMarkerImages, setSelectedMarkerImages] = useState([]);

  // Add location state
  const [imageUri, setImageUri] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handlers for modals
  const handleMapPress = e => {
    setIsAddModalVisible(true);
    setCoordinates(e.nativeEvent.coordinate);
  };

  const closeAddModal = () => {
    setIsAddModalVisible(false);
    setCoordinates(null);
    setLocationName("");
  };

  const closeDetailsModal = () => {
    setIsDetailsModalVisible(false);
    setSelectedMarker(null);
    setSelectedMarkerImages([]);
  };

  // Handler for marker press
  const handleMarkerPress = async marker => {
    setIsDetailsModalVisible(true);
    setSelectedMarker(marker);
    setLoading(true);

    try {
      const images = await fetchImages(marker.image);
      setSelectedMarkerImages(images);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handler for saving location with image
  const handleLocationSave = async () => {
    const imageName = `${locationName}-${Date.now()}`;

    try {
      setLoading(true);
      const locationData = {
        coordinates: coordinates,
        title: locationName,
        image: imageUri ? [imageName] : [],
      };

      await saveLocation(locationData, imageUri, imageName);
      console.log("Location successfully added!");
      closeAddModal();
    } catch (error) {
      console.error("Error saving location:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Map
        handlePress={handleMapPress}
        markers={markers}
        onMarkerPress={handleMarkerPress}
      />

      <AddLocationModal
        isVisible={isAddModalVisible}
        onClose={closeAddModal}
        locationName={locationName}
        setLocationName={setLocationName}
        onImageSelect={setImageUri}
        onSave={handleLocationSave}
        loading={loading}
      />

      <LocationDetailsModal
        isVisible={isDetailsModalVisible}
        selectedMarker={selectedMarker}
        onClose={closeDetailsModal}
        images={selectedMarkerImages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
