import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

const App = () => {
  const [niemosIterator, setNiemosIterator] = useState(68);
  const [niemos, setNiemos] = useState([
    { name: "A", fact: "Fact A", factShort: "Fact A ..." },
    { name: "B", fact: "Fact B", factShort: "Fact B ..." },
    { name: "C", fact: "Fact C", factShort: "Fact C ..." },
  ]);

  const onClickLess = () => {
    niemos.pop();
    setNiemosIterator(niemosIterator - 1 < 65 ? 65 : niemosIterator - 1);
  };

  const onClickMore = () => {
    goForFetch();
  };

  const goForFetch = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((responseJson) => {
        setNiemos([
          ...niemos,
          {
            name: String.fromCharCode(niemosIterator),
            fact: responseJson.fact,
            factShort: responseJson.fact.substr(0, 30) + " ...",
          },
        ]);
        setNiemosIterator(niemosIterator + 1);
      })
      .catch((error) => console.log(error));
  };

  const onClickNiemo = (k) => {
    Alert.prompt(niemos[k].name, "New Title:", [
      { text: "✖", onPress: () => {} },
      {
        text: "✔",
        onPress: (text) => {
          if (text) {
            niemos[k].name = text;
            setNiemos([...niemos]);
          }
        },
      },
    ]);
  };

  // myFadeInView = new FadeInView();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.textBig, styles.textWhite]}>
        Niemo's Cat Facts
      </Text>
      <View style={styles.niemoContainer}>
        {niemos.map((n, k) => {
          return (
            <TouchableOpacity
              key={k}
              onPress={() => {
                onClickNiemo(k);
              }}
            >
              <NiemoComponent
                key={k}
                myText={n.name}
                myFact={n.fact}
                myFactShort={n.factShort}
              ></NiemoComponent>
            </TouchableOpacity>
          );
        })}
      </View>
      <Separator styel={styles.separator} />
      <View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonLeft]}
            onPress={onClickLess}
          >
            <Text style={[styles.text, styles.textMedium, styles.textWhite]}>
              ▼
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonRight]}
            onPress={onClickMore}
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
    <Image style={styles.image} source={require("./assets/mexico.jpg")} />
    <Text style={[styles.subTitle, styles.textMedium, styles.textWhite]}>
      {props.myText}
    </Text>
    <Text
      style={[
        styles.subTitle,
        styles.textSmall,
        styles.textWhite,
        styles.niemoText,
      ]}
    >
      {props.myFactShort}
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
    backgroundColor: "#555599",
  },
  buttonRight: {
    backgroundColor: "#995555",
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    borderRadius: 40,
    margin: 10,
  },
  niemoContainer: {
    borderWidth: 0,
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  niemo: {
    backgroundColor: "#114433",
    maxWidth: 150,
    margin: 5,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 5,
  },
  niemoText: {
    maxWidth: 100,
    margin: 5,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default App;
