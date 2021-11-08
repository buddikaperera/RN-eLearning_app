import React from "react";
import {
      Image,
      ImageBackground,
      ScrollView,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images, FONTS, SIZES, COLORS } from "../constants";
import { Courses, CoursesList } from "../screens";
import IconAntDesign from "react-native-vector-icons/AntDesign";
const Home = ({ navigation }) => {
      return (
            <ImageBackground
                  source={images.home}
                  style={{
                        width: "100%",
                        height: "100%",
                  }}
            >
                  <ScrollView>
                        <View
                              style={{
                                    width: "100%",
                                    alignItems: "flex-end",
                                    paddingHorizontal: 20,
                              }}
                        >
                              <View
                                    style={{
                                          paddingHorizontal: 10,
                                          paddingVertical: 12,
                                          borderRadius: 10,
                                          marginTop: 30,
                                          backgroundColor: "#d1a0a7",
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
                                    paddingHorizontal: SIZES.padding,
                                    ...FONTS.h1,
                                    padding: 40,

                                    color: COLORS.white,
                              }}
                        >
                              Welcome back Buddhika
                        </Text>
                        <View
                              style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: "#FFF",
                                    padding: SIZES.padding2,

                                    borderRadius: SIZES.radius,
                                    marginHorizontal: SIZES.paddingH,
                                    marginTop: SIZES.paddingH,
                              }}
                        >
                              <TextInput
                                    placeholder="Search for new knowledge"
                                    placeholderTextColor="#345C74"
                                    style={{
                                          width: "95%",
                                          paddingHorizontal: SIZES.radius,
                                          ...FONTS.h4,
                                    }}
                              />
                              <Image
                                    source={images.sear}
                                    style={{ height: 14, width: 14 }}
                              />
                              {/*<IconAntDesign
                                    style={{
                                          marginTop: "8%",
                                    }}
                                    name="rightcircle"
                                    size={25}
                                    color={COLORS.black}
                              />*/}
                        </View>

                        <View
                              style={{
                                    flexDirection: "row",

                                    backgroundColor: "#FFF2F2",
                                    marginTop: 15,
                                    marginHorizontal: 20,
                                    borderRadius: SIZES.radius,
                                    paddingVertical: 30,
                                    paddingLeft: 30,
                              }}
                        >
                              <View>
                                    <Text
                                          style={{
                                                color: "#345c74",
                                                width: 250,
                                                ...FONTS.h4,
                                          }}
                                    >
                                          Start learning now
                                    </Text>
                                    <TouchableOpacity
                                          onPress={() =>
                                                navigation.navigate("Courses")
                                          }
                                          style={{
                                                flexDirection: "row",
                                                backgroundColor: "#f58084",
                                                alignItems: "center",
                                                marginTop: 20,
                                                width: 160,
                                                paddingVertical: 10,
                                                borderRadius: SIZES.radius,
                                                paddingHorizontal: 10,
                                          }}
                                    >
                                          <Text
                                                style={{
                                                      color: "#FFFF",
                                                      width: 95,
                                                      fontWeight: "bold",
                                                      ...FONTS.body4,
                                                }}
                                          >
                                                Categories
                                          </Text>
                                          <Image
                                                source={images.a3}
                                                style={{
                                                      marginLeft: 20,
                                                      height: 18,
                                                      width: 18,
                                                }}
                                          />
                                    </TouchableOpacity>
                              </View>
                              <Image
                                    source={images.undraw}
                                    style={{
                                          marginLeft: -62,
                                          marginTop: 30,
                                    }}
                              />
                        </View>
                        <Text
                              style={{
                                    color: "#345c74",
                                    paddingHorizontal: 20,
                                    marginTop: 20,
                                    bottom: 10,
                                    fontWeight: "bold",
                                    ...FONTS.body5,
                              }}
                        >
                              Courses in progress
                        </Text>
                        <CoursesList
                              img={images.xd}
                              title="Adobe XD Prototyping"
                              bg="#fdddf3"
                        />
                        <CoursesList
                              img={images.sketch}
                              title="Sketch shortcuts"
                              bg="#fef8e3"
                        />
                        <CoursesList
                              img={images.ae}
                              title="UI Design & Concepts"
                              bg="#fcf2ff"
                        />
                  </ScrollView>
            </ImageBackground>
      );
};

export default Home;

const styles = StyleSheet.create({});
