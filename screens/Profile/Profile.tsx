import { Text, SafeAreaView, View, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useLogOut from "./hook/useLogOut";
import ModalDeleteAccount from "../../components/Modal/ModalDeleteAccount/ModalDeleteAccount";
import { useState } from "react";
import useToggleModalDelete from "./hook/useToggleModalDelete";
import ModalChangePassword from "../../components/Modal/ModalChangePassword/ModalChangePassword";
import useToggleModalChange from "./hook/useToggleModalChange";

const Profile = () => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalChange, setIsModalChange] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const logOut = useLogOut();

  const { closeModalDelete, openModalDelete } =
    useToggleModalDelete(setIsModalDelete);

  const { openModalChange, closeModalChange } =
    useToggleModalChange(setIsModalChange);

  return (
    <SafeAreaView>
      {isModalDelete && <ModalDeleteAccount closeModal={closeModalDelete} />}
      {isModalChange && <ModalChangePassword closeModal={closeModalChange} />}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
        }}
      >
        Welcome: {user.username}
      </Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={logOut} style={styles.button}>
            <Text style={{ fontWeight: "bold" }}>Log out</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={openModalDelete} style={styles.button}>
            <Text style={{ fontWeight: "bold" }}>Delete account</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={openModalChange} style={styles.button}>
            <Text style={{ fontWeight: "bold" }}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e50914",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 6,
  },
});

export default Profile;
