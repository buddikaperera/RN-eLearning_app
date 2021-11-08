import React from "react";
import {
      StyleSheet,
      Text,
      View,
      ImageBackground,
      TouchableOpacity,
      Image,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { FONTS, images, SIZES } from "../constants";
import { Home, Xd } from "../../src/screens";
import CoursesList from "./CoursesList";

const Courses = ({ navigation }) => {
      return (
            <ImageBackground
                  source={images.cat}
                  style={{ width: "100%", height: "100%" }}
            >
                  <View
                        style={{
                              width: "100%",
                              flexDirection: "row",
                              paddingHorizontal: 20,
                        }}
                  >
                        <TouchableOpacity
                              onPress={() => navigation.navigate("Home")}
                              style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 13,
                                    borderRadius: SIZES.radius,
                                    marginTop: 30,
                                    backgroundColor: "#8bbcdb",
                                    marginLeft: 15,
                              }}
                        >
                              <Image
                                    source={images.a1}
                                    style={{
                                          width: 20,
                                          height: 15,
                                    }}
                              />
                        </TouchableOpacity>
                        <View
                              style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 13,
                                    borderRadius: 10,
                                    marginTop: 30,
                                    backgroundColor: "#8bbcdb",
                                    marginLeft: "70%",
                              }}
                        >
                              <Image
                                    source={images.hum}
                                    style={{ height: 15, width: 20 }}
                              />
                        </View>
                  </View>

                  <Text
                        style={{
                              color: "#FFF",
                              marginTop: 34,
                              marginTop: 20,
                              textAlign: "center",
                              alignSelf: "center",
                              fontWeight: "bold",
                              ...FONTS.h1,
                        }}
                  >
                        UI/UX courses{" "}
                  </Text>
                  <Modalize
                        handleStyle={{
                              marginTop: 30,
                              backgroundColor: "#e9e9e9",
                              width: 80,
                        }}
                        modalStyle={{
                              borderTopLeftRadius: 60,
                              borderTopRightRadius: 60,
                        }}
                        alwaysOpen={500}
                        scrollViewProps={{
                              showsVerticalScrollIndicator: false,
                        }}
                  >
                        <View style={{ marginTop: 40 }}>
                              <CoursesList
                                    img={images.xd}
                                    title="Adobe XD prototyping"
                                    bg="#fdddf3"
                                    onPress={() => navigation.navigate("Xd")}
                              />
                              <CoursesList
                                    img={images.sketch}
                                    title="Sketch shortcuts tricks"
                                    bg="#fef8e3"
                              />
                              <CoursesList
                                    img={images.ae}
                                    title="UI motion Design"
                                    bg="#fcf2ff"
                              />
                              <CoursesList
                                    img={images.f}
                                    title="Figma essentials"
                                    bg="#fdddf3"
                              />
                              <CoursesList
                                    img={images.ps}
                                    title="Adobe Photoshop"
                                    bg="#fdddf3"
                              />
                        </View>
                  </Modalize>
            </ImageBackground>
      );
};

export default Courses;

const styles = StyleSheet.create({});
