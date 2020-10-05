import React from 'react';

type ButtonType = {
    title: string

}

const Button: React.FC<ButtonType> = React.memo(({title}) => {
    return (
        <button type='submit'>{title}</button>
    )
})

export default Button;
