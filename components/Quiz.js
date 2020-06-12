import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function NewDeck({navigation}) {
    return (
        <SafeAreaView>
            <Text>Quiz</Text>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    )
}
