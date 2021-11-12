import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, images } from "../constants";
import ProgressCircle from "react-native-progress-circle";

const Chapters = ({ num, title, duration, percent, color, onPress }) => {
      return (
            <TouchableOpacity
                  onPress={onPress}
                  style={{
                        flexDirection: "row",
                        padding: 20,
                        marginHorizontal: 20,
                        borderRadius: 20,
                        alignItems: "center",
                  }}
            >
                  <View
                        style={{
                              backgroundColor: color,
                              paddingVertical: 5,
                              paddingHorizontal: 10,
                              borderRadius: 6,
                        }}
                  >
                        <Text
                              style={{
                                    ...FONTS.h3,
                                    color: COLORS.black,
                              }}
                        >
                              {num}
                        </Text>
                  </View>
                  <View>
                        <Text
                              style={{
                                    ...FONTS.h4,

                                    color: "#345c74",
                                    paddingLeft: 20,
                                    width: 180,
                              }}
                        >
                              {title}
                        </Text>
                        <Text
                              style={{
                                    ...FONTS.body6,

                                    color: "#f58084",
                                    paddingLeft: 20,
                                    width: 180,
                              }}
                        >
                              {duration}
                        </Text>
                  </View>
                  <Text
                        style={{
                              ...FONTS.h4,

                              color: "#345c74",
                              paddingLeft: 20,
                              width: 70,
                        }}
                  >
                        {percent}%
                  </Text>

                  <ProgressCircle
                        percent={percent}
                        radius={17}
                        borderWidth={1.5}
                        color="#f58084"
                        shadowColor="#FFF"
                        bgColor="#fff2f2"
                  >
                        <Image source={images.pl} />
                  </ProgressCircle>
            </TouchableOpacity>
      );
};

export default Chapters;

const styles = StyleSheet.create({});
