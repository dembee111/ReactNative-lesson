import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

/* app хуудсанд хэрэглэх ч бай хаана ч хэрэглэх боломжтой
пропс буюу хэв бэлдэж бна парамтай функц шиг нэр нь placeList утга нь өөрчлөгдөхгүй*/
const placeList = props => {
      /* энэхүү ListItem props iig ListItem хуудаснаас оруулж ирж байна орж
      ирсэн утгыг массивийн урт хүртэл давтан задлах map функц ашиглан дэлгэцэнд харуулах
      пропс бэлдэж байна*/
	  const placesOutput = props.places.map((place, i) =>(
          <ListItem key={i} placeName={place} />
      ));
    /* Энэхүү констоос буцах буюу гарах утга
     юм нэг ёсондоо функц хэв бэлдэж байна*/
	return (
		   /* View бол нативын div юм css style tag оруулж ирж байна. аргумент дээр нь 
		   styles const -н утгийг тавьж байна. View үндсэн утга дээр нь placeOutput
		   констын пропс буюу параметер тахь утгыг ListItem хуудаснаас оруулж ирж байна*/
           <View style={styles.listContainer}>{placesOutput}</View>   
	   );
};
/* styles нэртэй конст үүсгэж байна css -д зориулсан*/
const styles = StyleSheet.create({
	listContainer: {
		width: "100%"
	}
});

/* энэ тогтмол утгатай констыг namespace буюу зарлаж байна*/
export default placeList;