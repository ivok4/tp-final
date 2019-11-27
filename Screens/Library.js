import React,{useState, useEffect} from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, Button, Data} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';



state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
const styles = StyleSheet.create({
	container: {
        backgroundColor: '#2C313C',       
        flex: 1,

    },  
    logo:{
      alignItems: 'center',

    } ,
    texto:{
        color: '#FFFFFF',
        fontSize:40,
        justifyContent: 'center',


      },
});


const Objects = (props) => {
    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    return (
    <ScrollView  style={styles.container}>
        <View style={[styles.logo]}>
            <Text style={[styles.texto]}>Proximamente</Text>
        </View>               
    </ScrollView>
    )
}
export default withNavigation(Objects)