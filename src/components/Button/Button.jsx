import React from 'react';
import { ButtonWrapper } from './Button';

export default function Button(props) {
    return (
        <ButtonWrapper background={props.background} >
            <button { ...props }>{props.children}</button>
        </ButtonWrapper>
    )
}