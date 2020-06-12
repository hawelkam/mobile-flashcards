import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { submitDeck } from '../utils/api'

class NewDeck extends Component {
    state = {
        deckName: ''
    }

    handleTextChange = (input) => {
        this.setState(() => ({
            deckName: input
        }))
    }

    handleSubmit = () => {
        const deck = {
            title: this.state.deckName,
            questions: []
        }
        this.props.dispatch(addDeck(deck))

        this.setState(() => ({
            deckName: ''
        }))

        submitDeck({deck, key: deck.title})

        this.props.navigation.navigate('Decks')
    }

    render() {
        return (
            <SafeAreaView>
                <Text>NewDeck</Text>
                <TextInput value={this.state.deckName} onChangeText={this.handleTextChange} />
                <Button
                    title="Add new deck"
                    onPress={this.handleSubmit}
                />
            </SafeAreaView>
        )
    }
}

export default connect()(NewDeck)
