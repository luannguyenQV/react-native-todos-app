import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { useNavigation } from "react-navigation-hooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAweSome from "react-native-vector-icons/FontAwesome";

const TodoItem = ({ item, addTodo, updateItem, tags }) => {
  const { pop } = useNavigation();
  const [todo, setTodo] = useState(item ? item.title : "");
  const [pinned, setPinned] = useState(item ? item.isPinned : false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [localTags, setLocalTags] = useState(item ? item.tags : []);

  let textInput = null;

  useEffect(() => {
    textInput.focus();
  }, [textInput]);

  const onChangeText = useCallback(
    (text) => {
      setError("");
      setSuccess("");
      setTodo(text);
    },
    [setTodo]
  );

  const onChangePinned = useCallback(() => {
    setPinned((prev) => !prev);
  }, [setPinned]);

  const onAddTodo = useCallback(() => {
    if (todo === "") {
      setError("Please enter your task!");
      setSuccess("");
      return;
    }

    if (item) {
      updateItem({
        ...item,
        title: todo,
        updatedAt: Date.now(),
        isPinned: pinned,
        tags: [...localTags],
      });
      setTodo("");
      setLocalTags([]);
      setSuccess("Updated success!");
    } else {
      addTodo({
        title: todo,
        isPinned: pinned,
        tags: [...localTags],
      });
      setLocalTags([]);
      setSuccess("Created success!");
    }
    pop();
  }, [addTodo, todo, updateItem, item, pop, pinned, localTags]);

  const onToggleTag = useCallback(
    (t, isExist) => {
      if (isExist) {
        setLocalTags([...localTags.filter((o) => o !== t)]);
      } else {
        setLocalTags([...localTags, t]);
      }
    },
    [localTags, setLocalTags]
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={styles.container}>
        <View styles={styles.title}>
          <Text h4>Todo</Text>
          <View style={styles.pin}>
            <TouchableOpacity onPress={onChangePinned}>
              <FontAweSome
                size={30}
                name="thumb-tack"
                color={pinned ? "#FF5A5F" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            maxLength={80}
            placeholder="Todo now..."
            ref={(element) => (textInput = element)}
            onChangeText={onChangeText}
            value={todo}
            style={styles.input}
          />
          <View style={{ marginTop: 20 }}>
            <Text>{`${80 - todo.length}/80`}</Text>
          </View>
        </View>
        <View style={[styles.title, { marginTop: 20, marginBottom: 20 }]}>
          <Text h4>Tags</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {Object.keys(tags).map((t) => {
            const isTagSelected = localTags.includes(t);
            return (
              <View
                key={t}
                style={{
                  paddingLeft: 0,
                  paddingRight: 10,
                  flexDirection: "row",
                }}>
                <TouchableOpacity onPress={() => onToggleTag(t, isTagSelected)}>
                  <Ionicons
                    size={40}
                    name={
                      isTagSelected
                        ? "ios-checkmark-circle"
                        : "ios-checkmark-circle-outline"
                    }
                    color={tags[t].color}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.success} h4>
            {success}
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            title={item ? "UPDATE TODO" : "ADD TODO"}
            onPress={onAddTodo}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: "relative",
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    left: 20,
    right: 20,
  },
  title: {
    flexDirection: "row",
    position: "relative",
  },
  pin: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  messageContainer: {
    marginTop: 20,
  },
  inputContainer: {
    paddingTop: 30,
  },
  input: {
    fontSize: 25,
    color: "#484848",
  },
  error: {
    color: "#FF5A5F",
    fontSize: 20,
  },
  success: {
    color: "#155724",
    fontSize: 20,
  },
});
