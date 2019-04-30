
import React, {Component} from 'react';
import {View} from 'react-native';
import WelcomeScreen from './src/screens/Welcome';
import StudentScreen from './src/screens/Student';
import TeacherScreen from './src/screens/Teacher';
import {createSwitchNavigator,createAppContainer} from "react-navigation";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        return <AppNavigator />
      </View>
    );
  }
}


const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Student: StudentScreen,
  Teacher: TeacherScreen,
  
});

export default createAppContainer(AppNavigator);