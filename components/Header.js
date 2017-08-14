import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Header = ({ toggleAllComplete, value, onChange, onAddItem }) => (
  <View style={styles.header}>
    <TouchableOpacity
      onPress={toggleAllComplete}
    >
      <Text style={styles.toggleIcon}>
        {String.fromCharCode(10003)}
      </Text>
    </TouchableOpacity>
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
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toggleIcon: {
    fontSize: 30,
    color: '#CCC',
  },
  input: {
    flex: 1,
    marginLeft: 16,
    height: 50,
  },
});

export default Header;
