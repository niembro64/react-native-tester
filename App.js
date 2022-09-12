import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
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
    <Separator />
    <View>
      <Text style={styles.title}>Test Eric Color Different.</Text>
      <Button
        style={styles.button}
        title="Press me"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    color: "orange",
  },
  image: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    borderRadius: 10,
    shadowColor: "black",
  },
});

export default App;
