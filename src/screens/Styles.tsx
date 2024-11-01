import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flexDirection: "column",
        borderColor: "gold",
        borderWidth: 2,
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 20,
        padding: 20,
        borderRadius: 15,
    },
    inputContainer:{
        width:'80%',
        borderColor: 'black',
        borderRadius: 7,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    }
});

export default styles;
