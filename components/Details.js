import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
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
            <SafeAreaView style={styles.container}>
                <Text style={styles.questions}>{this.props.deck.questions.length} questions in this deck</Text>
                <View>
                    <TouchableOpacity style={[styles.detailsBtn, styles.addBtn]}
                        onPress={() => navigation.navigate('Add Question', { handleSubmit: this.handleSubmit })}
                    ><Text style={styles.addText}>Add question</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.detailsBtn, styles.quizBtn]}
                        onPress={() => navigation.push('Quiz', { questions: this.props.deck.questions })}
                    ><Text style={styles.addText}>Quiz</Text></TouchableOpacity>
                </View>
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
        justifyContent: "space-between",
        alignItems: "center"
    },
    detailsBtn : {
        fontSize: 20,
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    addBtn: {
        backgroundColor: 'green',
        marginBottom: 10
    },
    quizBtn: {
        backgroundColor: 'blue',
    },
    addText: {
        color: 'white',
        fontSize: 20
    }
})


function mapStateToProps(state, { route }) {
    return {
        deck: state[route.params.deckId]
    }
}

export default connect(mapStateToProps)(Details)
