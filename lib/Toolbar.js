//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'

import { Typo } from './Typography'
import { getColor } from './helpers'

export default class Toolbar extends Component {
  render() {
    const {
      color,
      title
    } = this.props

    return (
        <View style={[ styles.toolbar, { backgroundColor: getColor(color) } ]}>
          <Text style={[ styles.title, Typo.toolbarTitle ]} >
            {title}
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 54,
    justifyContent: 'center'
  },
  title: {
    marginLeft: 14,
    color: 'white',
    marginTop: (Platform.OS == 'ios') ? 14 : 0
  }
})
