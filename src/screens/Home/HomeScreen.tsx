import React, {ReactElement, useContext} from "react"

import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import {LoginContext} from "../../components/LoginContext"

export const Home = (): ReactElement => {
    const {logOut} = useContext(LoginContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <TouchableOpacity onPress={logOut}>
                <Text style={styles.btn}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        paddingVertical: 20,
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "grey",
        color: "#fff",
        fontWeight: "500",
    },
})
