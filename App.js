import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component{

  state = {   
    places: []
  }
 /* button darmagts placeinput -н placeSubmitHandler event ажиллаж оруулсан утгыг
 places гэсэн массив state руу хийж байна
 */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places:prevState.places.concat(placeName)
      };
    });
  };
 
  
  render() {   
    return (
      <View style={styles.container}>
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList places={this.state.places}/>
      </View>
    );
  }
}
/* styles нэртэй конст үүсгэж байна css -д зориулсан*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } 
});
