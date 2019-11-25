import React,{useState, useEffect} from 'react'
import { UserLocation, Text, View, ScrollView, Image, StyleSheet, Wrapper, Header,Carrusel,List} from 'react-native'
import { withNavigation } from 'react-navigation';
import { T } from 'antd/lib/upload/utils';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';


const Equipo = (props) => {
   
  const styles = StyleSheet.create({
    container: { 
      backgroundColor:'#2C313C',
      flex: 1,
      width: 380,
  },
      
    card: {
    width:150,
    height:300,
      backgroundColor: '#'+props.item.PrimaryColor,
      marginLeft:20,
    },
    titulo:{
      color: 'white',
      fontSize:35,
      textAlign:'center',
  },
  tituloPrincipal:{
    color: 'white',
    fontSize:40,
    textAlign:'center',
},
  });

console.log('#'+props.item.PrimaryColor)

    return(        
      <View  style={styles.card}>
        <SvgUri
          width="100%"
          height="70%"
          uri= {props.item.WikipediaLogoUrl}
        />
            <Text style={styles.titulo}>{props.item.City}</Text>
      </View>
    )
}

export default Equipo