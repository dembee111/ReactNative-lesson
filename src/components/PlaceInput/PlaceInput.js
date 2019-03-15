import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


class PlaceInput extends Component {
     /* class -н property юм state зарлаж байна*/
	 state = {
	    placeName: ''	    
	  };
     /* эхэндээ placeName хоосон бна утга оруулах үед
     уг утгыг placeName state -д оноон өгнө*/
	  placeNameChangedHandler = val => {
		    this.setState({
		      placeName:val
		    });    
		  };

  /* дээр бгаа PlaceName утгыг хэрвээ submit хийвэл уг утгыг 
  onPlaceAdded props - н парам дээр тавьж бна ингэснээр app.js -n 
  placeAddedHandler буюу нэг нэгээрэ дараалан оруулж байгаа placeName state -г
  app.js -n  places гэсэн массив луу нэмж хийнэ*/
  placeSubmitHandler = () => {
  	/* хэрвээ submit хийгдсэн утгыг трим метод ашиглан урдаа
  	 хойноо хоосон зайгүй болгоод хоосон утгатай адилтгавал үнэн буюу
  	 оруулсан утга байхгүй байвал placeSubmitHandler үйлдлийг хийхгүй 
  	 хүсэлтийг буцаана*/
    if (this.state.placeName.trim() === "") {
      return;
    }

     this.props.onPlaceAdded(this.state.placeName);
  };

	render(){
		return (
          
          <View style={styles.inputContainer}>
            {/* value утга дээр placeName хоосон утгыг тавиад
            утга оруулмагц OnChangeText event ажиллаж буюу placeNameChangedHandler 
        ажиллаж дараагийн үйлдэл хийгдэнэ*/}
            <TextInput style={styles.placeInput}
              placeholder="An awesome text"
              value={this.state.placeName} 
              onChangeText={this.placeNameChangedHandler}
              />
          {/* onPress event хийгдмэгц placeSubmitHandler ажиллана*/}
            <Button 
            title="Add Text" 
            style={styles.placeButton}

            onPress={this.placeSubmitHandler}
            />
          </View>
		);
        
	}
}
/* styles нэртэй конст үүсгэж байна css -д зориулсан*/
const styles = StyleSheet.create({
	inputContainer:{
    //flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
   placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  },
})
/* энэ тогтмол утгатай констыг namespace буюу зарлаж байна*/
export default PlaceInput;