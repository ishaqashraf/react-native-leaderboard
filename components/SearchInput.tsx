import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { ISearchInputProps } from '@/redux/types';

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <ThemedView style={styles.searchBox}>
      <Searchbar
        autoComplete='off'
        autoFocus
        style={styles.searchBar}
        placeholder='Enter user name'
        onChangeText={onChange}
        value={value}
        onFocus={() => (value.length > 0 ? value : onChange(''))}
      />
      <Button
        buttonColor={Colors.light.primaryColor}
        textColor={Colors.light.background}
        disabled={value.length === 0}
        style={styles.button}
        mode='text'
        onPress={onSearch}
      >
        Search
      </Button>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  searchBar: {
    flex: Platform.OS === 'ios' ? 0.75 : 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },

  button: {
    height: 'auto',
    flex: Platform.OS === 'ios' ? 0.3 : 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default SearchInput;
