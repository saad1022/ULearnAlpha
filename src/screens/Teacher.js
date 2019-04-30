import React, { Component } from 'react';
import { Button, Text, View ,StyleSheet} from 'react-native';

export default class TeacherScreen extends React.Component {
    render() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
              onPress={() => this.props.navigation.navigate('Welcome')}  
              
              color="#841584"
              
              title="Teacher main screen"
            />
          </View>
     
      );
    }
  }