import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addQuestion } from '../actions/index'
import { submitDeck } from '../utils/api'


class Details extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({ title: this.props.deck.title })
    }
    
    handleSubmit = (q, a) => {
        const { deck, dispatch, navigation } = this.props
        const newQuestion = {
            question: q,
            answer: a
        }
        dispatch(addQuestion({
            deckId: deck.title,
            question: newQuestion
        }))

        submitDeck({deck, key: deck.title}).then(() => {
            navigation.navigate('Details', { deckId: deck.title })
        })
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView>
                <Text>{this.props.deck.questions.length} questions</Text>
                <Button
                    title="Add question"
                    onPress={() => navigation.navigate('Add Question', { handleSubmit: this.handleSubmit })}
                />
                <Button
                    title="Quiz"
                    onPress={() => navigation.push('Quiz', { questions: this.props.deck.questions })}
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
