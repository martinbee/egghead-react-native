import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <Text>Body</Text>
    </View>
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: { paddingTop: 30 },
    }),
  },
  content: {
    flex: 1,
  }
});

export default App;
