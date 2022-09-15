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
  const [fetchData, setFetchData] = useState({});
  const [niemosIterator, setNiemosIterator] = useState(68);
  const [niemos, setNiemos] = useState([
    { name: "A", fact: "Fact A" },
    { name: "B", fact: "Fact B" },
    { name: "C", fact: "Fact C" },
  ]);

  const onClickHandlerLess = () => {
    niemos.pop();
    setNiemosIterator(niemosIterator - 1 < 65 ? 65 : niemosIterator - 1);
  };

  const onClickHandlerMore = () => {
    goForFetch();
  };

  const goForFetch = () => {
    setFetchData({
      fromFetch: true,
      loading: true,
    });
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("getting data from fetch", responseJson);
        setFetchData(responseJson);
        // setTimeout(() => {}, 2000);
      })
      .then(() => {
        setNiemos([
          ...niemos,
          { name: String.fromCharCode(niemosIterator), fact: fetchData.fact },
        ]);
        setNiemosIterator(niemosIterator + 1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Niemo App</Text>
      <View style={styles.niemoContainer}>
        {niemos.map((n, k) => {
          return (
            <NiemoComponent
              key={k}
              myText={n.name}
              myFact={n.fact}
            ></NiemoComponent>
          );
        })}
      </View>
      <Separator styel={styles.separator} />
      <View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonLeft}
            title="▼"
            color="blue"
            onPress={onClickHandlerLess}
            // onPress={() => Alert.alert("Minus")}
          >
            <Text style={styles.text}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRight}
            title="▲"
            color="red"
            onPress={onClickHandlerMore}
            // onPress={() => Alert.alert("Plus")}
          >
            <Text style={styles.text}>▲</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

const NiemoComponent = (props) => (
  <SafeAreaView style={styles.niemo}>
    <TouchableOpacity
      onPress={() =>
        Alert.prompt("New Title:", "", (text) => {
          Alert.alert(text + props.myText);
        })
      }
    >
      <Image style={styles.image} source={require("./assets/mexico.jpg")} />
    </TouchableOpacity>
    <Text style={styles.subTitle}>{props.myText}</Text>
    <Text style={styles.subTitle}>{props.myFact}</Text>
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
    fontSize: 30,
    marginVertical: 5,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 10,
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 5,
    color: "#000000",
  },
  buttons: {
    width: 350,
    padding: 5,
    borderWidth: 0,
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
  buttonLeft: {
    fontWeight: "bold",
    borderWidth: 10,
    borderColor: "#000099",
    color: "#000099",
    backgroundColor: "#555599",
    borderRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  buttonRight: {
    fontWeight: "bold",
    borderWidth: 10,
    borderColor: "#990000",
    backgroundColor: "#995555",
    borderRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 10,
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
    borderWidth: 0,
    borderColor: "#00000033",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  niemo: {
    borderWidth: 3,
    margin: 5,
    padding: 10,
    borderColor: "#00ff00",
    backgroundColor: "#00ff0033",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default App;
