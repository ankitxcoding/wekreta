import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={styles.text}>Women</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={toggleSearch}>
              <AntDesign
                name="search1"
                size={24}
                color="black"
                style={styles.icon1}
              />
            </TouchableOpacity>
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              style={styles.icon1}
            />
            <AntDesign
              name="shoppingcart"
              size={24}
              color="black"
              style={styles.icon1}
            />
          </View>
        </View>
        {isSearchVisible && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.bottomTextLeft}>98/100 Products</Text>
        </View>
        <View style={styles.bottomContainerTextRight}>
          <Icon
            name="sort-amount-desc"
            size={16}
            color="black"
            style={styles.icon2}
          />
          <Text style={styles.bottomTextRight}> Sort</Text>
          <Icon name="filter" size={20} color="black" style={styles.icon2} />
          <Text style={styles.bottomTextRight}> Filter</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    borderBottomWidth: 2,
    borderBottomColor: "#EEEEEE",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: "100%",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {
    marginLeft: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  icon2: {
    marginLeft: 15,
  },
  bottomTextLeft: {
    fontSize: 15,
    color: "#9ca3af",
  },
  bottomTextRight: {
    fontSize: 15,
    color: "black",
  },
  bottomContainerTextRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
export default Header;
