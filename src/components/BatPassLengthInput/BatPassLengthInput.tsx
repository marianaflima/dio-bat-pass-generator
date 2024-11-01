import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatPassLengthInputStyles";

interface BatPassLengthInputProps {
  length: string;
  setLength: (numero: string) => void;
}

export function BatPassLengthInput(props: BatPassLengthInputProps) {
  return (
    <>
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
