import React from 'react';
import text from './titles.json';

export const hello = (
    <h1 id='title'
        className='style'>
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='goodbye'>
        {text.goodbye}
    </h1>
)