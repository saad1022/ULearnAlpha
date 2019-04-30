import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Button, Text,Icon } from 'native-base';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
              
</Text>
        <Container>
       
        <Content>
        <Button iconLeft>
            <Icon name='people' />
            <Text onPress={() => this.props.navigation.navigate('Student')}> Student </Text>
          </Button>
            
          <Button iconLeft>
            <Icon name='people' />
            <Text onPress={() => this.props.navigation.navigate('Teacher')}> Teacher </Text>
          </Button>
         
            </Content>
      </Container>
      </View>
   
    );
  }
}