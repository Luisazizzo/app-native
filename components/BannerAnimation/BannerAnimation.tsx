import { View } from "react-native";
import LottieView from "lottie-react-native";
import banner from "../../assets/banner.json";

const BannerAnimation = () => {
  return (
    <View
      style={{
        backgroundColor: "#141414",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={banner}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={{ width: "100%", height: 200 }}
      />
    </View>
  );
};
export default BannerAnimation;
