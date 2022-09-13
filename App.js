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

const Separator = () => <View style={styles.separator} />;

const NiemoComponent = (props) => (
  <SafeAreaView style={styles.container}>
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

const App = () => (
  <SafeAreaView style={styles.container}>
    <NiemoComponent myText={"Test Niemo Text"}></NiemoComponent>
    <TouchableOpacity
      onPress={() =>
        Alert.prompt("My title", "My message", (text) => {
          Alert.alert(text);
        })
      }
    >
      <Image style={styles.image} source={require("./assets/mexico.jpg")} />
    </TouchableOpacity>
    {/* <TouchableHighlight onPress={() => Alert.alert("Image Tapped")}>
      <Image style={styles.image} source={require("./assets/mexico.jpg")} />
    </TouchableHighlight> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // height: "100%",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    backgroundColor: "orange",
  },
  image: {
    resizeMode: "contain",
    // width: "50%",
    // height: "50%",
    width: 150,
    height: 150,
    borderRadius: 20,
    shadowColor: "black",
    borderWidth: 10,
    borderColor: "#00000033",
  },
});

export default App;
