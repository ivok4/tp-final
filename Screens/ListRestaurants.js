import React from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation';

const List = (props) => {
    const { navigate } = props.navigation
    return (
        <ScrollView>
            <TouchableHighlight
                onPress={() => navigate('Details')}
            >
                <Text>Esta es mi List!</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}
export default withNavigation(List)