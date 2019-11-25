import React,{useState, useEffect} from 'react'
import { UserLocation, Text, View, ScrollView, Title, StyleSheet, Wrapper, Image,Carrusel,List} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-draggable'; 
import {DraggableCore} from 'react-draggable'; 
import Equipo from '../Screens/Equipo'
import { TouchableHighlight } from 'react-native-gesture-handler';
 


const styles = StyleSheet.create({
	container: {
    backgroundColor: '#2C313C',       
    flex: 1,
    flexDirection:'row',
},
tituloPrincipal:{
    color: 'white',
    fontSize:40,
    textAlign:'center',
    marginBottom:20,
},
card:{
    flexDirection:'row',
    marginLeft:20,
    justifyContent: 'center',
},
cardContainer:{
    marginLeft:20,
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
      <View>
          <Text style={styles.tituloPrincipal}>Equipos</Text>
        </View>
    <ScrollView style={styles.cardContainer}>
      <View style={styles.card}>
          {equipos}
      </View>
      </ScrollView>
     </ScrollView>
  )
}
export default withNavigation(Players)