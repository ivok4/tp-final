import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, ImageBackground, useAnimation, Animated, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-native-draggable';
import { relativeTimeRounding } from 'moment';



class DraggableView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.ValueXY(), // inits to zero
      };
      this.state.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: this.state.pan.x, // x,y are Animated.Value
            dy: this.state.pan.y,
          },
        ]),
        onPanResponderRelease: () => {
          Animated.spring(
            this.state.pan, // Auto-multiplexed
            {toValue: {x: 0, y: 0}}, // Back to zero
          ).start();
        },
      });
    }
    
    render() {
      return (
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={this.state.pan.getLayout()}>
          {this.props.children}

          <Text>esto es l prueba</Text>
        </Animated.View>

      );
    }
  }
  
  export default withNavigation(DraggableView)