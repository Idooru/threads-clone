import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const hashTags = [
  "창업아이디어",
  "하이에나",
  "비행기표",
  "AI",
  "강의",
  "인프런",
  "운동하는직장인",
  "Threads birthday",
];

export default function TopicSelector() {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  // 입력값으로 필터링
  const filteredTopics = useMemo(() => {
    if (!inputValue) return hashTags;
    return hashTags.filter((hashTag) =>
      hashTag.toLowerCase().includes(inputValue.toLowerCase()),
    );
  }, [inputValue]);

  const handleSelectTopic = (hashTag: string) => {
    setSelectedTopic(hashTag);
    setInputValue(hashTag);
    setIsDropdownOpen(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add a Topic"
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
        />

        {/* 드롭다운 */}
        {isDropdownOpen && filteredTopics.length > 0 && (
          <View style={styles.dropdownList}>
            <FlatList
              data={filteredTopics}
              keyExtractor={(item) => item}
              scrollEnabled={filteredTopics.length > 5}
              nestedScrollEnabled
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.option,
                    inputValue === item && styles.selectedOption,
                  ]}
                  onPress={() => handleSelectTopic(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      inputValue === item && styles.selectedOptionText,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        )}
      </View>

      {/* 바깥쪽 터치 시 닫기 */}
      {isDropdownOpen && (
        <Pressable
          style={styles.backdrop}
          onPress={() => setIsDropdownOpen(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cursor: {
    fontSize: 16,
  },
  container: {
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 14,
  },
  dropdownList: {
    position: "absolute",
    top: 22,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 200,
    zIndex: 10,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedOption: {
    backgroundColor: "#f0f0f0",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#000",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
});
