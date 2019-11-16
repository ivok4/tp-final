import React from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#F5F5F5',
    },
    letras: {
        color: '#FFFFFF',
    }
    
});


const Details = (props) => {
    const { navigate } = props.navigation
    return (
        <ScrollView  style={styles.container}>
        <TouchableHighlight>
                <Text>Esta es mi details!</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}
export default withNavigation(Details)