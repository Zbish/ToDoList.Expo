
import React from 'react';

import ListItem from '../components/Lists/ListItem';
import { Text, View, Image, StyleSheet, TextInput, Button,ScrollView,StatusBar } from 'react-native';
import { Avatar,Header } from 'react-native-elements';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
}
  goToList(item) {
    this.props.screenProps.setCurrentListItem(item);
    this.props.navigation.navigate("List");
  }
  componentWillMount() {
    this.setState({
      currentValue: this.props.initialText,
    });
  }
  onChange(val) {
    this.setState({ currentValue: val })
  }
  onPress() {
    this.props.screenProps.addNewList(this.state.currentValue)
    this.setState({ currentValue: "" })
  }
  removeListFromData(item) {
    this.props.screenProps.removeList(item)
  }
  render() {
    console.log("my data" + this.props.screenProps.data)
  done = [],
  undone = []
  myarray = this.props.screenProps.data
  for (var i = 0;i < myarray.length; i++ )
    {  
      var flag = 0
      for(var j = 0 ; j < myarray[i].items.length ; j++)
        {
          if(myarray[i].items[j].done == false)
            {
              flag = 1
              undone.push(myarray[i])
              break
            }
        }
        if(flag == 0)
          {
            done.push(myarray[i])
          
          }
}
    return (
      <View style={styles.wrapper}>
        <StatusBar hidden={true} />
        <Header style={styles.header}
           centerComponent={{ text:'TODOS', style:{color: '#ffff00'},style:{padding:10} }}  />
        <Image style={styles.container} source={require('../assets/images/mario.jpg')} >
          <View style={styles.textcontainer}>
            <TextInput underLineColorAndroid='transparent' placeholderTextColor="black" placeholder='Add New list' style={styles.textInput}
              onChangeText={(val) => this.onChange(val)}
              value={this.state.currentValue}
              onSubmitEditing={() => this.onPress()}
            />
            <Avatar Style={styles.button} small rounded icon={{ name: 'add' }} onPress={() => this.onPress()}
            />
          </View>
          <View style={styles.scrollcontainer}> 
          <ScrollView contentContainerstyle={styles.contentContainer}>
            {
              undone.map((item, index) => {
                return <ListItem key={index} removeList={(item) => this.removeListFromData(item)} goToListItem={() => this.goToList(item)} item={item}
                />
              })
            }
            <Text style={styles.finish}
            >Finish List </Text>
            {
              done.map((item, index) => {
                return <ListItem key={index} removeList={(item) => this.removeListFromData(item)} goToListItem={() => this.goToList(item)} item={item}
                />
              })
            }
          </ScrollView>

          </View>
        

        </Image>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 9,
    width: null,
    padding: 5,
  },
  header:{
backgroundColor: '#0d4fba',
width: null,
flex:1,
justifyContent: 'center',
  },
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  scrollcontainer:{
    flex:9
  },
  contentContainer: {
    flex: 1,
  },
  textInput: {
    flex: 4,
    color: '#000000',
    alignSelf: 'stretch',
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding:5
  },
  finish: {
    color: '#000000',
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 0.6,
  },
});
