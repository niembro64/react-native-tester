import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const heightNew = height;
const widthNew = (height * 16) / 9;

export default function App() {
  const url = 'https://smashed.niembro64.com';
  // const url = 'file:///smashed_build/index.html';

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <WebView source={{ uri: url }} style={styles.webview} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // backgroundColor: '#F5FCFF',
    padding: 0,
    margin: 0,
  },
  webview: {
    width: widthNew,
    height: heightNew,
    padding: 0,
    margin: 0,
  },
});
