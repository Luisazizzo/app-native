import { Formik } from "formik";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import useHandleOnSubmit from "./utils/hook/useHandleOnSubmit";
import { LogInSchema } from "./utils/validationSchema";
import { IFormValuesLogin } from "../../../interface";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";

const LogIn = () => {
  const handleOnSubmit = useHandleOnSubmit();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const initialValues: IFormValuesLogin = {
    username: "",
    password: "",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LogIn</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema(user.username, user.password)}
        validateOnMount
        isInitialValid={false}
        onSubmit={handleOnSubmit}
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
              testID={"input1"}
              style={styles.input}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              placeholder="Username"
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={{ color: "red" }}>{errors.username}</Text>
            )}
            <TextInput
              testID={"input2"}
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Password"
              secureTextEntry={passwordVisible}
              value={values.password}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                disabled={!isValid}
                onPress={() => handleSubmit()}
              >
                <Text style={{ fontWeight: "bold" }}>Submit</Text>
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
  },
  formContainer: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    margin: 5,
    width: 300,
    height: 50,
  },
  buttonContainer: {
    width: 100,
    height: 40,
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
export default LogIn;
