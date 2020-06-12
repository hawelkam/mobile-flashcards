import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers'

export default class Quiz extends Component {
    state = {
        showAnswer: false,
        currentQuestion: 1,
        numberOfQuestions: 0,
        correctAnswers: 0,
        noQuestionsPrompt: true
    }

    componentDidMount() {
        const { questions } = this.props.route.params
        if (questions.length !== 0) {
            this.setState(() => ({
                noQuestionsPrompt: false,
                numberOfQuestions: questions.length
            }))
        }

        clearLocalNotifications()
        setLocalNotification()
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
                <SafeAreaView style={styles.container}>
                <Text style={styles.prompt}>There are no questions in this deck!</Text>
                <Button
                    title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>)
        } else {
            return this.state.currentQuestion === 'done' ? ( 
                <SafeAreaView style={[styles.container, styles.question]}>
                    <View>
                        <Text style={{fontSize: 40}}>Quiz results</Text>
                        <Text style={styles.prompt}>Your score is {this.state.correctAnswers / this.state.numberOfQuestions * 100}%</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.answerBtn, styles.correctBtn]}
                            onPress={this.restart}><Text style={styles.btnText}>Start over</Text></TouchableOpacity> 
                        <TouchableOpacity style={[styles.answerBtn, styles.returnBtn]}
                            onPress={() => this.props.navigation.goBack()}><Text style={styles.btnText}>Return to Deck View</Text></TouchableOpacity>
                    </View> 
                </SafeAreaView>
            ) : (
                <SafeAreaView style={[styles.container, styles.question]}>
                    <Text style={styles.prompt}>{(questions.length - this.state.currentQuestion) === 0 ? ('Last question!') : (`Remaining questions: ${questions.length - this.state.currentQuestion}`)} </Text>
                    <View style={styles.questionCard}>
                        <Text style={styles.questionTxt}>{this.state.showAnswer ? (questions[this.state.currentQuestion - 1].answer) : (questions[this.state.currentQuestion - 1].question)}</Text>
                        <TouchableOpacity style={styles.showAnswerBtn}
                            onPress={this.toggleAnswer}><Text>{this.state.showAnswer ? 'Hide answer' : 'Show answer'}</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.answerBtn, styles.correctBtn]}
                            onPress={this.handleCorrect}><Text style={styles.btnText}>Correct</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.answerBtn, styles.incorrectBtn]}
                            onPress={this.handleIncorrect}><Text style={styles.btnText}>Incorrect</Text></TouchableOpacity> 
                    </View>
                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({
    prompt: {
        fontSize: 24,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    question: {
        justifyContent: "space-between"
    },
    questionTxt: {
        fontSize: 40,
        textAlign: "center"
    },
    questionCard: {
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: 'white',
        shadowColor: "#000",
        width: 300,
        height: 300,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    showAnswerBtn: {
        marginBottom: 10
    },
    answerBtn : {
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    correctBtn : {
        backgroundColor: 'green',
    },
    incorrectBtn : {
        backgroundColor: 'red',
    },
    returnBtn : {
        backgroundColor: 'grey',
    },
    btnText: {
        color: 'white',
        fontSize: 20
    }
})
