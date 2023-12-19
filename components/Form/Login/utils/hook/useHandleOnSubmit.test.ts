import useHandleOnSubmit from "./useHandleOnSubmit";
import { renderHook } from "@testing-library/react-native";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

jest.mock("../../../../../store/reduxSlice/userSlice/userSlice", () => ({
  logUser: () => jest.fn(),
}));

describe("useHandleOnSubmit", () => {
  test("Should return the fuction and call useDispatch", () => {
    const { result } = renderHook(() => useHandleOnSubmit());
    result.current();
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
