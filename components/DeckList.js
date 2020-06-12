import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DeckList({navigation}) {
    return (
        <SafeAreaView>
            <Text>DeckList</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('DeckDetails')}
            />
        </SafeAreaView>
    )
}
