import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import { BatPassLengthInput } from "../BatPassLengthInput/BatPassLengthInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");
  const [numero, setNumero] = useState("");

  function handleGenerateButton() {
    const numeroConvertido = parseInt(numero, 10);
    let generateToken = generatePass(numeroConvertido);
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <BatPassLengthInput length={numero} setLength={setNumero} />

      <Pressable
        style={styles.button}
        onPress={handleGenerateButton} // Chama diretamente a função
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡COPY </Text>
      </Pressable>
    </>
  );
}
