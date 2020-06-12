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
        console.log(title)
        this.props.navigation.navigate('Details', { deckId: title })
    }


    render() {
        console.log("Decklist props: ", this.props)
        return (
            <SafeAreaView>
                <Text>DeckList</Text>
                <FlatList
                    data={this.props.deckIds}
                    renderItem={({ item }) => <DeckListItem id={item} openDetails={this.openDetails}/>}
                    keyExtractor={item => item}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', { test: "Test val"})}
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
