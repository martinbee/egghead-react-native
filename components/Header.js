import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Header = ({ value, onChange, onAddItem }) => (
  <View style={styles.header}>
    <TextInput
      style={styles.input}
      placeholder="What needs to be done?"
      blurOnSubmit={false}
      onChangeText={onChange}
      onSubmitEditing={onAddItem}
      returnKeyType="done"
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default Header;
