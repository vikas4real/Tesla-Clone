import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = (props) => {
   const type = props.type;
   const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
   const textColor = type === "primary" ? "#ffffff" : "black";

   const content = props.content;
   const onPress = props.onPress;

   return (
      <View style={styles.container}>
         <Pressable
            style={[styles.button, { backgroundColor: backgroundColor }]}
            onPress={() => onPress()}
         >
            <Text style={[styles.text, { color: textColor }]}>{content}</Text>
         </Pressable>
      </View>
   );
};

export default CustomButton;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      padding: 10,
   },
   button: {
      backgroundColor: "white",
      color: "black",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
   },
   text: {
      fontSize: 16,
      fontWeight: "500",
      textTransform: "uppercase",
   },
});
