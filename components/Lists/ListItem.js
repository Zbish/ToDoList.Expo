import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, } from 'react-native';
import { CheckBox, Button, } from 'react-native-elements';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';
export default class ListItem extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <TouchableHighlight style={styles.button1} underlayColor='grey' onPress={() => this.props.goToListItem(this.props.item)}>
                <View style={styles.cont}>
                    <Text style={styles.text}>{this.props.item.items.length}</Text>
                    <Text style={styles.text} >{this.props.item.title}</Text>
                    <Entypo name="list" size={20} color="grey"/>
                    <MaterialIcons name="delete" size={20} color="grey" style={styles.icon} onPress={() => this.props.removeList(this.props.item)} />
                </View>
            </TouchableHighlight>
        </View>
    }
}


const styles = {
    button1:{
        borderColor:'#fff',
        borderRadius:5,
        borderWidth:1, 
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin:2
    },
    cont: {
        flexDirection:'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding:5,
        margin:5,
    },
    text: {
        color: '#000000',
    },
}