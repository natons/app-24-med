import React from 'react';
import { Text, View, Button, Image, Platform } from 'react-native';



export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Social',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/social_icon.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}>

            </Image>
        )

    }

    render() {
        return <View style={
            {
                flex: 1,
                backgroundColor: 'blue'
            }
        }>
            <Text style={{ fontSize: 30 }} >
                This is tab 2
            </Text>
        </View>
    }
}