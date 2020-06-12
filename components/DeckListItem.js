import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

class DeckListItem extends Component {
    render() {
        const { deck } = this.props
        return (
            <View style={styles.listItem}>
              <Text>{deck.title}</Text>
              <Text>{deck.questions.length} questions</Text>
            </View>
          );
    }
  }

  const styles = StyleSheet.create({
      listItem: {
          flex: 1,
          padding: 10,
          borderColor: 'black',
          borderBottomWidth: 2,
      }
  })

  function mapStateToProps(state, { id }) {
      return {
          deck: state[id]
      }
  }

export default connect(mapStateToProps)(DeckListItem)