import React from "react";
import {
      StyleSheet,
      View,
      StatusBar,
      Dimensions,
      Text,
      Image,
} from "react-native";
import { Chapters } from "../screens";
// import { Video, Audio } from "expo-av";
// import { Asset } from "expo-asset";

//import { PitchCorrectionQuality } from "./AV.types";
import { COLORS, FONTS, images, SIZES } from "../constants";
const { width, height } = Dimensions.get("window");

const VideoPage = () => {
      return (
            <View style={styles.container}>
                  {/* <Video
                        source={require("../video/maintro.mp4")}
                        rate={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={false}
                        isLooping={false}
                        //useNativeControls
                        style={styles.video}
                 />*/}
                  <Text>Video</Text>
                  <Chapters
                        color="#fde6e6"
                        percent={25}
                        duration="2 hours, 20 minutes"
                        title="Introduction"
                        num={1}
                  />

                  <Text
                        style={{
                              ...FONTS.h7,
                              textAlign: "justify",
                              color: "#345c74",
                              paddingLeft: 42,
                              paddingRight: 35,
                        }}
                  >
                        User experiance (UX) design is the process design teams
                        use to create products that provide meaningful and
                        relevant experiances to users. This involves the design
                        of the entire process of acquiring and integrating the
                        product, including aspects of branding, design,
                        usability and function. "User Experience Design" is
                        often used interchangeably with terms such as "User
                        Interfase Design" and "usability". However, while
                        usability and user interfase (UI) design are important
                        aspects of UX design, they are subsets of it - UX design
                        covers a vast array of other areas, too. A UX designer
                        is concerned with the entire process of acquiring and
                        integrating a product,...
                  </Text>
                  <View
                        style={{
                              flexDirection: "row",
                              paddingVertical: 5,
                              backgroundColor: "#f58084",
                              marginHorizontal: 40,
                              paddingVertical: 15,
                              alignItems: "center",
                              borderRadius: 10,
                              justifyContent: "center",
                              marginTop: 20,
                        }}
                  >
                        <Text
                              style={{
                                    color: "#FFF",
                                    fontFamily: "Bold",
                                    fontSize: 15,
                                    marginRight: 50,
                              }}
                        >
                              Read more
                        </Text>
                        <Image source={require("../images/a3.png")} />
                  </View>
            </View>
      );
};

export default VideoPage;

const styles = StyleSheet.create({
      video: {
            width: width,
            height: height / 3,
      },
      container: {
            backgroundColor: "#fff",
            justifyContent: "center",
      },
});
