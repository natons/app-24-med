import React from 'react';
import { Text, View, Button, Image, Platform } from 'react-native';
import Toolbar from '../lib/Toolbar';
import { getColor } from '../lib/helpers';

export default class CreateScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Create',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/create_icon.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}>

            </Image>
        )
    }

    render() {
        return <View style={
            {
                flex: 1,
                marginTop: (Platform.OS == 'ios') ? 0 : 24,
            }
        }>
            <Toolbar title="Criar" color={getColor("#ff5252")}/>
            <Text style={{ fontSize: 30 }} >
                Create
            </Text>
        </View>
    }
}