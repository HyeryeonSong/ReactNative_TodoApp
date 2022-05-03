import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DataHead() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1; //month의 범위가 0부터 11임
  const day = d.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#81c784" />
      <View style={styles.block}>
        <Text style={styles.dataText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#ff8a65',
  },
  block: {
    padding: 16,
    backgroundColor: '#ff8a65',
  },
  dataText: {
    fontSize: 18,
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DataHead;