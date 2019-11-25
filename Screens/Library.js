import React,{useState, useEffect} from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, Button, Data} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-draggable'; 
import {DraggableCore} from 'react-draggable'; 
 



const styles = StyleSheet.create({
container: { 
  backgroundColor: '#2C313C',
  flex: 1,
  width: "100%",
  height: '100%',
  flexDirection: 'row',
},
  viewStyleOne: {
    width:10,
    height:40,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'#b642f4',
  },
  viewStyleTwo: {
    width:200,
    height:40,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'red',
  },
  viewStyleThree: {
    width:300,
    height:40,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'blue',
  },
  textStyle:{
    textAlign:'center'
  },
  tituloPrincipal:{
    color: 'white',
    fontSize:40,
    textAlign:'center',
    flexDirection: 'column',
    marginBottom:20,
},
});


const Players = (props) => {
    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    return (
        <View style={styles.container}>
          <View>
                    <Text style={styles.tituloPrincipal}>Equipos</Text>
                </View>
        <View style={styles.viewStyleOne}>
          <Text style={styles.textStyle}> 1 </Text>
        </View>
        <View style={styles.viewStyleTwo}>
          <Text style={styles.textStyle}> 2 </Text>
        </View>
        <View style={styles.viewStyleThree}>
          <Text style={styles.textStyle}> 3 </Text>
        </View>
      </View>
    )
}
export default withNavigation(Players)