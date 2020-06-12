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
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.concat([action.question])
                }
            }
        default:
            return state
    }
}

export default entries;