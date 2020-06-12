import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'
import DeckListItem from './DeckListItem'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        fetchDecks().then((decks) => {
            dispatch(receiveDecks(decks))})
    }
    
    openDetails = (title) => {
        this.props.navigation.navigate('Details', { deckId: title })
    }


    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.deckIds}
                    renderItem={({ item }) => <DeckListItem id={item} openDetails={this.openDetails}/>}
                    keyExtractor={item => item}
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
