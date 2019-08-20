import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = ({ search, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeTextSearch = useCallback(
    (text) => {
      setSearchTerm(text);
      onSearch(text);
    },
    [setSearchTerm, onSearch]
  );

  return (
    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={onChangeTextSearch}
        value={searchTerm}
      />
    </View>
  );
};

export default Search;
