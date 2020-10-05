import React, {useState} from 'react';
import style from './SearchByWord.module.css';
import {useDispatch} from 'react-redux';
import {action} from '../../redux/wordsReducer';
import Button from '../u0-common/button';
import Input from '../u0-common/Input';


const SearchByWord = React.memo(() => {

    const dispatch = useDispatch()

    const [minWordLength, setMinWordLength] = useState('')

    const findWordByLengthWord = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(action.minLengthWordReceived(minWordLength))
    }

    const handleMinWordLengthChange = (e:React.ChangeEvent<HTMLInputElement>) => setMinWordLength(e.currentTarget.value)

    return (
        <form onSubmit={findWordByLengthWord} className={style.item}>
            <Input value={minWordLength} onChange={handleMinWordLengthChange} placeholder='Enter length' type='number'/>
            <Button title='Search by length word'/>
        </form>
    )
})

export default SearchByWord;
