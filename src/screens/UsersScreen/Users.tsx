import React, {ReactElement} from "react"

import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {UsersNestedStack} from "../types/types"

import {UserDetailsScreen} from "./UserDetailsScreen/UserDetailsScreen"
import {UsersScreen} from "./UsersScreen/UsersScreen"

const Stack = createNativeStackNavigator<UsersNestedStack>()

export const Users = (): ReactElement => (
    <Stack.Navigator>
        <Stack.Screen
            name="UsersScreen"
            component={UsersScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="UserDetailsScreen"
            component={UserDetailsScreen}
            options={({route}) => ({
                title: route.params.name,
            })}
        />
    </Stack.Navigator>
)
