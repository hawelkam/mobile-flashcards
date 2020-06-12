import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions/index'

function entries (state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.title]: action.deck
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    // ADD question to array
                }
            }
        default:
            return state
    }
}

export default entries;