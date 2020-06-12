import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        fetchDecks().then((decks) => {
            dispatch(receiveDecks(decks))})
    }
    
    render() {
        return (
            <SafeAreaView>
                <Text>DeckList</Text>
                {this.props.deckIds.map((id) => (
                    <Text key={id}>{id}</Text>    
                ))}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DeckDetails')}
                />
            </SafeAreaView>
        )
    }
}

function mapStateToProps (state) {
    return {
        deckIds: Object.keys(state),
        decks: state
    }
}

export default connect(mapStateToProps)(DeckList)
