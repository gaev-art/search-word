import React, {useState} from 'react';
import style from './SearchByLengthWord.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {action} from '../../redux/wordsReducer';
import Btn from '../u0-common/button';
import Input from '../u0-common/Input';
import {AppStateType} from '../../redux/store';


const SearchByLengthWord = React.memo(() => {

    const dispatch = useDispatch()

    const isCaseSensitive = useSelector((state: AppStateType) => state.wordsReducer.isCaseSensitive)
    const [wordSearch, setWordSearch] = useState('')

    const findByWord = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(action.wordSearchReceived(wordSearch))
    }

    const handleIsCaseSensitiveChange = () => dispatch(action.isCaseSensitiveReceived())
    const handleWordSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setWordSearch(e.currentTarget.value)

    return (
        <form onSubmit={findByWord} className={style.item}>
            <Input value={wordSearch} onChange={handleWordSearchChange} placeholder='Enter word' type='text'/>
            <Input onChange={handleIsCaseSensitiveChange} checked={isCaseSensitive} type='checkbox'/>
            <Btn title='Search by word'/>
        </form>
    )
})

export default SearchByLengthWord;
