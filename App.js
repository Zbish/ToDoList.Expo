import React from 'react';
import { StackNavigator } from 'react-navigation';
import ListScreen from './screens/List.js';
import HomeScreen from './screens/Home.js'
import { Header, icon } from 'react-native-elements';
import { View,AsyncStorage } from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        title: 'groceries list',
        done: false,
        items: [
          { name: 'tomatoi', done: false },
          { name: 'bread', done: false },
          { name: 'milk', done: false },
        ],
      }, {
        title: ' missions list',
        done: false,
        items: [
          { name: 'wake up', done: true },
          { name: 'eat', done: true },
        ]
      }
      ]
    }
  }
  setName(){
    myArray = this.state.data
   var list = {
     title: "my task",
     done: false,
     items: [
       {name: "buy stuff", done: true},
       {name: "sell somthing",done : true},
     ]
   };
   myArray.push(list);
 try {
   AsyncStorage.setItem('@MySuperStore:key',JSON.stringify(myArray));
 } catch (error) {
   // Error saving data
 }
}
async getname(){
 try {
   value = await AsyncStorage.getItem('@MySuperStore:key');
   if (value !== null){
     // We have data!!
     this.setState({data : JSON.parse(value)})
   }
   else{this.setState({data : [{name :"null"}]})
   }
 } catch (error) {
   // Error retrieving data
 }
}
  markItemDone(item, subItemName) {
    //get the specific item from state
    //change the list item to done
    //setState with the new list
  }
  updateList(list) {

  }
  AddList(name) {
    var myArray = this.state.data
    var list = {
      title: name,
      done: false,
      items: [
      ]
    };
    myArray.push(list);
    this.setState({ data: myArray });

  }
  removeList(item) {
    var myArray = this.state.data
    var nameKey = item.title
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].title === nameKey) {
        myArray.splice(i, 1);
      }
    }
    this.setState({ data: myArray });
  }
  setCurrentListItem(item) {
    this.setState({ currentItem: item });
  }
  addItemToList(item) {
    var myArray = this.state.data
    var nameKey = item.title
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].title === nameKey) {
        myArray[i] = item
      }
    }
    this.setState({ data: myArray });
  }
  removeItemFromList(item) {
    var myArray = this.state.data
    var nameKey = item.title
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].title === nameKey) {
        myArray[i] = item
      }
    }
    this.setState({ data: myArray });
  }
  MarkItem(item) {
    var myArray = this.state.data
    var nameKey = item
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].title === nameKey) {
        myArray[i].done = !myArray[i].done
      }
    }
    this.setState({ data: myArray });
  }
  render() {
    return <Nav screenProps={{
      data: this.state.data,
      setCurrentListItem: (item) => this.setCurrentListItem(item),
      currentItem: this.state.currentItem,
      addItemToList: (item) => this.addItemToList(item),
      removeitemfromlist: (item) => this.removeItemFromList(item),
      addNewList: (name) => this.AddList(name),
      removeList: (item) => this.removeList(item),
      markitem: (item) => this.MarkItem(item),
    }} />
  }
}
const Nav = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none',
      header: null,
    }),
  },
  List: {
    screen: ListScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#f2f2f2' },
      headerTitleStyle: { color: 'green' },
      header: null,
    }),
  },
}, {
    initialRouteName: 'Home'
  }
); 
