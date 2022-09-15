import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableOpacity,
  Animated,
  Text,
  Dimensions,
  Button,
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
        // console.log("getting data from fetch", responseJson);
        // setFetchData(responseJson);
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

  myFadeInView = new FadeInView();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FadeInView
          style={{ backgroundColor: "powderblue" }}
          ref={(ani) => (myFadeInView.fade = ani)}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            Fading in
          </Text>
        </FadeInView>
        <Button
          title="go animate"
          onPress={() => myFadeInView.animatebutton()}
        />
      </View>
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
    // backgroundColor: "#555",
    borderRadius: 10,
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
    maxWidth: 150,
    margin: 5,
    // padding: 10,
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

const screenwidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(50), // Initial value for opacity: 0
    fadeAnim2: new Animated.Value(50),
  };

  componentDidMount() {}

  animatebutton() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: screenheight, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        useNativeDriver: true, // <-- Add this
      }
    ).start();
    Animated.timing(
      // Animate over time
      this.state.fadeAnim2, // The animated value to drive
      {
        toValue: screenwidth, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        useNativeDriver: true, // <-- Add this
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          height: fadeAnim,
          width: fadeAnim2, // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default App;
