import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

const Body = ({ items }) => {
  const renderListItem = ({ item }) => (
    <Text key={item.key}>{item.text}</Text>
  );

  return (
    <FlatList
      style={styles.body}
      data={items}
      renderItem={renderListItem}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

export default Body;
