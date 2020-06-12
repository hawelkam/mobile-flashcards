import React, { Component } from 'react'
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { submitDeck } from '../utils/api'
import { color } from 'react-native-reanimated'

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
            <SafeAreaView style={styles.container}>
                <TextInput style={styles.nameInput} value={this.state.deckName} onChangeText={this.handleTextChange} placeholder="Enter deck name..."/>
                <Button
                    title="Add new deck"
                    onPress={this.handleSubmit}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    nameInput: {
        width: 300,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontSize: 24,
        margin: 10,
    }
})


export default connect()(NewDeck)
