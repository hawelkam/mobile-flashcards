import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'

export function submitDeck ({deck, key}) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [key]: deck,
    }))
}

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => (
        JSON.parse(results)
    ))
}