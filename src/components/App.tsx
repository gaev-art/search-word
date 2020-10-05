import React, {useEffect} from 'react';
import style from './App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getWords} from '../redux/wordsReducer';
import {getWordSearch} from '../redux/wordsSelector';
import SearchByWord from './u1-search-by-word/SearchByWord';
import SearchByLengthWord from './u2-search-by-length-word/SearchByLengthWord';

function App() {

    const dispatch = useDispatch()

    const words: Array<string> = useSelector(getWordSearch)

    useEffect(() => {
        dispatch(getWords())
    }, [dispatch])

    return (
        <div className={style.app}>
            <div className={style.container}>
                <SearchByWord/>
                <SearchByLengthWord/>
            </div>
            {words.map((word: string, index: any) => <p key={index}>{word}</p>)}
        </div>
    );
}

export default App;
