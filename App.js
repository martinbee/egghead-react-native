import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  state = {
    todoText: '',
    items: [],
  };

  handleValueChange = todoText => this.setState({ todoText });

  handleAddItem = () => {
    const { todoText, items } = this.state;

    if (!todoText) return;

    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: todoText,
        complete: false,
      }
    ]

    this.setState({ items: newItems, todoText: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.todoText}
          onChange={this.handleValueChange}
          onAddItem={this.handleAddItem}
        />
        <View style={styles.content}>
          <Text>Body</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

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
