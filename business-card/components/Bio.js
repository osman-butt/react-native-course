import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bio = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.about}>
          John Doe is a lecturer at the KEA. He has been teaching for over 10
          years and has a passion for helping students learn. John has a PhD in
          Computer Science and has published several papers in top journals. In
          his free time, John enjoys reading and hiking.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
  },
  card: {
    padding: 10,
    paddingBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  about: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 23,
  },
});

export default Bio;
