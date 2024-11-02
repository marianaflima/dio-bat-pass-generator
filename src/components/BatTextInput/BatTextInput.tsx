import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  pass: string;
  length: string;
  setLength: (numero: string) => void;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <>
      <TextInput placeholder="pass" style={styles.inputer} value={props.pass} />

      <TextInput
        placeholder="pass length"
        style={styles.inputer}
        value={props.length}
        keyboardType="numeric"
        onChangeText={(text) => {
          props.setLength(text);
        }}
      />
    </>
  );
}
