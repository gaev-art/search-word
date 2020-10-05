import {createSelector, Selector} from 'reselect';
import {AppStateType} from './store';


export const getWordSearch: Selector<AppStateType, Array<string>> = createSelector(
    state => state.wordsReducer.words,
    state => state.wordsReducer.wordSearch,
    state => state.wordsReducer.minLengthWord,
    state => state.wordsReducer.isCaseSensitive,
    (words: Array<string>, wordSearch, minLengthWord, isCaseSensitive) => {
        return words
            .filter(word => !minLengthWord || word.length > +minLengthWord)
            .filter(currentWord => {
                const word = isCaseSensitive ? currentWord : currentWord.toLowerCase()
                const search = isCaseSensitive ? wordSearch : wordSearch.toLowerCase()

                return word.includes(search)
            })
    })

