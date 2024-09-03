import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

const { width } = Dimensions.get("window");

const BusinessCard = ({ navigation, route }) => {
  const handleButton = () => {
    navigation.navigate("Bio");
  };

  const handlePress = () => {
    Linking.openURL("https://www.kea.dk");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Lecturer</Text>
        <View style={styles.gridContainer}>
          <View style={styles.contactItem}>
            <Text style={styles.contact}>Phone:</Text>
            <Text style={styles.contactValue}>+45 30 45 30 45</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contact}>Email:</Text>
            <Text style={styles.contactValue}>john.doe@example.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contact}>Website:</Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.link}>www.kea.dk</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button title="Bio" onPress={handleButton}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width * 0.8, // Card width
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#555",
    marginBottom: 15,
  },
  contact: {
    fontSize: 16,
    color: "#333",
  },
  contactValue: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5, // Add margin to separate from the next item
  },
  gridContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default BusinessCard;
