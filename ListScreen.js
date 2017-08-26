import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import ListOflist from './components/Lists/ListOflist.js';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: 'welcome my freind',
  };
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.mypropis
      
    }
    
    console.log("my name is" + this.props.mypropis)
  }
  render() {
    return (
      <Image source={require('./assets/images/mario.png')} style={styles.container}>
        <ListOflist myprop={this.state.data} myprop2={()=>this._gotolist()} />
      </Image>
    );
  }
  _gotolist = () => {
    this.props.movetonext()
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignSelf:'stretch',
    width:null,
    padding:20,
  },
});
