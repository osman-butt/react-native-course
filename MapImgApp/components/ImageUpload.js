import React, { useState } from "react";
import { View, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageUpload({ onImageSelect }) {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    // Request permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Permission to access media library is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      onImageSelect(result.assets[0].uri); // Pass selected image URI back to parent
    }
  };

  const handleRemoveImage = () => {
    setImageUri(null);
    onImageSelect(null); // Notify parent of image removal
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Button title="Remove Image" onPress={handleRemoveImage} />
        </>
      ) : (
        <Button title="Upload Image" onPress={pickImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
});
