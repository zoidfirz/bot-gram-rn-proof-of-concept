import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Profile from "../screens/Profile";
const Stories = () => {
  const navigation = useNavigation();
  const storyInfo: ProfileInterface[] = [
    {
      id: 1,
      name: "Your story",
      image: require("../../storage/Images/elisa-photography-V7GkPmHMUz8-unsplash.jpg"),
    },
    {
      id: 0,
      name: "Special Projects",
      image: require("../../storage/Images/userProgile.jpg"),
    },
    {
      id: 2,
      name: "Evoc",
      image: require("../../storage/Images/mathias-reding-SgtFADBG_S4-unsplash.jpg"),
    },
    {
      id: 3,
      name: "Operations",
      image: require("../../storage/Images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg"),
    },
    {
      id: 5,
      name: "BTDS",
      image: require("../../storage/Images/filip-rankovic-grobgaard-8u2xKgXJBgo-unsplash.jpg"),
    },
    {
      id: 5,
      name: "EEO",
      image: require("../../storage/Images/kevin-wang-UKyqM9Z6L14-unsplash.jpg"),
    },
    {
      id: 6,
      name: "DPU",
      image: require("../../storage/Images/may-gauthier-s3mR42Spras-unsplash.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("Status", {
                name: data.name,
                image: data.image,
              });
            }}
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  // borderWidth: 1.8,
                  borderWidth: 0,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    opacity: data.id == 0 ? 1 : 0.5,
                  }}
                >
                  {data.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
