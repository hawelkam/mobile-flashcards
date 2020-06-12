import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class Quiz extends Component {
    state = {
        showAnswer: false,
        currentQuestion: 1,
        numberOfQuestions: 0,
        correctAnswers: 0,
        noQuestionsPrompt: false
    }

    componentDidMount() {
        const { questions } = this.props.route.params
        if (questions.length === 0) {
            this.setState(() => ({
                noQuestionsPrompt: true
            }))
        } else {
            this.setState(() => ({
                numberOfQuestions: questions.length
            }))
        }
    }

    toggleAnswer = () => {
        this.setState(() => ({
            showAnswer: !this.state.showAnswer
        }))
    }

    handleCorrect = () => {
        this.setState(() => ({
            correctAnswers: this.state.correctAnswers + 1,
            showAnswer: false,
            currentQuestion: this.state.currentQuestion === this.state.numberOfQuestions ? 'done' : (this.state.currentQuestion + 1)
        }))
    }

    handleIncorrect = () => {
        this.setState(() => ({
            showAnswer: false,
            currentQuestion: this.state.currentQuestion === this.state.numberOfQuestions ? 'done' : (this.state.currentQuestion + 1)
        }))
    }

    restart = () => {
        this.setState(() => ({
            showAnswer: false,
            currentQuestion: 1,
            correctAnswers: 0
        }))
    }
    

    render() {
        const { questions } = this.props.route.params

        if (this.state.noQuestionsPrompt) {
            return (
                <SafeAreaView>
                <Text>There are no questions in this deck!</Text>
                <Button
                    title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>)
        }

        return this.state.currentQuestion === 'done' ? ( 
            <SafeAreaView>
                <Text>RESULTS</Text>
                <Text>Your score is {this.state.correctAnswers / this.state.numberOfQuestions * 100}%</Text>
                <TouchableOpacity
                    onPress={this.restart}><Text>Start over</Text></TouchableOpacity> 
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}><Text>Return to Deck View</Text></TouchableOpacity> 
            </SafeAreaView>
        ) : (
            <SafeAreaView>
                <Text>{(questions.length - this.state.currentQuestion) === 0 ? ('Last question!') : (`Remaining questions: ${questions.length - this.state.currentQuestion}`)} </Text>
                <Text>{this.state.showAnswer ? (questions[this.state.currentQuestion - 1].answer) : (questions[this.state.currentQuestion - 1].question)}</Text>
                <TouchableOpacity
                    onPress={this.toggleAnswer}><Text>{this.state.showAnswer ? 'Hide answer' : 'Show answer'}</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleCorrect}><Text>Correct</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleIncorrect}><Text>Incorrect</Text></TouchableOpacity> 
            </SafeAreaView>
        )
    }
}
