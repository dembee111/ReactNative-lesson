import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
     <View style={styles.listItem} onPress={props.onItemPressed}>
          <Text>{props.placeName}</Text>
     </View>
);

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		marginBottom:5,
		backgroundColor: "#eee"
	}
});

export default listItem;