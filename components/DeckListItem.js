import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, TouchableOpacity, PointPropType } from 'react-native'

class DeckListItem extends Component {

    render() {
        const { deck } = this.props
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => this.props.openDetails(deck.title)}>
              <Text style={styles.deckName}>{deck.title}</Text>
              <Text>{deck.questions.length} questions</Text>
            </TouchableOpacity>
          );
    }
  }

  const styles = StyleSheet.create({
      listItem: {
          flex: 1,
          padding: 10,
          borderColor: 'black',
          borderBottomWidth: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
      },
      deckName: {
          fontSize: 30
      }
  })

  function mapStateToProps(state, { id }) {
      return {
          deck: state[id]
      }
  }

export default connect(mapStateToProps)(DeckListItem)