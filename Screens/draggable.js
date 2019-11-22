import React,{useState, useEffect} from 'react'
import { UserLocation, Text, View, ScrollView, Title, StyleSheet, Wrapper, Header,Carrusel,List} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-draggable'; 
import {DraggableCore} from 'react-draggable'; 
import Equipo from '../Screens/Equipo'
 


state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
const styles = StyleSheet.create({
	container: {
        backgroundColor: '#F5F5F5',       
        flex: 1,
    },   
    texto:{
        color:'#000000'
    },

    hola:{
        width:1000,
        height:1000,
        backgroundColor: '#F5F5F5',       

    },
});


const Players = (props) => {


    const { getParam } = props.navigation
    
    const data = getParam('data', 'NO-name');
    const equipos = data.map(item => <Equipo item={item}/>)
    



    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    return (
    <ScrollView  style={styles.container}>
        <View  style={styles.hola}>
            {equipos}
        </View>
       </ScrollView>
    )
}
export default withNavigation(Players)