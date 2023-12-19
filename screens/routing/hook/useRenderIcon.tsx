import { useCallback } from "react";
import { IconButton } from "react-native-paper";

const useRenderIcon = () => {
  const renderIcon = useCallback(
    (name: string) => <IconButton icon={name} iconColor="#fff" />,
    [],
  );
  return renderIcon;
};

export default useRenderIcon;
