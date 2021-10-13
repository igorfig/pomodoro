import React, { useState, useEffect} from 'react';

import { HeaderWrapper } from '../styles/styles'
import { darkTheme } from '../../styles/themes/theme';
import ImageUpdater from '../../components/ThemeIconUpdater/ImageUpdater'

export default function Header({ theme, onToggle, isToggle }) {
    const [ toggle, setToggle ] = useState(false);
    useEffect(() => setToggle(isToggle), [isToggle])
    return (
        <HeaderWrapper>
            <div>
                <ImageUpdater currentTheme={theme} imageName={theme === darkTheme ? 'darkTomato' : 'tomato'}/>
                <h1>Pomofocus</h1>
            </div> 
            <button type="button" onClick={() => setToggle(prevState => !prevState)}>
                <ImageUpdater currentTheme={theme} imageName={theme === darkTheme ? 'darkSettings' : 'settings'} />
                { useEffect(() => onToggle(toggle), [onToggle, toggle]) }
            </button>
        </HeaderWrapper>
    )
}