import React, { Component } from 'react';
import { StyleSheet, View, Platform, ListView} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class App extends Component {

  state = {
    allComplete: false,
    todoText: '',
    items: [],
    dataSource: ds.cloneWithRows([]),
  };

  setSource = (items, itemsDataSource, otherState = {}) => {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState,
    });
  }

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

    this.setSource(newItems, newItems, { todoText: '' });
  }

  handleToggleAllComplete = () => {
    const { items, allComplete } = this.state;

    const completeStatus = !allComplete;
    const toggledItems = items
      .map(item => ({ ...item, complete: completeStatus }));

    this.setSource(toggledItems, toggledItems, { allComplete: !allComplete });
  }

  render() {
    const { todoText, dataSource } = this.state;

    return (
      <View style={styles.container}>
        <Header
          toggleAllComplete={this.handleToggleAllComplete}
          value={todoText}
          onChange={this.handleValueChange}
          onAddItem={this.handleAddItem}
        />
        <Body dataSource={dataSource} />
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
