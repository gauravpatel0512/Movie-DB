import React from 'react';

//Styles
import { Wrapper } from './Button.styles';

const Button = ({callback, text}) => (
    <Wrapper type='button' onClick={callback}>

    {text}

    </Wrapper>
);

export default Button;