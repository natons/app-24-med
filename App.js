import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';

import { TabNavigator, DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';
import ThirdScreen from './tabs/ThirdScreen';
import FourthScreen from './tabs/FourthScreen';
import CreateScreen from './tabs/CreateScreen';

var {height, width} = Dimensions.get('window');

var MainScreenNavigator = TabNavigator({
  Tab1: {screen: FirstScreen},
  Tab2: {screen: SecondScreen},
  Tab3: {screen: CreateScreen},
  Tab4: {screen: FourthScreen},
  Tab5: {screen: ThirdScreen},
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      labelStyle: {
          fontSize: 12,
        },
      tabStyle: {
        },
      style: {
        backgroundColor: '#008aed',
        height: 50
        },
      iconStyle: {
        padding: 0
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      }
    }
  }
);

MainScreenNavigator.navigationOptions = {
  title: "Tab example"
};

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <Text style={{
      alignSelf: 'center',
      marginTop: 10
      }}
      onPress={() => {
        const navigateAction = NavigationActions.navigate({
          routeName: 'Home',
        
          params: {},
        
          action: NavigationActions.navigate({ routeName: 'Tab3' }),
        });
        
        props.navigation.dispatch(navigateAction)
        }}>
      Notificações
    </Text>
  </ScrollView>
);

var DrawerLeft = DrawerNavigator({
  Home:     { screen: MainScreenNavigator, }
},
{
  drawerWidth: width - (width * 0.1),
  contentComponent: CustomDrawerContentComponent
}
);

DrawerLeft.navigationOptions = {
  title: 'Timeline',}
;

export default DrawerLeft;


