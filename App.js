import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const heightNew = height;
const widthNew = (height * 16) / 9;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://smashed.niembro64.com' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // backgroundColor: '#F5FCFF',
  },
  webview: {
    width: widthNew,
    height: heightNew,
  },
});
