import React from 'react';
import { ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';


const Loading = () => {
  return (
    <ThemedView style={styles.containerLoading}>
      <ThemedView style={styles.containerIndicator}>
        <ActivityIndicator size={'large'} color={Colors.light.primaryColor} />
        <ThemedText style={styles.loadingTextStyle}>Loading...</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.loadingBackgroundColor,
  },
  containerIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.transparentColor,
  },
  loadingTextStyle: {
    fontSize: 25,
    color: Colors.light.primaryColor,
    marginLeft: 20,
  },
});
