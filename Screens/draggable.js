import React,{useState, useEffect} from 'react'
import { UserLocation, Text, View, ScrollView, SafeAreaView, StyleSheet, Wrapper, Image,Carrusel,List} from 'react-native'
import { withNavigation } from 'react-navigation';
import Equipo from '../Screens/Equipo'
 


const styles = StyleSheet.create({
	container: {
        backgroundColor: '#2C313C',
        flex: 2,
        flexDirection: 'column',
},
titulo:{
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
        marginBottom: 20,
        justifyContent: 'center',
    },
    cardContainer:{
        backgroundColor: '#2C313C',
        flex: 1,
        flexDirection: 'row',
        width:380
    },
    container2: {
        flex: 1,
      },
      item: {
      
      },
      grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,      },
});


const Players = (props) => {


  const { getParam } = props.navigation
  
  const data = getParam('data', 'NO-name');
  const equipos = data.map(item => <Equipo item={item}/>)
  



  const { navigate } = props.navigation
  const {flexDirection, alignItems, justifyContent} = this.state
  const layoutStyle = {flexDirection, justifyContent, alignItems}

  return (
    <View  style={styles.container}>
    <View style={styles.titulo}>
        <Text style={styles.tituloPrincipal}>Equipos</Text>
      </View>
      {/*
  <ScrollView style={styles.cardContainer}>
    <View >
        {equipos}
    </View>
    </ScrollView>
     */}
    <SafeAreaView style={styles.container2}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.grid}>
        {equipos}
    </View>
      </ScrollView>
    </SafeAreaView>
   </View>
  )
}
export default withNavigation(Players)