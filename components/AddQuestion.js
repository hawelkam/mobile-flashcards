import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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


       
    render() {
        return (
            <SafeAreaView>
                <TextInput value={this.state.question} onChangeText={this.handleQuestionChange} placeholder="Question"/>
                <TextInput value={this.state.answer} onChangeText={this.handleAnswerChange} placeholder="Answer"/>
                <TouchableOpacity
                    title="Add question"
                    onPress={() => {
                        this.props.route.params.handleSubmit(this.state.question, this.state.answer)
                        this.setState(() => ({
                            question: '',
                            answer: ''
                        }))}}
                ><Text>ADD</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

 
