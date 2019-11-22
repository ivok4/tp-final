import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, ImageBackground, useAnimation, Animated, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-native-draggable';
import { relativeTimeRounding } from 'moment';
/*

class DraggableView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.ValueXY(), // inits to zero
      };
      this.state.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: this.state.pan.x, // x,y are Animated.Value
            dy: this.state.pan.y,
          },
        ]),
        onPanResponderRelease: () => {
          Animated.spring(
            this.state.pan, // Auto-multiplexed
            {toValue: {x: 0, y: 0}}, // Back to zero
          ).start();
        },
      });
    }
    
    render() {
      return (
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={this.state.pan.getLayout()}>
          {this.props.children}

          <Text>esto es l prueba</Text>
        </Animated.View>

      );
    }
  }
  */

function handleClick() {
    console.log('The link was clicked.');
}

const Court = (props) => {

    

    const { navigate } = props.navigation
    const [movimientos1, setMovimientos1] = useState([{posx:19,posy:140}]);
    const [movimientos2, setMovimientos2] = useState([{posx:95,posy:140}]);
    const [movimientos3, setMovimientos3] = useState([{posx:170,posy:140}]);
    const [movimientos4, setMovimientos4] = useState([{posx:250,posy:140}]);
    const [movimientos5, setMovimientos5] = useState([{posx:320,posy:140}]);

    //Para mover los objetos
    const [styleMovimientos1, setStyleMovimientos1] = useState({posx:19,posy:140});
    const [styleMovimientos2, setStyleMovimientos2] = useState({posx:95,posy:140});
    const [styleMovimientos3, setStyleMovimientos3] = useState({posx:170,posy:140});
    const [styleMovimientos4, setStyleMovimientos4] = useState({posx:250,posy:140});
    const [styleMovimientos5, setStyleMovimientos5] = useState({posx:320,posy:140});


    const [count, setCount] = useState([]);

    useEffect( () => {
        console.log('updated 1', movimientos1)
        console.log('updated 2', movimientos2)
        console.log('updated 3', movimientos3)
        console.log('updated 4', movimientos4)
        console.log('updated 5', movimientos5)
    },[movimientos1,movimientos2,movimientos3,movimientos4,movimientos5])


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
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        navbar: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
    
        },
        prueba:{
            backgroundColor: '#2C313C',
            height:30,

        },
    });
   
    
    const handleMovUpdate = (move, nativeEvent) => {
        const newPos = {
            posx: Math.round(nativeEvent.pageX),
            posy: Math.round(nativeEvent.pageY)
        }
        switch (move) {
            case 1:
                setMovimientos1(movimientos1 => [...movimientos1,newPos])
                break;
            case 2:
                setMovimientos2(movimientos2 => [...movimientos2,newPos])
                break;
            case 3:
                setMovimientos3(movimientos3 => [...movimientos3,newPos])
                break;
            case 4:
                setMovimientos4(movimientos4 => [...movimientos4,newPos])
                break;
            case 5:
                setMovimientos5(movimientos5 => [...movimientos5,newPos])
                break;
        
            default:
                break;
        }    
    }

    const play = () => {
        const intervaloMov = 1000;
        console.log('--------Play mode!-------')

        movimientos1.forEach((movimiento,index) => {
            setTimeout(() => {
                console.log("1 === POS X: ", movimiento.posx, "POS Y", movimiento.posy ) 
                setStyleMovimientos1({posx:movimiento.posx,posy:movimiento.posy})
            }, intervaloMov * (index + 1));
        });

        movimientos2.forEach((movimiento,index) => {
            setTimeout(() => {
                console.log("2 === POS X: ", movimiento.posx, "POS Y", movimiento.posy ) 
                setStyleMovimientos2({posx:movimiento.posx,posy:movimiento.posy})
            }, intervaloMov * (index + 1));
        });
        movimientos3.forEach((movimiento,index) => {
            setTimeout(() => {
                console.log("3 === POS X: ", movimiento.posx, "POS Y", movimiento.posy ) 
                setStyleMovimientos3({posx:movimiento.posx,posy:movimiento.posy})
            }, intervaloMov * (index + 1));
        });
        movimientos4.forEach((movimiento,index) => {
            setTimeout(() => {
                console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy ) 
                setStyleMovimientos4({posx:movimiento.posx,posy:movimiento.posy})
            }, intervaloMov * (index + 1));
        });
        movimientos5.forEach((movimiento,index) => {
            setTimeout(() => {
                console.log("5 === POS X: ", movimiento.posx, "POS Y", movimiento.posy )  
                setStyleMovimientos5({posx:movimiento.posx,posy:movimiento.posy})
            }, intervaloMov * (index + 1));
        });
    }
 

    
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                resizeMode={'stretch'} // or cover
                style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
                source={require('../assets/fondo-cancha.png')}>
                <ScrollView>
                </ScrollView>
            </ImageBackground>
           
            <Draggable style={[styles.circle]}
                renderSize={25}
                reverse={false}
                renderColor='#C4342C'
                x={styleMovimientos1.posx}
                y={styleMovimientos1.posy}
                renderText='1'
                identifier={1}
                pressDragRelease={({ nativeEvent }) => handleMovUpdate(1, nativeEvent)}
            />
            <Draggable
                renderSize={25}
                reverse={false}
                renderColor='#C4342C'
                x={styleMovimientos2.posx}
                y={styleMovimientos2.posy}
                renderText='2'
                //pressDragRelease={({ nativeEvent }) => handleMovUpdate(2, nativeEvent)}
                pressDragRelease={({ nativeEvent }) => handleMovUpdate(2, nativeEvent)}
            />
            <Draggable
               
                renderSize={25}
                reverse={false}
                renderColor='#C4342C'
                x={styleMovimientos3.posx}
                y={styleMovimientos3.posy}
                renderText='3'
                pressDragRelease={({ nativeEvent }) => handleMovUpdate(3, nativeEvent)}
            />
            <Draggable
                renderSize={25}
                reverse={false}
                renderColor='#C4342C'
                x={styleMovimientos4.posx}
                y={styleMovimientos4.posy}
                renderText='4'
                id='4'
                pressDragRelease={({ nativeEvent }) => handleMovUpdate(4, nativeEvent)}
            />
            <Draggable
                
                renderSize={25}
                reverse={false}
                renderColor='#C4342C'
                x={styleMovimientos5.posx}
                y={styleMovimientos5.posy}
                renderText='5'
                pressDragRelease={({ nativeEvent }) => handleMovUpdate(5, nativeEvent)}
            />

            <View style={[styles.navbar]}>
                <TouchableHighlight onPress={() => alert("hola")} >
                    <Ionicons style={[styles.menu]} name="ios-save" size={50} color="black" />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => play()} >
                    <Ionicons style={[styles.menu]} name="ios-play" size={50} color="black" />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => alert("hola")} >
                    <Image
                        source={require('../assets/logo-record.png')}
                        fadeDuration={0}
                        style={{ width: 35, height: 35 }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => alert("hola")} >
                    <Image
                        source={require('../assets/logo-pelota.png')}
                        fadeDuration={0}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => alert("hola")} >
                    <Ionicons style={[styles.menu]} name="ios-refresh" size={50} color="black" />
                </TouchableHighlight>
            </View>     
                    
    </View>





    )
}
export default withNavigation(Court)

