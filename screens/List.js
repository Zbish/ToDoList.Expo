import React from 'react';
import MyListItem from '../components/Lists/MyListItem';
import {Text,View,Button,TextInput,FlatList,StyleSheet,SectionList,Image,ScrollView,} from 'react-native';
import MyList from '../components/Lists/MyList.js';
import { Avatar, Header } from 'react-native-elements';

export default class List extends React.Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    this.setState({
      currentValue: this.props.initialText,
    });
  }
  onChange(val) {
    this.setState({ currentValue: val })
  }
  onPressAdd() {
    this.props.screenProps.currentItem.items.push({ name: this.state.currentValue, done: false });
    this.props.screenProps.addItemToList(this.props.screenProps.currentItem);
    this.setState({ currentValue: "" })
  }
  onRemoveItem(name)
  {
    var item = this.props.screenProps.currentItem
    for (var i = 0; i < item.items.length; i++) {
      if (item.items[i].name === name) {
        item.items.splice(i,1);
      }
    }    this.props.screenProps.removeitemfromlist(item);
  
  }
  chakBoxPress(name)
  {
    var myarray = this.props.screenProps.currentItem.items
    for (var i = 0; i < myarray.length; i++) {
      if (myarray[i].name === name) {
        myarray[i].done = !myarray[i].done
      }
 
    }
    console.log("name    "  + name)
    console.log("propr    "  + this.props.screenProps.currentItem.items)
    this.props.screenProps.markitem(name);
  }
  render() {
    done = [],
    undone = [],
  myarray = this.props.screenProps.currentItem.items
  for (var i = 0;i <myarray.length; i++ )
    {
      if(myarray[i].done == false)
        {
          done.push(myarray[i])
          
        }
        else{undone.push(myarray[i])}
}
    return (
      <View style={styles.wrapper}>
      <Header style={styles.header}
           centerComponent={{ text:this.props.screenProps.currentItem.title, style: { color: '#ffff00' },style:{padding:10} }}  />
        {/* <Button title="Back" onPress={() => this.props.navigation.navigate("Home")} /> */}
        <Image source={require('../assets/images/todolist.jpg')} style={styles.container}>
        <View style={styles.textcontainer}>
          <TextInput underLineColorAndroid='transparent' placeholderTextColor="black" placeholder='Add to List' style={styles.textInput}
            onChangeText={(val) => this.onChange(val)}
            value={this.state.currentValue}
            onSubmitEditing={() => this.onPressAdd()}
          />
          <Avatar Style={styles.button} small rounded icon={{ name: 'add' }} onPress={() => this.onPressAdd()}
            />
            </View>
            <View style={styles.scrollcontainer}> 
            <ScrollView contentContainerstyle={styles.contentContainer}>
          {
            done.map((item, index) => {
              return <MyListItem key={index} item={item}
                onRemove={(key) => this.onRemoveItem(key)}
                chackboxpress={(item) => this.chakBoxPress(item) }
                onEdit={(key, textv) => this.onEditPress(key, textv)}
              />
            })
          }
          <Text style={styles.finish}
          >Finish Task </Text>
          {
            undone.map((item, index) => {
              return <MyListItem key={index} item={item}
                onRemove={(key) => this.onRemoveItem(key)}
                chackboxpress={(item) => this.chakBoxPress(item) }
                onEdit={(key, textv) => this.onEditPress(key, textv)}
              />
            })
          }
          </ScrollView>
          </View>
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  header:{
    backgroundColor: '#0d4fba',
    width: null,
    flex:1,
    justifyContent: 'center',
      },
  container: {
    flex: 9,
    width: null,
    padding: 5,
  
  },
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
    marginTop:10,
  },
  scrollcontainer:{
    flex:9
  },
  contentContainer: {
    flex: 1,
  },
  finish: {
    color: '#000000',
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 0.6,
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
});
