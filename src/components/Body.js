import { ScrollView, Text, View, StyleSheet } from "react-native";
import useWekretaApi from "../hooks/useWekretaApi";
import ProductCard from "./ProductCard";

const Body = () => {
  const products = useWekretaApi();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <ProductCard productsList={product} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 5,
  },
  productContainer: {
    flexBasis: "48%",
    marginBottom: 10,
  },
});
export default Body;
