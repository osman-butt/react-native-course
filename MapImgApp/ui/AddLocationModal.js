import { Button, Text, TextInput, StyleSheet } from "react-native";
import ModalOverlay from "../components/ModalOverlay";
import ImageUpload from "../components/ImageUpload";

const AddLocationModal = ({
  isVisible,
  onClose,
  locationName,
  setLocationName,
  onImageSelect,
  onSave,
  loading,
}) => (
  <ModalOverlay title="Add New Location" visible={isVisible} onClose={onClose}>
    <Text>Location Name:</Text>
    <TextInput
      placeholder="e.g., A beautiful place..."
      style={styles.input}
      value={locationName}
      onChangeText={setLocationName}
    />
    <ImageUpload onImageSelect={onImageSelect} />
    <Button
      title={loading ? "Saving..." : "Save"}
      onPress={onSave}
      disabled={loading}
    />
  </ModalOverlay>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 10,
  },
});

export default AddLocationModal;
