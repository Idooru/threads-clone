import NotFound from "@/app/+not-found";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  if (
    ![
      "/activity",
      "/activity/follows",
      "/activity/replies",
      "/activity/mentions",
      "/activity/quotes",
      "/activity/reposts",
      "/activity/verified",
    ].includes(pathname)
  ) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.replace("/activity")}>
        <Text
          style={{
            color: pathname === "/activity" ? "red" : "black",
            fontSize: 16,
            fontWeight: pathname === "/activity" ? "bold" : "normal",
          }}
        >
          All
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/follows")}>
          <Text
            style={{
              color: pathname === "/activity/follows" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/follows" ? "bold" : "normal",
            }}
          >
            Follows
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/replies")}>
          <Text
            style={{
              color: pathname === "/activity/replies" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/replies" ? "bold" : "normal",
            }}
          >
            Replies
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/mentions")}>
          <Text
            style={{
              color: pathname === "/activity/mentions" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/mentions" ? "bold" : "normal",
            }}
          >
            Mentions
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/quotes")}>
          <Text
            style={{
              color: pathname === "/activity/quotes" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/quotes" ? "bold" : "normal",
            }}
          >
            Quotes
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/reposts")}>
          <Text
            style={{
              color: pathname === "/activity/reposts" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/reposts" ? "bold" : "normal",
            }}
          >
            Reposts
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace("/activity/verified")}>
          <Text
            style={{
              color: pathname === "/activity/verified" ? "red" : "black",
              fontSize: 16,
              fontWeight: pathname === "/activity/verified" ? "bold" : "normal",
            }}
          >
            Verified
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
