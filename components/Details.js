import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'


class Details extends Component {
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length} questions</Text>
                <Button
                    title="Add question"
                    onPress={() => navigation.navigate('Add Question')}
                />
                <Button
                    title="Quiz"
                    onPress={() => navigation.push('Quiz')}
                />
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state, { route }) {
    return {
        deck: state[route.params.deckId]
    }
}

export default connect(mapStateToProps)(Details)
