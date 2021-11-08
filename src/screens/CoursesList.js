import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, images } from "../constants";
import ProgressCircle from "react-native-progress-circle";

/*
https://github.com/MrToph/react-native-progress-circle?ref=morioh.com&utm_source=morioh.com
 <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>

*/
const CoursesList = (props) => {
      const { img, title, bg, onPress } = props;
      return (
            <View>
                  <TouchableOpacity
                        onPress={onPress}
                        style={{
                              flexDirection: "row",
                              backgroundColor: bg,
                              padding: 20,
                              marginHorizontal: 20,
                              borderRadius: 20,
                              alignItems: "center",
                              marginTop: 10,
                        }}
                  >
                        <Image source={img} style={{ width: 40, height: 40 }} />
                        <View>
                              <Text
                                    style={{
                                          color: "#345c74",
                                          paddingHorizontal: 20,
                                          width: 170,
                                          fontWeight: "bold",
                                          ...FONTS.body4,
                                    }}
                              >
                                    {title}
                              </Text>
                              <Text
                                    style={{
                                          color: "#f58084",
                                          paddingHorizontal: 20,

                                          fontWeight: "bold",
                                          ...FONTS.body4,
                                    }}
                              >
                                    10 hours ,19 lessons
                              </Text>
                        </View>
                        <Text
                              style={{
                                    color: "#345c74",
                                    paddingLeft: 10,
                                    paddingRight: 10,

                                    fontWeight: "bold",
                                    ...FONTS.body4,
                              }}
                        >
                              25%
                        </Text>
                        <ProgressCircle
                              percent={30}
                              radius={17}
                              borderWidth={1.5}
                              color="f580084"
                              shadowColor="#FFF"
                              bgColor="#FFF"
                        >
                              <Image
                                    source={images.pl}
                                    style={{
                                          height: 12,
                                          width: 12,
                                    }}
                              />
                        </ProgressCircle>
                  </TouchableOpacity>
            </View>
      );
};

export default CoursesList;

const styles = StyleSheet.create({});
