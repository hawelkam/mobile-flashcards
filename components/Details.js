import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'


class Details extends Component {
    render() {
        console.log("Detailsjs props", this.props)
        return (
            <SafeAreaView>
                <Text>Details of {this.props.route.params.deckId}</Text>
                <Button
                    title="Add question"
                    onPress={() => navigation.push('Add Question')}
                />
                <Button
                    title="Quiz"
                    onPress={() => navigation.push('Quiz')}
                />
            </SafeAreaView>
        )
    }
}

export default connect()(Details)
