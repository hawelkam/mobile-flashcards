import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'

export default class AddQuestion extends Component {

    state = {
        question: '',
        answer: ''
    }

    handleQuestionChange = (input) => {
        this.setState(() => ({
            question: input
        }))
    }

    handleAnswerChange = (input) => {
        this.setState(() => ({
            answer: input
        }))
    }

    handleSubmit = () => {
        const newQuestion = {
            question: this.state.question,
            answer: this.state.answer
        }
        //this.props.dispatch(addDeck(deck))

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        //submitDeck({deck, key: deck.title})
    }
       
    render() {
        return (
            <SafeAreaView>
                <TextInput value={this.state.question} onChangeText={this.handleQuestionChange} placeholder="Question"/>
                <TextInput value={this.state.answer} onChangeText={this.handleAnswerChange} placeholder="Answer"/>
                <TouchableOpacity
                    title="Add question"
                    onPress={this.handleSubmit}
                ><Text>ADD</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

 
