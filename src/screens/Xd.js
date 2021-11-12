import React from "react";
import {
      ImageBackground,
      StyleSheet,
      Text,
      TouchableOpacity,
      View,
      Image,
} from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { Courses, Chapters, VideoPage } from "../../src/screens";
import { Modalize } from "react-native-modalize";

const Xd = ({ navigation }) => {
      return (
            <ImageBackground
                  source={images.crs}
                  style={{ height: "100%", width: "100%" }}
            >
                  <View
                        style={{
                              flexDirection: "row",
                              width: "100%",
                              paddingHorizontal: 20,
                        }}
                  >
                        <TouchableOpacity
                              onPress={() => navigation.navigate("Courses")}
                              style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 13,
                                    borderRadius: SIZES.radius,
                                    marginTop: 30,
                                    backgroundColor: "#9a3c7e",
                              }}
                        >
                              <Image
                                    source={images.a1}
                                    style={{ height: 15, width: 20 }}
                              />
                        </TouchableOpacity>
                        <View
                              style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 13,
                                    borderRadius: 10,
                                    marginTop: 30,
                                    backgroundColor: "#9a3c7e",
                                    marginLeft: "70%",
                              }}
                        >
                              <Image
                                    source={images.hum}
                                    style={{ height: 15, width: 20 }}
                              />
                        </View>
                  </View>
                  <Image
                        source={images.xd}
                        style={{
                              height: 35,
                              width: 35,
                              alignSelf: "center",
                              marginTop: 20,
                        }}
                  />
                  <Text
                        style={{
                              paddingHorizontal: SIZES.padding,
                              ...FONTS.h2,
                              padding: 20,
                              alignSelf: "center",
                              textAlign: "center",
                              width: 280,

                              color: COLORS.white,
                        }}
                  >
                        Adobe XD
                  </Text>
                  <Text
                        style={{
                              paddingHorizontal: SIZES.padding,
                              ...FONTS.h2,
                              paddingTop: -10,
                              alignSelf: "center",
                              textAlign: "center",
                              width: 280,

                              color: COLORS.white,
                        }}
                  >
                        Essentials
                  </Text>
                  <Modalize
                        handleStyle={{
                              marginTop: 30,
                              backgroundColor: "#e9e9e9",
                              width: 80,
                        }}
                        modalStyle={{
                              borderTopLeftRadius: SIZES.radius * 6,
                              borderTopRightRadius: SIZES.radius * 6,
                        }}
                        alwaysOpen={510}
                        scrollViewProps={{
                              showsVerticalScrollIndicator: false,
                        }}
                  >
                        <View
                              style={{
                                    flexDirection: "row",
                                    marginTop: 40,
                                    marginHorizontal: 30,
                              }}
                        >
                              <Image
                                    source={images.imgPr}
                                    style={{
                                          height: 50,
                                          width: 50,
                                          borderWidth: 2,
                                          borderColor: "#f58084",
                                          borderRadius: 50,
                                    }}
                              />
                              <View source={{ marginHorizontal: 20 }}>
                                    <Text
                                          style={{
                                                color: "#345c74",

                                                fontWeight: "bold",
                                                ...FONTS.body2,
                                                paddingHorizontal: 34,
                                          }}
                                    >
                                          Mike Jonson
                                    </Text>

                                    <Text
                                          style={{
                                                color: "#f58084",

                                                fontWeight: "bold",
                                                ...FONTS.body3,
                                                paddingHorizontal: 35,
                                          }}
                                    >
                                          UI/UX Designer
                                    </Text>
                              </View>
                              <View
                                    style={{
                                          alignItems: "center",
                                          justifyContent: "center",
                                          backgroundColor: "#fff2f2",
                                          height: 40,
                                          width: 40,
                                          borderRadius: 40,
                                          //paddingLeft: 23,
                                    }}
                              >
                                    <Image source={images.a2} />
                              </View>
                        </View>

                        <View>
                              <Chapters
                                    title="Introduction"
                                    duration="2 hours ,20 minutes"
                                    percent={25}
                                    color="#fde6e6"
                                    num={1}
                                    onPress={() =>
                                          navigation.navigate("VideoPage")
                                    }
                              />
                              <Chapters
                                    title="Design tool"
                                    duration="1 hours ,40 minutes"
                                    percent={55}
                                    color="#f9e1fc"
                                    num={2}
                                    onPress={() =>
                                          navigation.navigate("VideoPage")
                                    }
                              />
                              <Chapters
                                    title="Prototype tool"
                                    duration="1 hours ,40 minutes"
                                    percent={2}
                                    color="#e5ffef"
                                    num={3}
                                    onPress={() =>
                                          navigation.navigate("VideoPage")
                                    }
                              />
                              <Chapters
                                    title="Summery and Exercises"
                                    duration="1 hours ,50 minutes"
                                    percent={55}
                                    color="#f8f1fd"
                                    num={5}
                                    onPress={() =>
                                          navigation.navigate("VideoPage")
                                    }
                              />
                        </View>

                        <View
                              style={{
                                    flexDirection: "row",
                                    paddingVertical: 5,
                                    backgroundColor: "#fff2f2",
                                    marginHorizontal: 20,
                                    marginVertical: 15,
                                    alignItems: "center",
                                    borderRadius: SIZES.radius,
                                    justifyContent: "center",
                              }}
                        >
                              <Text
                                    style={{
                                          color: "#f58084",
                                          marginRight: 50,
                                          fontWeight: "bold",
                                          ...FONTS.body3,
                                    }}
                              >
                                    Resume last lesson
                              </Text>
                              <Image source={images.a2} />
                        </View>
                  </Modalize>
            </ImageBackground>
      );
};

export default Xd;

const styles = StyleSheet.create({});
