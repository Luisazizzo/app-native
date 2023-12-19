import { Text, View } from "react-native";
import ChangePassword from "../../Form/ChangePassword/ChangePassword";
import { IChangePasswordProps } from "../../../interface";

const ModalChangePassword = ({ closeModal }: IChangePasswordProps) => {
  return (
    <View
      style={{
        backgroundColor: "#141414",
        width: "100%",
        height: "100%",
      }}
    >
      <Text
        style={{ color: "#fff", margin: 30, fontSize: 24 }}
        onPress={closeModal}
      >
        X
      </Text>
      <ChangePassword closeModal={closeModal} />
    </View>
  );
};

export default ModalChangePassword;
