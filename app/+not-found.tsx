import { usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <View>
      <Text>404 Not Found</Text>
      <Text>{pathname}</Text>
    </View>
  );
}
