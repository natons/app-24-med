import React from 'react';
import { Text, View, Button, Image, Platform, ListView, StyleSheet, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'

import Toolbar from '../lib/Toolbar';
import { getColor } from '../lib/helpers';

const styles = StyleSheet.create({
    /*
     * Removed for brevity
     */
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
  });

export default class ThirdScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Ajustes',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/settings_icon.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}>

            </Image>
        )
    };

    render() {
        const listMain = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            }
        ];

        const listGeneral = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            }
        ];

        return <View style={
                    {
                        flex: 1,
                        //justifyContent: 'center',
                        marginTop: (Platform.OS == 'ios') ? 0 : 24,
                        overflow: 'visible'
                    }
                }>
                    <Toolbar title="Ajustes" color={getColor("#ff5252")}/>
                    <ScrollView>
                        <Text style={{
                            marginLeft: 14,
                            fontSize: 16,
                            marginTop: 20
                        }}>Principal</Text>
                        <List containerStyle={{marginBottom: 20, marginTop: 20}}>
                        {
                            listMain.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                            />
                            ))
                        }
                        </List>
                        <Text style={{
                            marginLeft: 14,
                            fontSize: 16
                        }}>Geral</Text>
                        <List containerStyle={{marginBottom: 20, marginTop: 20}}>
                        {
                            listGeneral.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                            />
                            ))
                        }
                        </List>
                    </ScrollView>
                </View>
    }
}