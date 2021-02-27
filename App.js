import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Config from 'react-native-config';
export default function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Call Api</Text>
      <Text>{Config.API_URL}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
