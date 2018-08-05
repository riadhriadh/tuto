import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...'
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...'
  }
];

export default class Home extends Component {
  _renderSectionTitle(section) {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View >
        <Text >{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
