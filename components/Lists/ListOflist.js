import React from 'react';
import ListItem from './ListItem.js';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class ListOflist extends React.Component {
  constructor(props) {
    super(props);
    console.log("my name is" + this.props.myprop)
  }
  componentWillMount() {
this.setState({data : this.props.myprop})

                  
  }
  render() {
    return (
      <View>
        {
          this.state.data.map((item, index) => {
            return <ListItem key={index} myprops3={()=>this._gotolistitem()} item={item} 
            />
          })
        }
     </View>
    );
  }
  _gotolistitem = () => {
    this.props.myprop2()
  }
}
const styles = StyleSheet.create({
  textInput:{
    color:'#000000',
    alignSelf:'stretch',
    padding:8,
    marginBottom:10,
    backgroundColor:'rgba(122, 186, 122,0.7)',
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:0.6,
    },
});
