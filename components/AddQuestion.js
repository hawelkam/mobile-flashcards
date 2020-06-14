import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
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

    validateInput = () => (
        this.state.question === '' || this.state.answer === '' || this.state.question === this.state.answer
    )
 
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput style={styles.txtInput} value={this.state.question} onChangeText={this.handleQuestionChange} placeholder="Question"/>
                <TextInput style={styles.txtInput} value={this.state.answer} onChangeText={this.handleAnswerChange} placeholder="Answer"/>
                <TouchableOpacity style={styles.addBtn} disabled={this.validateInput()}
                    onPress={() => {
                        this.props.route.params.handleSubmit(this.state.question, this.state.answer)
                        this.setState(() => ({
                            question: '',
                            answer: ''
                        }))}}
                ><Text style={styles.addText}>ADD</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    questions: {
        fontSize: 24,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addBtn : {
        fontSize: 20,
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
    },
    addText: {
        color: 'white',
        fontSize: 20
    },
    txtInput: {
        width: 300,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontSize: 24,
        margin: 10,
    }
})

 
