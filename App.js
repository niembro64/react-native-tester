import React, { Component, useState, useEffect } from "react";
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

const App = () => {
  const [niemosIterator, setNiemosIterator] = useState(68);
  const [niemos, setNiemos] = useState([
    { name: "A" },
    { name: "B" },
    { name: "C" },
  ]);

  const onClickHandlerLess = () => {
    niemos.pop();
    setNiemosIterator(niemosIterator - 1 < 65 ? 65 : niemosIterator - 1);
  };
  const onClickHandlerMore = () => {
    setNiemos([...niemos, { name: String.fromCharCode(niemosIterator) }]);
    setNiemosIterator(niemosIterator + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Niemo App</Text>
      <View style={styles.niemoContainer}>
        {niemos.map((n, k) => {
          return <NiemoComponent key={k} myText={n.name}></NiemoComponent>;
        })}
      </View>
      <Separator styel={styles.separator} />
      <View>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="↓ Less"
            color="blue"
            onPress={onClickHandlerLess}
            // onPress={() => Alert.alert("Minus")}
          />
          <Button
            style={styles.button}
            title="More ↑"
            color="red"
            onPress={onClickHandlerMore}
            // onPress={() => Alert.alert("Plus")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

const NiemoComponent = (props) => (
  <SafeAreaView style={styles.niemo}>
    <Text style={styles.title}>{props.myText}</Text>
    <TouchableOpacity
      onPress={() =>
        Alert.prompt("New Title:", "", (text) => {
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
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 10,
    marginVertical: 5,
  },
  buttons: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 0,
    width: 200,
    padding: 5,
    borderWidth: 10,
    borderColor: "#00000033",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  button: {
    fontSize: 10,
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
