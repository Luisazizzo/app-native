import { SafeAreaView } from "react-native";
import Signup from "../../components/Form/Signup/Signup";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LogIn from "../../components/Form/Login/Login";

const Auth = () => {
  const user = useSelector((state: RootState) => state.user);
  const renderForm = useMemo(() => {
    if (user.username) {
      return <LogIn />;
    }
    return <Signup />;
  }, [user]);

  return <SafeAreaView>{renderForm}</SafeAreaView>;
};

export default Auth;
