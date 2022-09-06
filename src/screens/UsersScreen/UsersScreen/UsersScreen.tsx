import React, {ReactElement} from "react"

import {
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import {users, UserType} from "../../../data/data"
import {useAppNavigation} from "../../types/types"

export const UserScreen = (): ReactElement => {
    const navigation = useAppNavigation()

    const render: ListRenderItem<UserType> = ({item}) => (
        <View style={styles.renderList}>
            <TouchableOpacity
                style={styles.list}
                onPress={() => {
                    navigation.navigate("UsersScreen", {
                        screen: "UserDetailsScreen",
                        params: {id: item.id, name: item.name, age: item.age},
                    })
                }}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={users}
                renderItem={render}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flatList: {
        width: "100%",
        paddingHorizontal: 20,
    },
    renderList: {
        width: "100%",
    },
    list: {
        flexDirection: "row",
        borderWidth: 1,
        marginVertical: 5,
        padding: 10,
    },
})
