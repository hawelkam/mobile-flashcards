import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Details({navigation}) {
    return (
        <View>
            <Text>Details</Text>
            <Button
                title="Add question"
                onPress={() => navigation.navigate('Add Question')}
            />
            <Button
                title="Quiz"
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>
    )
}
