import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Dimensions} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var {height, width} = Dimensions.get('window');

    return (
      <View style={{
        alignSelf: 'center'
        }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          >
          <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
          <View style={{
            backgroundColor: '#dbddd0',
            height: '100%',
            opacity: 0.7,
            }}>
          </View>
          </TouchableHighlight>
          <View style={{
              backgroundColor: 'red',
              position: 'absolute',
              width: width * 0.90,
              height: height * 0.82,
              marginTop: (height * 0.072),
              marginBottom: (height * 0.108),
              marginLeft: (width * 0.1) /2,
              marginRight: (width * 0.1) /2,
              }}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>
            12 Comentários
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
