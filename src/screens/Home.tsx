import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import style from './Styles';
import BatLogo from "../components/BatLogo/BatLogo";


export default function Home () {
    return (
        <View style={style.container}>
            <>
                <BatLogo/>
            </>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}
  