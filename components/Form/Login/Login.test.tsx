import LogIn from "./Login";
import { RootState, setupPersistor, setupStore } from "../../../store/store";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PreloadedState } from "@reduxjs/toolkit";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";

jest.mock("./utils/hook/useHandleOnSubmit");
jest.mock("react-native-paper");
// jest.mock("react-native-paper", () => ({
//   TextInput: ({
//     style,
//     onChangeText,
//     onBlur,
//     placeholder,
//     value,
//     secureTextEntry,
//   }: {
//     style: { [key: string]: string | number };
//     onChangeText: (text: string) => void;
//     onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
//     placeholder: string;
//     value: string;
//     secureTextEntry?: boolean;
//   }) => (
//     <TextInput
//       style={style}
//       onChangeText={onChangeText}
//       onBlur={onBlur}
//       placeholder={placeholder}
//       value={value}
//       secureTextEntry={secureTextEntry}
//     />
//   ),
// }));
const handleSubmitMock = jest.fn();

jest.mock("redux-persist-expo-filesystem", () => ({
  getItem: jest.fn().mockImplementation(() => Promise.resolve("user")),
  setItem: jest.fn().mockImplementation(() => Promise.resolve("user")),
  removeItem: jest.fn().mockImplementation(() => Promise.resolve()),
}));

const renderLogin = () => {
  // const preloadedState: PreloadedState<RootState> = {
  //   user: {
  //     email: "email@email",
  //     password: "Pippo123!",
  //     username: "username",
  //     isLogged: false,
  //     _persist: {
  //       version: 2,
  //       rehydrated: true,
  //     },
  //   },
  // };
  const store = setupStore();
  return render(
    <Provider store={store}>
      <PersistGate persistor={setupPersistor(store)}>
        <LogIn />
      </PersistGate>
    </Provider>,
  );
};

describe("Login component", () => {
  test("Should render correctly", async () => {
    renderLogin();
    await waitFor(() => {
      expect(screen.getByText(/LogIn/)).toBeTruthy();
      expect(screen.getByText(/Submit/)).not.toHaveProperty("onPress");
    });
  }, 9999999);
  test("Should pressing TouchableOpacity calls handleSubmit", async () => {
    renderLogin();
    const inputUsername = screen.getByTestId("input1");
    const inputPassword = screen.getByTestId("input2");
    fireEvent.changeText(inputUsername, "pippo");
    fireEvent.changeText(inputPassword, "Pippo1234!");
    fireEvent.press(screen.getByText(/Submit/));
    await waitFor(() => {
      expect(handleSubmitMock).toHaveBeenCalled();
    });
  }, 9999999);
});
