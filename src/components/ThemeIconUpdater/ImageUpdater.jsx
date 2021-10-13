import React, { useState, useEffect } from 'react';

import { lightTheme } from '../../styles/themes/theme';

export default function ImageUpdater({ currentTheme, imageName }) {
    const [ path , setPath ] = useState('')
    useEffect(() => {
        setPath(currentTheme === lightTheme ? `./images/light/${imageName}.svg` : `./images/dark/${imageName}.svg`)
    }, [path, currentTheme, imageName])
    return (
        <img src={path} alt={imageName} />
    )
}

