import React,{useState, useEffect} from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, ImageBackground,  useAnimation, Animated, Dimensions} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-native-draggable';
import { FaRegSave } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 100,
    height: 100,
},
  container: {
    backgroundColor: '#2C313C',       
    flex: 1,
    width: "100%",
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: "100%",
    height: '100%',
    flexDirection: 'column'
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
navbar:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

},
});

function handleClick() {
  console.log('The link was clicked.');
}
/*

function Animation() {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500
    }).start();
  }, []);

  return (
    <Animated.Text style={{ opacity }}>Example text</Animated.Text>
  );
}
*/

function timeFunction(movimientos) {
  setTimeout(function (){ 
    for(i=0; i=movimientos.lenght;i++){
      return(
    <Draggable
    renderSize={25} 
    reverse={false} 
    renderColor='#C4342C' 
    X={0} 
    y={140}  
    renderText='1'
    identifier={1}
    />
      )

  }
    }, 1000);
    console.log(movimientos);
}

function play(movimientos){
  for(i=0; i=movimientos.lenght;i++){
  
}
   console.log(movimientos)
}


const Court = (props) => {
    const { navigate } = props.navigation
    const [movimientos, setMovimientos] = useState([0]);
    const [movimientos1, setMovimientos1] = useState([]);
    const [movimientos2, setMovimientos2] = useState([]);
    const [movimientos3, setMovimientos3] = useState([]);
    const [movimientos4, setMovimientos4] = useState([]);
    const [count, setCount] = useState([]);


    return (
    
<View style={{flex: 1}}>
<ImageBackground
  resizeMode={'stretch'} // or cover
  style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
  source={ require('../assets/fondo-cancha.png') }>
  <ScrollView>
  </ScrollView>
</ImageBackground>
<Draggable
renderSize={25} 
reverse={false} 
renderColor='#C4342C' 
x={19}
y={140}  
renderText='1'
identifier={1}
pressDragRelease={({ nativeEvent }) => {
  setMovimientos(movimientos => [
    ...movimientos,{
      posx:nativeEvent.posx,
    }
  ])
  console.log(movimientos)

  }
}
/>
<Draggable 
renderSize={25} 
reverse={false} 
renderColor='#C4342C' 
offsetX={-80} 
offsetY={-200} 
renderText='2'
pressDragRelease={({ nativeEvent }) => {
  setMovimientos1(movimientos1 => [
    ...movimientos1,{
      posx:nativeEvent.pageX,
      posy:nativeEvent.pageY,
      
    }
  ])
  console.log()
  }
}
/>
<Draggable 
renderSize={25} 
reverse={false} 
renderColor='#C4342C' 
offsetX={0} 
offsetY={-200} 
renderText='3'
pressDragRelease={({ nativeEvent }) => { console.log(nativeEvent.pageY);}}
/>
<Draggable 
renderSize={25} 
reverse={false} 
renderColor='#C4342C' 
offsetX={80} 
offsetY={-200} 
renderText='4'
id='4'
pressDragRelease={({ nativeEvent }) => { console.log(nativeEvent.locationY, nativeEvent.locationX);}}
/>
<Draggable 
renderSize={25} 
reverse={false} 
renderColor='#C4342C' 
offsetX={160} 
offsetY={-200} 
renderText='5'
pressDragRelease={({ nativeEvent }) => { console.log(nativeEvent.locationY, nativeEvent.locationX);}}
/>

  <View style={[styles.navbar]}>
  <TouchableHighlight onPress={() =>   alert("hola")} >
    <Ionicons style={[styles.menu]} name="ios-save" size={50} color="black" />
  </TouchableHighlight>
  <TouchableHighlight onPress={() =>   play(movimientos)} >
    <Ionicons style={[styles.menu]} name="ios-play" size={50} color="black" />
  </TouchableHighlight>
  <TouchableHighlight onPress={() =>   alert("hola")} >
    <Image
            source={require('../assets/logo-record.png')}
            fadeDuration={0}
            style={{width: 35, height: 35}}
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() =>   alert("hola")} >
          <Image
            source={require('../assets/logo-pelota.png')}
            fadeDuration={0}
            style={{width: 50, height: 50}}
            />
          </TouchableHighlight>
    <TouchableHighlight onPress={() =>   alert("hola")} >
      <Ionicons style={[styles.menu]} name="ios-refresh" size={50} color="black"  />
    </TouchableHighlight>
  </View>
</View>





    )
}
export default withNavigation(Court)

