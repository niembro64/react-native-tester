import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.niemoContainer}>
      <NiemoComponent myText={"A"}></NiemoComponent>
      <NiemoComponent myText={"B"}></NiemoComponent>
      <NiemoComponent myText={"C"}></NiemoComponent>
      <NiemoComponent myText={"D"}></NiemoComponent>
      <NiemoComponent myText={"E"}></NiemoComponent>
    </View>
    <Separator styel={styles.separator} />
    <View>
      <Text style={styles.title}>Niemo App</Text>
      <Text style={styles.title}>Click left and right buttons below.</Text>
      <View style={styles.fixToText}>
        <Button
          title="Left"
          color="blue"
          onPress={() => Alert.alert("You Clicked Left")}
        />
        <Button
          title="Right"
          color="red"
          onPress={() => Alert.alert("You Clicked Right")}
        />
      </View>
    </View>
  </SafeAreaView>
);

const Separator = () => <View style={styles.separator} />;

const NiemoComponent = (props) => (
  <SafeAreaView style={styles.niemo}>
    <Text style={styles.title}>{props.myText}</Text>
    <TouchableOpacity
      onPress={() =>
        Alert.prompt("My title", "My message", (text) => {
          Alert.alert(text + props.myText);
        })
      }
    >
      <Image style={styles.image} source={require("./assets/mexico.jpg")} />
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
  title: {
    textAlign: "center",
    marginVertical: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  separator: {
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "orange",
    marginVertical: 5,
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    borderWidth: 10,
    borderColor: "#00000033",
    borderRadius: 20,
    marginVertical: 5,
  },
  niemoContainer: {
    borderWidth: 10,
    borderColor: "#00000033",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  niemo: {
    borderWidth: 10,
    borderColor: "#00000033",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default App;
