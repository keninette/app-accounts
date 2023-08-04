import React from 'react'
import {Image, Text, View} from 'react-native';
import Menu from "../../components/menu/Menu";
import screenStyles from "../screens.styles";
import styles from "./home.styles";

const Home = (props) => {
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/summary.jpeg')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Solde actuel : </Text><Text style={styles["text--green"]}>11042.11 €</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Solde final : </Text><Text style={styles["text--red"]}>-42.11 €</Text>
        </View>
      </View>
      <Menu navigation={props.navigation}></Menu>
    </View>
  );
};

export default Home;
