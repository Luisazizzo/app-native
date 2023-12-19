import { View, Text, Pressable } from "react-native";
import useDeleteAccount from "./hook/useDeleteAccount";

const ModalDeleteAccount = (props: { closeModal: () => void }) => {
  const { closeModal } = props;
  const deleteAccount = useDeleteAccount();
  return (
    <View
      style={{
        width: "100%",
        height: 200,
        backgroundColor: "red",
        position: "absolute",
        top: 80,
        zIndex: 2,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          padding: 10,
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Are you sure you want to delete your account?
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Pressable
          onPress={deleteAccount}
          style={{
            backgroundColor: "#fff",
            width: 50,
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Yes</Text>
        </Pressable>
        <Pressable
          onPress={closeModal}
          style={{
            backgroundColor: "#fff",
            width: 50,
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>No</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalDeleteAccount;
