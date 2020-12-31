import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import NavigationType from '../global-types/navigation'

type PropsType = {
    navigation: StackNavigationProp<NavigationType, 'Home'>
}

export default (props: PropsType) => {
    const { navigation } = props

    return (
        <SafeAreaView
            style = {{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <TouchableOpacity
                onPress = {() => navigation.navigate('AnotherScreen')}
            >
                <Text
                    style = {{
                        color: 'navy',
                        fontSize: 24,
                        fontWeight: '500'
                    }}
                >
                    Go To Another Screen
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}