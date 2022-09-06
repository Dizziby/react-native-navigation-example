import React, {ReactElement} from "react"

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import {useAppNavigation} from "../types/types";
import SettingsScreen from "./SetiingsScreen/SettingsScreen";

const General = (): ReactElement => (
    <View>
        <Text>General</Text>
    </View>
)
const Display = (): ReactElement => (
    <View>
        <Text>Display</Text>
    </View>
)
const Battery = (): ReactElement => (
    <View>
        <Text>Battery</Text>
    </View>
)
const Wallpaper = (): ReactElement => (
    <View>
        <Text>Wallpaper</Text>
    </View>
)


const Stack = createNativeStackNavigator()

export const Settings = (): ReactElement => {
    const navigation = useAppNavigation()

    return (<View style={styles.container}>
        <Text style={styles.title}>SettingsScreen</Text>
        <TouchableOpacity onPress={() => {
            navigation.navigate("UsersScreen", {
                screen: "UserDetailsScreen"
            })
        }} />

        <Stack.Navigator>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
            <Stack.Screen name="General" component={General}/>
            <Stack.Screen name="Display" component={Display}/>
            <Stack.Screen name="Battery" component={Battery}/>
            <Stack.Screen name="Wallpaper" component={Wallpaper}/>
        </Stack.Navigator>
    </View>)
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center"},
    title: {
        fontSize: 20,
    }
})
