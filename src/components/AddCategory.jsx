import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const value = inputValue.trim()
        if( value.length <= 3 ) return;
        onNewCategory( value );
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
