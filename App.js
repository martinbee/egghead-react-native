import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
    const { todoText, items } = this.state;

    return (
      <View style={styles.container}>
        <Header
          value={todoText}
          onChange={this.handleValueChange}
          onAddItem={this.handleAddItem}
        />
        <Body items={items} />
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
});
