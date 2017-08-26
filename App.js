import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import ListScreen from './ListScreen.js';
import listofitem from './Listofitem.js'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     data : [{id:"1",name:"family",massage:3},
     {id:"2",name:"buisnes",massage:3},
     {id:"3",name:"trip",massage:3},
     {id:"4",name:"fun",massage:3},
     {id:"5",name:"kids",massage:3},
     {id:"6",name:"gulot",massage:3}]
        ,dataDelete : [],
   } 

  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        {/* <Text onPress={this._handlePress}>HomeScreen!</Text>
        <Text onPress={this._startapp}>List</Text> */}
        <ListScreen  mypropis={this.state.data} movetonext={()=>this._gotolistofitem()}/>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
  _startapp = () => {
    this.props.navigation.navigate('Main');
  }
  _gotolistofitem = () => {
    this.props.navigation.navigate('List');
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Main :{
      screen: ListScreen ,
  },
  List:{
      screen : listofitem,
  },
});