import { Formik } from "formik";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import useHandleOnSubmit from "./utils/hook/useHandleOnSubmit";
import { SignUpSchema } from "./utils/validationSchema";
import { IFormValuesSignup } from "../../../interface";
import { TextInput } from "react-native-paper";
import { useState } from "react";

const Signup = () => {
  const handleOnSubmit = useHandleOnSubmit();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const initialValues: IFormValuesSignup = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLogged: false,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Singup</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
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
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Email"
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Password"
              secureTextEntry={true}
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
            <TextInput
              style={styles.input}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              placeholder="Confirm Password"
              secureTextEntry={true}
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
    padding: 6,
    width: 300,
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
export default Signup;
