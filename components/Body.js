import React from 'react';
import { StyleSheet, ListView, Keyboard, Text, View } from 'react-native';

import Row from './Row';

const Body = ({ dataSource }) => {
  const renderRow = row => <Row {...row} />;

  const renderSeparator = (sectionId, rowId) => (
    <View key={rowId} style={styles.separator} />
  );

  return (
    <ListView
      style={styles.list}
      enableEmptySections
      dataSource={dataSource}
      onScroll={() => Keyboard.dismiss()}
      renderRow={renderRow}
      renderSeparator={renderSeparator}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
  }
});

export default Body;
