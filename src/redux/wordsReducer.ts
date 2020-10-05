import {InferActionTypes, AppStateType} from './store';
import {ThunkAction} from 'redux-thunk';
import {Dispatch} from 'redux';
import {wordsApi} from '../api/wordsApi';

const SET_WORDS = 'SET_WORDS';
const SET_WORD_SEARCH = 'SET_WORD_SEARCH';
const SET_MIN_LENGTH_WORD = 'SET_MIN_LENGTH_WORD';
const SET_IS_CASE_SENSITIVE = 'SET_IS_CASE_SENSITIVE';

const initialState = {
    words: [] as Array<string>,
    wordSearch: '',
    isCaseSensitive: false,
    minLengthWord: ''
};


export const wordsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_WORDS:
        case SET_WORD_SEARCH:
        case SET_MIN_LENGTH_WORD:
            return {...state, ...action.payload}
        case SET_IS_CASE_SENSITIVE:
            return {...state, isCaseSensitive: !state.isCaseSensitive}
        default:
            return state
    }
}

export const action = {

    wordsReceived: (words:Array<string>) => ({
        type: SET_WORDS,
        payload: {words}
    }as const),
    wordSearchReceived: (wordSearch:string) => ({
        type: SET_WORD_SEARCH,
        payload: {wordSearch}
    }as const),
    minLengthWordReceived: (minLengthWord: string ) => ({
        type: SET_MIN_LENGTH_WORD,
        payload: {minLengthWord}
    }as const),
    isCaseSensitiveReceived: () => ({
        type: SET_IS_CASE_SENSITIVE
    }as const),
}

export const getWords = (): ThunkType => async (dispatch: Dispatch) => {
    try {
        const res = await wordsApi.getWords()
        console.log(res)
        dispatch(action.wordsReceived(res))
    } catch (e) {
        alert('error')
    }
}


//Types
type ActionTypes = InferActionTypes<typeof action>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
export type InitialStateType = typeof initialState