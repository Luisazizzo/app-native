import { Formik } from "formik";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { changePasswordSchema } from "./utils/validationSchema";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { IFormValuesChangePassword } from "../../../interface/IFormValuesChangePassword";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useHandleOnSubmitChange from "./utils/hook/useHandleOnSubmitChange";
import { IChangePasswordProps } from "../../../interface";

const ChangePassword = ({ closeModal }: IChangePasswordProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const initialValues: IFormValuesChangePassword = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const handleOnSubmitChange = useHandleOnSubmitChange({ closeModal });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Password</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema(user.password)}
        validateOnMount
        isInitialValid={false}
        onSubmit={handleOnSubmitChange}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("oldPassword")}
              onBlur={handleBlur("oldPassword")}
              placeholder="Old Password"
              secureTextEntry={passwordVisible}
              value={values.oldPassword}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            {touched.oldPassword && errors.oldPassword && (
              <Text style={{ color: "red" }}>{errors.oldPassword}</Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={handleChange("newPassword")}
              onBlur={handleBlur("newPassword")}
              placeholder="New Password"
              secureTextEntry={passwordVisible}
              value={values.newPassword}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            {touched.newPassword && errors.newPassword && (
              <Text style={{ color: "red" }}>{errors.oldPassword}</Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              placeholder="Confirm Password"
              secureTextEntry={passwordVisible}
              value={values.confirmPassword}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={{ fontWeight: "bold" }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    margin: 5,
    padding: 6,
    width: 300,
  },
  buttonContainer: {
    marginTop: 20,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
export default ChangePassword;
