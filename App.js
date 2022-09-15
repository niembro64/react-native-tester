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
  const [fetchData, setFetchData] = useState({ name: "D", fact: "Fact D" });
  const [niemosIterator, setNiemosIterator] = useState(68);
  const [niemos, setNiemos] = useState([
    { name: "A", fact: "Fact A" },
    { name: "B", fact: "Fact B" },
    { name: "C", fact: "Fact C" },
  ]);

  useEffect(() => {
    setNiemos([
      ...niemos,
      { name: String.fromCharCode(niemosIterator), fact: fetchData.fact },
    ]);
    setNiemosIterator(niemosIterator + 1);
  }, [fetchData]);

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
      })
      .then(() => {
        // setNiemos([
        //   ...niemos,
        //   { name: String.fromCharCode(niemosIterator), fact: fetchData.fact },
        // ]);
        // setNiemosIterator(niemosIterator + 1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.textBig, styles.textWhite]}>
        Niemo App
      </Text>
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
            style={[styles.button, styles.buttonLeft]}
            onPress={onClickHandlerLess}
          >
            <Text style={[styles.text, styles.textMedium, styles.textWhite]}>
              ▼
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonRight]}
            onPress={onClickHandlerMore}
          >
            <Text style={[styles.text, styles.textMedium, styles.textWhite]}>
              ▲
            </Text>
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
    <Text style={[styles.subTitle, styles.textMedium, styles.textWhite]}>
      {props.myText}
    </Text>
    <Text style={[styles.subTitle, styles.textSmall, styles.textWhite]}>
      {props.myFact}
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    backgroundColor: "#123",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
  title: {
    textAlign: "center",
    marginVertical: 5,
  },
  subTitle: {
    textAlign: "center",
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    marginVertical: 5,
    color: "#000000",
  },
  textBig: {
    fontSize: 35,
  },
  textMedium: {
    fontSize: 25,
  },
  textSmall: {
    fontSize: 15,
  },
  textWhite: {
    color: "#fff",
  },
  buttons: {
    width: 350,
    padding: 5,
    borderWidth: 0,
    borderColor: "#00000033",
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    fontWeight: "bold",
    // borderWidth: 5,
    borderRadius: 40,
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  separator: {
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  buttonLeft: {
    // borderColor: "#000099",
    backgroundColor: "#555599",
  },
  buttonRight: {
    // borderColor: "#990000",
    backgroundColor: "#995555",
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    // borderWidth: 10,
    // borderColor: "#00000033",
    borderRadius: 40,
    // marginVertical: 5,
    margin: 10,
  },
  niemoContainer: {
    borderWidth: 0,
    borderColor: "#00000033",
    borderRadius: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  niemo: {
    // borderWidth: 3,
    // borderColor: "#009900",
    backgroundColor: "#114433",
    margin: 5,
    // padding: 10,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default App;
