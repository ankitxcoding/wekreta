import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = (props) => {
  const { productsList } = props;
  const { name, mediaUrl, variants } = productsList;
  const brandName = "12 STOREEZ";

  const [heartColor, setHeartColor] = useState("black");
  const [heartName, setHeartName] = useState("hearto");

  const handleHeartClick = () => {
    heartColor === "black" ? setHeartColor("red") : setHeartColor("black");
    heartName === "hearto" ? setHeartName("heart") : setHeartName("hearto");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: mediaUrl }} style={styles.image} />
        <TouchableOpacity
          onPress={handleHeartClick}
          style={styles.heartIconContainer}
        >
          <AntDesign
            name={heartName}
            size={24}
            color={heartColor}
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.brand}>{brandName}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₹{variants[0]?.mrp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  heart: {
    marginLeft: -2,
    zIndex: 2,
  },
  brand: {
    fontSize: 16,
    fontWeight: "800",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  price: {
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 2,
  },
});

export default ProductCard;
