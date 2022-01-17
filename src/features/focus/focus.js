import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject, ...props }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            // onSubmitEditing={({ nativeEvent }) => {
            //   setSubject(nativeEvent.text);
            // }}
            onChangeText={setSubject}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
              console.log(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
