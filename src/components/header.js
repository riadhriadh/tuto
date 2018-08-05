import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Login </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 15,
    },
    text: {
      
        
        paddingTop: 15,
        color:'white',
        fontSize:20,
        fontWeight: 'bold',
      },
});