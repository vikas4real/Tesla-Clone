import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem/CarItem";
import cars from "../../assets/cars";
const CarsList = (props) => {
   return (
      <View style={{ width: "100%" }}>
         <FlatList
            data={cars}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <CarItem car={item} />}
            snapToStart={"start"}
            decelerationRate={"normal"}
            snapToInterval={Dimensions.get("window").height}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

export default CarsList;

const styles = StyleSheet.create({});
