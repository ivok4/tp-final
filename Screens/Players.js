import React,{useState, useEffect} from 'react'
import { Dimensions, Text, View, ScrollView, TouchableHighlight, StyleSheet, Button, CameraRoll} from 'react-native'
import { withNavigation } from 'react-navigation';



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
    group: {  
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 100,
     },
     edit:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      color: 'white',
      marginBottom: 50,
      fontSize:25,
      
     },
     contenedor:{
      width:100,
     },
});

const Players = (props) => {
    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}


    

    
    return (
    <ScrollView  style={[styles.container]}>
        <View style={[styles.logo]}>
        <TouchableHighlight 
        style = {{
            width:100,
            height:90,
            color:'#FFFFFF',
            marginLeft: 300,

        }}
                    onPress={() => alert('Proximamente') }
                    
            >
            <Text style={[styles.edit]} >Editar</Text>
            </TouchableHighlight>

            <View style={[styles.group]}>
            <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
                >
       
      <Text style={{color: 'white'}}> 1 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 2 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 3 </Text>
    </TouchableHighlight>
    </View>
    <View style={[styles.group]}>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }

    >
      <Text style={{color: 'white'}}> 4 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 5 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 6 </Text>
    </TouchableHighlight>
    </View>
    <View style={[styles.group]}>

    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 7 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 8 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 9 </Text>
    </TouchableHighlight>
    </View>
    <View style={[styles.group]}>

    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 10 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 11 </Text>
    </TouchableHighlight>
    <TouchableHighlight
                        style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: 50,
                height: 50,
                backgroundColor:'#C4342C',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
            onPress = { () => alert('Proximamente!') }
    >
      <Text style={{color: 'white'}}> 12 </Text>
    </TouchableHighlight>
    </View>
 
        </View>               
    </ScrollView>
    )
}
export default withNavigation(Players)