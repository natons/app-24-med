import React from 'react';
import { Text, View, Image, StatusBar, Platform, ScrollView } from 'react-native';
import { Card, Button, Icon, Header, Divider, Avatar, Badge } from 'react-native-elements';

import Toolbar from '../lib/Toolbar';
import { getColor } from '../lib/helpers';

import  MapView, { Marker } from 'react-native-maps';

import SideMenu from 'react-native-side-menu';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'TimeLine',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/timeline_icon.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}>

            </Image>
        )
    }

    constructor(){
        super();
        this.state = {starClick: false, interest: 1};
    }

    btnStarClick = () => {
        this.setState({
            starClick : !this.state.starClick,
            interest: this.state.starClick ? this.state.interest - 1 : this.state.interest + 1
        });
    }

    render() {
        return <View style={
                    {
                        flex: 1,
                        //justifyContent: 'center',
                        backgroundColor: 'white',
                        marginTop: (Platform.OS == 'ios') ? 0 : 0
                    }
                    }>
                    
                    
                        <ScrollView>
                            <Header
                                outerContainerStyles={{
                                    height: 50
                                }}
                                backgroundColor="#f94b4b"
                                statusBarProps={{ backgroundColor: 'red' }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignSelf: 'center'
                                    }}
                                    >
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                        marginRight: 2
                                        }}
                                        onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                                        24MED
                                    </Text>
                                    <Badge containerStyle={{ backgroundColor: 'black', padding: 4}}>
                                        <Text style={{color: 'white', fontSize: 7, alignSelf: 'center'}}>10</Text>
                                    </Badge>
                                </View>
                                <View />
                                <View style={{
                                    flexDirection: 'row',
                                    alignSelf: 'center'
                                }}>
                                    <Icon 
                                        name='search'
                                        color='white'
                                        type='font-awesome'
                                        size={22}
                                        iconStyle={{
                                            marginRight: 8
                                        }}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginRight: 8
                                        }}>
                                        <Icon 
                                            name='star-o'
                                            color='white'
                                            type='font-awesome'
                                            size={24}
                                            iconStyle={{
                                                marginRight: 2
                                            }}
                                        />
                                        <Badge containerStyle={{ backgroundColor: 'black', padding: 4}}>
                                            <Text style={{color: 'white', fontSize: 7, alignSelf: 'center'}}>10</Text>
                                        </Badge>
                                    </View>
                                    <Icon 
                                        name='dots-three-vertical'
                                        color='white'
                                        type='entypo'
                                        size={24}
                                    />
                                    
                                </View>
                            </Header>
                            <Card
                                containerStyle={{
                                    height: 'auto',
                                    paddingBottom: 0
                                    }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    alignSelf: 'center'
                                    }}>
                                    Anúncio
                                </Text>    
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    padding: 4,
                                    }}>
                                    <View style={{
                                        flexDirection: 'row'
                                        }}>
                                        <Avatar
                                            small
                                            rounded
                                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                                            activeOpacity={0.7}
                                            />
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 14,
                                            alignSelf: 'center',
                                            marginLeft: 4
                                            }}>
                                            Fulana de Oliveira
                                        </Text>
                                    </View>
                                    
                                    <View style={{
                                        flexDirection: 'row'
                                        }}>
                                        <Icon 
                                            name='message-circle'
                                            color='black'
                                            type='feather'
                                            size={24}
                                            iconStyle={{
                                                alignSelf: 'flex-end',
                                                marginRight: 4
                                            }}
                                            onPress={() => this.props.navigation.navigate('Tab4')}
                                        />
                                        <Icon 
                                            name='dots-three-vertical'
                                            color='black'
                                            type='entypo'
                                            size={24}
                                            iconStyle={{
                                            }}
                                        />
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'black', marginTop: 10 }} />
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingTop: 10
                                    }}>
                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='hospital-building'
                                                color='black'
                                                type='material-community'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4}}>Santa Helena</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='calendar'
                                                color='black'
                                                type='material-community'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4}}>26/03/2018</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='calendar-clock'
                                                color='black'
                                                type='material-community'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4}}>00:35 às 12:00</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='alert-circle'
                                                color='green'
                                                type='material-community'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4, color: 'green'}}>Disponível</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='cash'
                                                color='green'
                                                type='material-community'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4, color: 'green'}}>R$ 250,00</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            padding: 4
                                            }}>
                                            <Icon 
                                                name='public'
                                                color='black'
                                                type='material-icons'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4}}>Todos</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{marginBottom: 10, paddingTop: 10}}>
                                    Uma descrição do anúncio, com observações ou pedido.
                                </Text>
                                <MapView
                                    style={{
                                        padding: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        height: 95
                                        }}
                                    region={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                    maxZoomLevel={20}
                                    minZoomLevel={18}>
                                    <Marker
                                        coordinate={{
                                            latitude: 37.78825,
                                            longitude: -122.4324
                                        }}>
                                        <Icon 
                                            name='hospital-marker'
                                            color='red'
                                            type='material-community'
                                            size={38}
                                        />
                                    </Marker>
                                </MapView>
                                <View style={{
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon 
                                            name={this.state.starClick == false ? 'star-o' : 'star'}
                                            color='black'
                                            type='font-awesome'
                                            size={24}
                                            onPress={this.btnStarClick}
                                            iconStyle={{
                                            }}
                                        />
                                        <Text
                                            style={{
                                                alignSelf: 'center',
                                                marginLeft: 4
                                            }}
                                            >{String(this.state.interest) + (this.state.interest > 1 ? ' Interessados': ' Interessado')}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            alignSelf: 'center'
                                        }}>
                                        Comentários
                                    </Text>
                                </View>
                            </Card>
                        </ScrollView>
                </View>
    }
}