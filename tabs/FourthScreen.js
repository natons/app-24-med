import React from 'react';
import { Text, View, Button, Image, ListView, Platform } from 'react-native';
import { List, ListItem, } from 'react-native-elements';

import Toolbar from '../lib/Toolbar';
import { getColor } from '../lib/helpers';

export default class FourthScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/chat_icon.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}>
            </Image>
        )
    }

    constructor(){
        const data =
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            };
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows([data, data, data, data, data, data, data, data, data, data, data]),
        };
    }

    renderRow (rowData, sectionID) { 
        return (
          <ListItem
            roundAvatar
            key={sectionID}
            title={rowData.name}
            subtitle={rowData.subtitle}
            avatar={{uri:rowData.avatar_url}}
            badge={{ value: 3, textStyle: { color: 'white' }, containerStyle: {  backgroundColor: '#ff5252' } }}
          />
        )
    }

    render() {         
        return <View style={
                    {
                        flex: 1,
                        //justifyContent: 'center',
                        marginTop: (Platform.OS == 'ios') ? 0 : 24,
                    }
                    }>
                    <Toolbar title="Conversas" color={getColor("#ff5252")}/>
                    <List containerStyle={{marginTop: 0}}>
                        <ListView
                            renderRow={this.renderRow}
                            dataSource={this.state.dataSource}
                        />
                    </List>
                </View>
    }
}