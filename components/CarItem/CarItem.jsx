import React from "react";
import { Text, View, ImageBackground } from "react-native";
import CustomButton from "../Buttons/CustomButton";
import styles from "./styles";

const CarItem = (props) => {
   const { name, tagline, image } = props.car;
   return (
      <View style={styles.carContainer}>
         <ImageBackground style={styles.image} source={image} />
         <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}</Text>
         </View>
         <View style={styles.buttonContainer}>
            <CustomButton
               type="primary"
               content="custom order"
               onPress={() => console.warn("Custom Order was Pressed")}
            />
            <CustomButton
               type="secondary"
               content="existing inventory"
               onPress={() => console.warn("Existing Inventory was Pressed")}
            />
         </View>
      </View>
   );
};

export default CarItem;
