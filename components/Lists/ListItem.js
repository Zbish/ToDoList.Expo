import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
 
} from 'react-native';
import { CheckBox, Button,  } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';
export default class ListItem extends React.Component {
  
  constructor(props) {
    super(props);
  }


    render() {
        return <View style={styles.container} >
                <View style={styles.containerspot} >
                  <Text style={styles.textInput} onPress={()=>this._gotolistitem234()}>{this.props.item.massage}</Text>
                    {/* <Text style={styles.textInput}>{this.props.item.id}</Text> */}
                    <Text style={styles.textInput} >{this.props.item.name}</Text>
                    </View>
                    <View style={styles.containericon}>
                    <Entypo name="list" size={20} color="black" style={styles.icon}/>
                    </View>
                </View>
    }
    _gotolistitem234 = () => {
        this.props.myprops3()
      }
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'rgba(255,255,255,0.9)',
        borderColor:'#fff',
        borderRadius:10,
        borderWidth:0.6, 
        margin :2,
        },
    containerspot:{
        flexDirection:"row",
        flex:1,
    },
    textInput:{
        color:'#000000',
        padding:15, 
    },
    icon:{
        padding:15, 
        color:"grey",
    },
    containericon:{
        flexDirection:"row",
        flex:1,
        justifyContent:'flex-end',
flex:1,
    },
}