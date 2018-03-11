import React from 'react';
import { Text, View, Image, StatusBar, Platform, ScrollView, Dimensions } from 'react-native';
import { Card, Button, Icon, Header, Divider, Avatar, Badge } from 'react-native-elements';

import Toolbar from '../lib/Toolbar';
import { getColor } from '../lib/helpers';

import  MapView, { Marker } from 'react-native-maps';

import SideMenu from 'react-native-side-menu';

import ModalExample from '../Modal';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'TimeLine',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/timeline_icon.png')}
                style={{width: 24, height: 24, tintColor: '#fafafa'}}>

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
                        backgroundColor: '#dbddd0',
                        marginTop: (Platform.OS == 'ios') ? 0 : 0
                    }
                    }>
                    
                    
                        <ScrollView>
                            <Header
                                outerContainerStyles={{
                                    height: 50,
                                    borderColor: '#fafafa'
                                }}
                                backgroundColor="#008aed"
                                statusBarProps={{ backgroundColor: '#009aed' }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignSelf: 'center'
                                    }}
                                    >
                                    <Text style={{
                                        color: '#fafafa',
                                        fontSize: 18,
                                        marginRight: 2
                                        }}
                                        onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                                        24MED
                                    </Text>
                                    <Badge containerStyle={{ backgroundColor: '#c41b2c', padding: 4, borderColor: '#fafafa', borderWidth: 0.5}}>
                                        <Text style={{color: '#fafafa', fontSize: 7, alignSelf: 'center'}}>10</Text>
                                    </Badge>
                                </View>
                                <View />
                                <View style={{
                                    flexDirection: 'row',
                                    alignSelf: 'center'
                                }}>
                                    <Icon 
                                        name='search'
                                        color='#fafafa'
                                        type='material-icons'
                                        size={24}
                                        iconStyle={{
                                            marginRight: 8
                                        }}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginRight: 6
                                        }}>
                                        <Icon 
                                            name='star'
                                            color='#fafafa'
                                            type='material-community'
                                            size={24}
                                            iconStyle={{
                                                marginRight: 2
                                            }}
                                        />
                                        <Badge containerStyle={{ backgroundColor: '#c41b2c', padding: 4, borderColor: '#fafafa', borderWidth: 0.5}}>
                                            <Text style={{color: '#fafafa', fontSize: 7, alignSelf: 'center'}}>10</Text>
                                        </Badge>
                                    </View>
                                    <Icon 
                                        name='more-vert'
                                        color='#fafafa'
                                        type='material-icons'
                                        size={24}
                                    />
                                    
                                </View>
                            </Header>
                            <Card
                                containerStyle={{
                                    height: 'auto',
                                    paddingBottom: 0,
                                    backgroundColor: '#fafafa',
                                    alignSelf: 'flex-start',
                                    borderColor: 'transparent',
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginTop: 7,
                                    width: Dimensions.get('window').width
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
                                            name='chat'
                                            color='black'
                                            type='material-icons'
                                            size={24}
                                            iconStyle={{
                                                alignSelf: 'flex-end',
                                                marginRight: 4
                                            }}
                                            onPress={() => this.props.navigation.navigate('Tab4')}
                                        />
                                        <Icon 
                                            name='more-vert'
                                            color='black'
                                            type='material-icons'
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
                                                color='#008aed'
                                                type='material-icons'
                                                size={24}
                                                iconStyle={{
                                                    alignSelf: 'center',
                                                    paddingRight: 6
                                                    }}
                                                />
                                            <Text style={{marginTop:4, color: '#008aed'}}>Todos</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{marginBottom: 10, paddingTop: 10}}>
                                    Uma descrição do anúncio, com observações ou pedido.
                                </Text>
                                <MapView
                                    customMapStyle={
                                        [
                                            {
                                                "featureType": "administrative.land_parcel",
                                                "elementType": "all",
                                                "stylers": [
                                                    {
                                                        "visibility": "off"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "landscape.man_made",
                                                "elementType": "all",
                                                "stylers": [
                                                    {
                                                        "visibility": "off"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "poi",
                                                "elementType": "labels",
                                                "stylers": [
                                                    {
                                                        "visibility": "off"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road",
                                                "elementType": "labels",
                                                "stylers": [
                                                    {
                                                        "visibility": "simplified"
                                                    },
                                                    {
                                                        "lightness": 20
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.highway",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "hue": "#f49935"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.highway",
                                                "elementType": "labels",
                                                "stylers": [
                                                    {
                                                        "visibility": "simplified"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.arterial",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "hue": "#fad959"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.arterial",
                                                "elementType": "labels",
                                                "stylers": [
                                                    {
                                                        "visibility": "off"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.local",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "visibility": "simplified"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.local",
                                                "elementType": "labels",
                                                "stylers": [
                                                    {
                                                        "visibility": "simplified"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "transit",
                                                "elementType": "all",
                                                "stylers": [
                                                    {
                                                        "visibility": "off"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "water",
                                                "elementType": "all",
                                                "stylers": [
                                                    {
                                                        "hue": "#a1cdfc"
                                                    },
                                                    {
                                                        "saturation": 30
                                                    },
                                                    {
                                                        "lightness": 49
                                                    }
                                                ]
                                            }
                                        ]
                                    }
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
                                    //maxZoomLevel={20}
                                    //minZoomLevel={17}
                                    >
                                    <Marker
                                        coordinate={{
                                            latitude: 37.78825,
                                            longitude: -122.4324
                                        }}>
                                        <Icon 
                                            name='hospital-marker'
                                            color='#c41b2c'
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
                                            name={this.state.starClick == false ? 'star-border' : 'star'}
                                            color={this.state.starClick == false ? 'black' : '#008aed'}
                                            type='material-icons'
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
                                    <ModalExample/>
                                </View>
                            </Card>
                        </ScrollView>
                </View>
    }
}