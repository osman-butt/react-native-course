import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null); // Default to first image
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
      setIsLoading(false);
    }
  }, [images]);

  return (
    <View style={styles.container}>
      {isLoading && <View style={styles.imageSkeletonContent} />}
      {!isLoading && (
        <Image source={{ uri: selectedImage }} style={styles.mainImage} />
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailContainer}
      >
        {isLoading && <View style={styles.thumbnailSkeletonContent} />}

        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(image)}>
            <Image
              source={{ uri: image }}
              style={[
                styles.thumbnail,
                selectedImage === image && styles.selectedThumbnail,
              ]}
            />
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity style={styles.thumbnailAddButton}>
          <FontAwesome6 name="add" size={24} color="black" />
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  mainImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  thumbnailContainer: {
    flexDirection: "row",
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 5,
    opacity: 0.7,
  },
  selectedThumbnail: {
    borderColor: "blue",
    borderWidth: 2,
    opacity: 1,
  },
  imageSkeletonContent: {
    width: 300,
    height: 300,
    backgroundColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
  },
  thumbnailSkeletonContent: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  thumbnailAddButton: {
    backgroundColor: "lightgray",
    width: 80,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
