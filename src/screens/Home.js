import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { images } from "../constants";

const Home = () => {
      return (
            <ImageBackground
                  source={images.home}
                  style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
      );
};

export default Home;

const styles = StyleSheet.create({});
