import React,{useState, useEffect} from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, Header, Data} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';



const styles = StyleSheet.create({
	container: {
        backgroundColor: '#2C313C',       
        flex: 1,
    },
    letras: {
        color: '#FFFFFF',
        fontSize:30,
    },
    letrasBold:{
        color: '#FFFFFF',
        fontSize:30,
        fontWeight: 'bold',
    },
  
     icon: {
        width: 80,
        height: 80,
        padding: 25,
        margin: 5,
        flexGrow:1,
        alignItems: 'center',
        justifyContent:'center',
      },
      layout: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 120,
      },
      logo:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
      box: {
        padding: 25,
        margin: 5,
        justifyContent: 'space-around',
      },
      menu:{
        paddingLeft:10,
      },
});


const Home = (props) => {
  

  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/teams?key=0138b6d456094a929e46d2a94aee14fe`);  
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        setData(json)
        setIsLoading(false)
    } catch (error) {
        console.log(error);
    }
}

    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    
    return (
        
    <ScrollView  style={styles.container}>
      
      <View style={[styles.logo]}>
             <Text style={styles.letras}>BASKETBALL</Text>
            <Text style={styles.letrasBold}>LIBRO DE JUGADAS</Text>
        </View>
         <View style={[styles.layout, layoutStyle]}>
           <View>
            <TouchableHighlight
                    onPress={() => navigate('Court')}

            >
                <Image style={styles.icon} source={require('../../proyecto/assets/pen.png')} />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight
                    onPress={() => navigate('Library')}
            >
                <Image style={styles.icon} source={require('../../proyecto/assets/library.png')} />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight
                    onPress={() => navigate('Players')}
            >
                <Image style={styles.icon} source={require('../../proyecto/assets/players.png')} />
            </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight
                    onPress={() => navigate('draggable', { data })}
            >

                <Image style={styles.icon} source={require('../../proyecto/assets/objects.png')} />
            </TouchableHighlight>
         </View>
         
         </View>
    </ScrollView>
    )
}
export default withNavigation(Home)