import { SafeAreaView, Text } from "react-native";
import ModalOverlay from "../components/ModalOverlay";
import Gallery from "../components/Gallery";

const LocationDetailsModal = ({
  isVisible,
  selectedMarker,
  onClose,
  images,
}) => (
  <ModalOverlay
    title={selectedMarker?.title || "Location Details"}
    visible={isVisible}
    onClose={onClose}
  >
    <SafeAreaView>
      <Gallery images={images} />
    </SafeAreaView>
  </ModalOverlay>
);

export default LocationDetailsModal;
