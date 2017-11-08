import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, } from 'react-native';
import { CheckBox, Button, } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default class MyListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return <View>
            <TouchableHighlight style={styles.button1} underlayColor='grey' onPress={() => this.props.chackboxpress(this.props.item.name)}>
            <View style={styles.cont}>
                    <CheckBox size={15} center={true} style={styles.checkbox} onPress={() => this.props.chackboxpress(this.props.item.name)}
                        checked={this.props.item.done} />
                    <Text style={styles.textInput}>{this.props.item.name}</Text>
                    <MaterialIcons name="delete" size={20} style={styles.icon} color="grey" onPress={() => this.props.onRemove(this.props.item.name)} />
                </View>
            </TouchableHighlight>
        </View>
    }
}


const styles = {
    button1: {
        borderColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin: 2
    },
    cont: {
        flexDirection:'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding:5,
    },
}