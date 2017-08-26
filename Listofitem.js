import React from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  SectionList,
  Image,
} from 'react-native';

export default class Listofitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image source={require('./assets/images/todolist.jpg')} style={styles.container}>
        
     </Image>
    );
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
  logocontainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
});
