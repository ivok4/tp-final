import React,{useState, useEffect} from 'react'
import { UserLocation, Text, View, ScrollView, Title, StyleSheet, Wrapper, Header,Carrusel,List} from 'react-native'
import { withNavigation } from 'react-navigation';
import { T } from 'antd/lib/upload/utils';

const Equipo = (props) => {
   
    

    return(
        <View>
        <Text>{props.item.slug}</Text>
      </View>
    )
}

export default Equipo