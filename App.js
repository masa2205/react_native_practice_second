import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Listitem from './components/Listitem';

export default function App() {
  return (
    <View style={styles.container}>
      <Listitem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
});
